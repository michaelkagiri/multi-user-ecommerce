import { Link } from "react-router";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { ShoppingBagIcon, PlusIcon, UserIcon } from "lucide-react";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <div className="navbar bg-black">
      <div className="max-w-5xl mx-auto w-full px-4 flex justify-between items-center">
        {/* LOGO - LEFT SIDE */}
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost gap-2">
            <ShoppingBagIcon className="text-white size-5" />
            <span className="text-lg font-bold font-mono uppercase tracking-wide">tuscan shop</span>
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          {isSignedIn ? (
            <>
              <Link to="/create" className="btn btn-primary btn-sm gap-1">
                <PlusIcon className="size-4" />
                <span className="hidden sm:inline">New Product</span>
              </Link>
              <Link to="/profile" className="btn btn-ghost btn-sm gap-1">
                <UserIcon className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="btn bg-white text-black font-bold">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn bg-white text-black font-bold">Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;