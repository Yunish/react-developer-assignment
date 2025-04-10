import React from "react";

interface IStockStatus {
  stock: number;
}

function StockStatus({ stock }: Readonly<IStockStatus>) {
  const initStockDetails = () => {
    const details = {
      bgColor: "#fee2e2",
      color: "991b1b",
      status: "Out of Stock",
    };
    if (stock > 10) {
      details.bgColor = "#dbeafe";
      details.color = "#1e40af";
      details.status = "In Stock";
    } else if (stock > 0) {
      details.bgColor = "#fef3c7";
      details.color = "#92400e";
      details.status = "Low Stock";
    } else {
      details.bgColor = "#fee2e2";
      details.color = "#991b1b";
      details.status = "Out of Stock";
    }
    return details;
  };
  
  return (
    <span
      style={{
        fontSize: "0.75rem",
        padding: "0.25rem 0.5rem",
        borderRadius: "0.25rem",
        backgroundColor: initStockDetails().bgColor,
        color: initStockDetails().color,
      }}
    >
      {initStockDetails().status}
    </span>
  );
}

export default StockStatus;
