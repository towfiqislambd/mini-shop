import { useState } from "react";
import { ShoppingCart, Menu, X, Search, User, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Shop<span className="text-blue-600">Mini</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Wishlist */}
            <button className="hidden sm:block p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Heart className="h-5 w-5" />
            </button>

            {/* User*/}
            <button className="hidden sm:block p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile-only icons */}
            <div className="flex items-center justify-around pt-4 border-t border-gray-200 mt-4">
              <button className="flex flex-col items-center p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Search className="h-5 w-5 mb-1" />
                <span className="text-xs">Search</span>
              </button>
              <button className="flex flex-col items-center p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Heart className="h-5 w-5 mb-1" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button className="flex flex-col items-center p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <User className="h-5 w-5 mb-1" />
                <span className="text-xs">Account</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
