import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Left side: Product details (or placeholder) */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="*"
              element={<div>Please select a product from the list.</div>}
            />
          </Routes>
        </div>

        {/* Right side: Product list */}
        <div
          style={{
            width: "300px",
            borderLeft: "1px solid #ccc",
          }}
        >
          <ProductList />
        </div>
      </div>
    </Router>
  );
};

export default App;
