import React from "react";

interface IPriceDetails {
  discountPercentage: number;
  price: number;
}

function PriceDetails({ discountPercentage, price }: Readonly<IPriceDetails>) {
  return (
    <div style={{ margin: "1rem 0" }}>
      {discountPercentage > 0 ? (
        <>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#111827",
              marginRight: "0.5rem",
            }}
          >
            ${(price * (1 - discountPercentage / 100)).toFixed(2)}
          </span>
          <span
            style={{
              fontSize: "0.875rem",
              color: "#9ca3af",
              textDecoration: "line-through",
            }}
          >
            ${price.toFixed(2)}
          </span>
          <span
            style={{
              float: "right",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#ef4444",
            }}
          >
            Save ${((price * discountPercentage) / 100).toFixed(2)}
          </span>
        </>
      ) : (
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#111827",
          }}
        >
          ${price.toFixed(2)}
        </span>
      )}
    </div>
  );
}

export default PriceDetails;
