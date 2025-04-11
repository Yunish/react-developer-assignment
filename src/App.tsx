import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./styles/layout.css";
import EmptyState from "./atoms/EmptyState";
import EmptyBoxIcon from "./atoms/EmptyBoxIcon";

const App: React.FC = () => {
  return (
    <Router>
      <div className="layout-container">
        {/* Left side: Product details (or placeholder) */}
        <div className="left-panel">
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<EmptyState icon={<EmptyBoxIcon />} />} />
          </Routes>
        </div>

        {/* Right side: Product list */}
        <div className="right-panel">
          <ProductList />
        </div>
      </div>
    </Router>
  );
};

export default App;
