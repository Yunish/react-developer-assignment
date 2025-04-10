import React from "react";

interface IDiscountRate {
  rate: number;
}

function DiscountRate({ rate }: Readonly<IDiscountRate>) {
  return (
    <span
      style={{
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        backgroundColor: "#ef4444",
        color: "white",
        fontSize: "0.75rem",
        fontWeight: "bold",
        padding: "0.25rem 0.5rem",
        borderRadius: "9999px",
      }}
    >
      -{rate}%
    </span>
  );
}

export default DiscountRate;
