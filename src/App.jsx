import React from "react";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import HeaderWithNavbar from "./components/layout/header/HeaderWithNavbar";
import CategoryPage from "./components/pages/categoryPage/CategoryPage";
import ProductDetailPage from "./components/pages/productDetail/ProductDetail";
import Checkout from "./components/pages/checkout/Checkout";
import Footer from "./components/layout/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <CartProvider>
        <Router>
          <HeaderWithNavbar />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </Router>
        <ToastContainer />
      </CartProvider>
    </div>
  );
}

export default App;
