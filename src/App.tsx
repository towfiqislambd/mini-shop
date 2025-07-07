import { useState } from "react";
import Navbar from "./Shared/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import CartSidebar from "./components/CartSidebar";
import CheckoutPage from "./components/CheckoutPage";
import Footer from "./Shared/Footer";
import { products } from "./data/products";
import { Product } from "./context/CartContext";

function App() {
  // States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Functions
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <>
      <Navbar onCartClick={handleCartClick} />
      <Hero />
      <ProductGrid products={products} onProductClick={handleProductClick} />
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
      />

      {/* Card Modal */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={closeCart}
        onCheckoutClick={handleCheckoutClick}
      />

      {/* Checkout Modal */}
      <CheckoutPage isOpen={isCheckoutOpen} onClose={closeCheckout} />
    </>
  );
}

export default App;
