import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
