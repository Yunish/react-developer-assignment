import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/product.api";
import { ProductsResponse } from "../types/types";
import ProductCard from "./ProductCard";

import SkeletonLoader from "../atoms/SkeletonLoader";
import "./products.css";

const ProductList: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [allProducts, setAllProducts] = useState<ProductsResponse | undefined>(
    undefined
  );
  const initProducts = async () => {
    setIsFetching(true);
    const products = await getAllProducts();
    if (products) {
      setIsFetching(false);
      setAllProducts(products);
    } else {
      setAllProducts(undefined);
    }
  };

  useEffect(() => {
    initProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0rem 1rem",
        backgroundColor: "#3333330a",
        overflowY: "auto",
        maxHeight: "screen",
      }}
    >
      <h2>Our Products</h2>
      {isFetching && (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      )}
      {!isFetching && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {allProducts?.products?.map((product) => (
            <li key={product.id} style={{ marginBottom: "0.75rem" }}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
