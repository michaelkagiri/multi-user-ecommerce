// import {SignInButton} from "@clerk/clerk-react"
import Navbar from "./components/Navbar"
import {Navigate, Route, Routes} from "react-router"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import ProfilePage from "./pages/ProfilePage"
import CreatePage from "./pages/CreatePage"
import EditProductPage from "./pages/EditProductPage"
import useUserSync from "./hooks/useUserSync"
import useAuthReq from "./hooks/useAuthReq"

function App() {
const {isClerkLoaded, isSignedIn } = useAuthReq()
useUserSync();

if (!isClerkLoaded) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile" element={isSignedIn ? <ProfilePage /> : <Navigate to={"/"} />} />
          <Route path="/create" element={isSignedIn ? <CreatePage /> : <Navigate to={"/"} />} />
          <Route
            path="/edit/:id" element={isSignedIn ? <EditProductPage /> : <Navigate to={"/"} />} />
        </Routes>
      </main>
    </div>
  )
}
export default App