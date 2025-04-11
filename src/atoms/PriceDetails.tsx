import React from "react";
import "../styles/price-details.css";
interface IPriceDetails {
  discountPercentage: number;
  price: number;
}

function PriceDetails({ discountPercentage, price }: Readonly<IPriceDetails>) {
  return (
    <div style={{ margin: "1rem 0" }}>
      {discountPercentage > 0 ? (
        <>
          <span className="discount-price">
            ${(price * (1 - discountPercentage / 100)).toFixed(2)}
          </span>
          <span className="price">${price.toFixed(2)}</span>
          <span className="discount-price-amount">
            Save ${((price * discountPercentage) / 100).toFixed(2)}
          </span>
        </>
      ) : (
        <span className="actual-price">${price.toFixed(2)}</span>
      )}
    </div>
  );
}

export default PriceDetails;
