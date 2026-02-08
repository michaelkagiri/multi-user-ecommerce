import { useProducts } from "../hooks/useProducts";
import { PackageIcon } from "lucide-react";
import { Link } from "react-router-dom"; // ← note: usually "react-router-dom" not "react-router"
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const { data: products = [], isLoading, error } = useProducts(); 
  // ↑ Default to empty array if data is undefined → prevents .length / .map crash

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }

  // At this point: !isLoading && !error
  // products is now guaranteed to be array (thanks to = [] fallback)

  return (
    <div>
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