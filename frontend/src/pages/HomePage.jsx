import { useProducts } from "../hooks/useProducts";
import { PackageIcon} from "lucide-react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";
// import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }

  return (
    <div>
    
      {/* <div className="rounded-box overflow-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 py-10">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110" />
            <img
              src="/image.png"
              alt="Creator"
              className="relative h-64 lg:h-72 rounded-2xl shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Share Your <span className="text-primary">Products</span>
            </h1>
            <p className="py-4 text-base-content/60">
              Upload, discover, and connect with creators.
            </p>
            <SignInButton mode="modal">
              <button className="btn btn-primary">
                <SparklesIcon className="size-4" />
                Start Selling
              </button>
            </SignInButton>
          </div>
        </div>
      </div> */}

      {/* PRODUCTS */}
      <div>
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <PackageIcon className="text-white size-5" />
          All Products
        </h2>

        {products.length === 0 ? (
          <div className="card bg-black">
            <div className="card-body items-center text-center py-16">
              <PackageIcon className="size-16 text-base-content/20" />
              <h3 className="card-title text-base-content/50">No products yet</h3>
              <p className="text-base-content/40 text-sm">Be the first to share something!</p>
              <Link to="/create" className="bg-white text-black px-4 py-2 rounded-md mt-4 font-medium">
                Create Product
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default HomePage;