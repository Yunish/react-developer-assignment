import "../styles/product-list.css";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/product.api";
import { ProductsResponse } from "../types/types";
import ProductCard from "./ProductCard";
import SkeletonLoader from "../atoms/SkeletonLoader";

const ProductList: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [allProducts, setAllProducts] = useState<ProductsResponse | undefined>(
    undefined
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10); 

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

  const totalItems = allProducts?.products?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allProducts?.products?.slice(startIndex, endIndex) || [];

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h2 style={{ margin: 0 }}>Our Products</h2>
        {!isFetching && totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "0.5rem 1rem",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                opacity: currentPage === 1 ? 0.5 : 1,
                border: "none",
                borderRadius: "4px",
                background: "#333",
                color: "white",
              }}
            >
              Previous
            </button>

            <span style={{ margin: "0 1rem" }}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "0.5rem 1rem",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                opacity: currentPage === totalPages ? 0.5 : 1,
                border: "none",
                borderRadius: "4px",
                background: "#333",
                color: "white",
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="product-loader">
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
              margin: 0,
            }}
          >
            {currentItems.map((product) => (
              <li key={product.id} style={{ marginBottom: "0.75rem" }}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {!isFetching && totalPages > 1 && (
        <div className="page-number">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                padding: "0.5rem",
                minWidth: "2rem",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
                background: currentPage === page ? "#333" : "#ddd",
                color: currentPage === page ? "white" : "#333",
              }}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
