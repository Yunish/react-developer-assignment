import React from "react";
import { Product } from "../types/types";
import Ratings from "../atoms/Ratings";
import StockStatus from "../atoms/StockStatus";
import PriceDetails from "../atoms/PriceDetails";
import KeyValueMapper from "../atoms/KeyValueMapper";
import DiscountRate from "../atoms/DiscountRate";
import { useNavigate } from "react-router-dom";
import "../styles/product-card.css";

interface IProductCard {
  product: Product;
}

function ProductCard({ product }: Readonly<IProductCard>) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="thunbnail"
        />
        {product.discountPercentage > 0 && (
          <DiscountRate rate={product.discountPercentage} />
        )}
      </div>

      <div style={{ padding: "1rem" }}>
        <div className="product-details">
          <h4 className="product-title" title={product.title}>
            {product.title}
          </h4>
        </div>

        <Ratings rating={product.rating} />
        
        <div style={{ marginBottom: "0.75rem" }}>
          <KeyValueMapper label="Brand" value={product.brand ?? "-"} />
          <KeyValueMapper label="Category" value={product.category} />
          <KeyValueMapper
            label="Min. Order"
            value={product.minimumOrderQuantity}
          />
        </div>

        <PriceDetails
          price={product.price}
          discountPercentage={product.discountPercentage}
        />

        <div className="stock-section">
          <StockStatus stock={product.stock} />

          <button
            className="view-button"
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
