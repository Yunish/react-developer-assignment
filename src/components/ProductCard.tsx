import React from "react";
import { Product } from "../types/types";
import Ratings from "../atoms/Ratings";
import StockStatus from "../atoms/StockStatus";
import PriceDetails from "../atoms/PriceDetails";
import KeyValueMapper from "../atoms/KeyValueMapper";
import DiscountRate from "../atoms/DiscountRate";
import { useNavigate } from "react-router-dom";

interface IProductCard {
  product: Product;
}

function ProductCard({ product }: Readonly<IProductCard>) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        maxWidth: "24rem",
        borderRadius: "0.5rem",
        overflow: "hidden",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        backgroundColor: "#ffffff",
        transition: "box-shadow 0.3s ease",
        fontFamily: "sans-serif",
      }}
    >
      {/* Product Image */}
      <div
        style={{
          position: "relative",
          height: "12rem",
          overflow: "hidden",
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
        {product.discountPercentage > 0 && (
          <DiscountRate rate={product.discountPercentage} />
        )}
      </div>

      {/* Product Details */}
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <h4
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "#111827",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "90%",
            }}
            title={product.title}
          >
            {product.title}
          </h4>
        </div>

        {/* Rating */}
        <Ratings rating={product.rating} />
        {/* Details */}
        <div style={{ marginBottom: "0.75rem" }}>
          <KeyValueMapper label="Brand" value={product.brand ?? "-"} />
          <KeyValueMapper label="Category" value={product.category} />
          <KeyValueMapper
            label="Min. Order"
            value={product.minimumOrderQuantity}
          />
        </div>

        {/* Price */}
        <PriceDetails
          price={product.price}
          discountPercentage={product.discountPercentage}
        />

        {/* Stock & Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.75rem",
          }}
        >
          <StockStatus stock={product.stock} />

          <button
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
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
