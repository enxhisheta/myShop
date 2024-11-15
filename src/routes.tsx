import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartSummaryPage from "./pages/CartSummaryPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import AddProductsPage from "./pages/AddProductsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartSummaryPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      <Route path="/add-products" element={<AddProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
