import React from "react";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderWithNavbar from "./components/layout/header/HeaderWithNavbar";
import CategoryPage from "./components/pages/categoryPage/CategoryPage";
import ProductDetailPage from "./components/pages/productDetail/ProductDetail";
import CartPage from "./components/pages/cartPage/CartPage";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Router>
        <HeaderWithNavbar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
