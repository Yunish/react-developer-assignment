import React from "react";

interface IDiscountRate {
  rate: number;
}

function DiscountRate({ rate }: Readonly<IDiscountRate>) {
  return <span className="discount-rate">-{rate}%</span>;
}

export default DiscountRate;
