import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({
  product,
  onProductClick,
}: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400 fill-current"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400 fill-current opacity-50"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="h-3 sm:h-4 w-3 sm:w-4 text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Out of Stock
          </div>
        )}
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
          {product.category}
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
          {product.name}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="ml-2 text-xs sm:text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <span className="text-lg sm:text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md transition-colors duration-200 text-xs sm:text-sm ${
              product.inStock
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="h-3 sm:h-4 w-3 sm:w-4" />
            <span className="hidden sm:inline">
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </span>
            <span className="sm:hidden">{product.inStock ? "Add" : "N/A"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
