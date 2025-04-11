import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product.api";
import { Product } from "../types/types";
import SkeletonLoader from "../atoms/SkeletonLoader";
import KeyValueMapper from "../atoms/KeyValueMapper";
import PriceDetails from "../atoms/PriceDetails";
import Ratings from "../atoms/Ratings";
import ReviewDetails from "../atoms/ReviewDetails";
import ProductImageGallery from "../atoms/ProductImage";
import "../styles/product-details.css";

const ProductDetails: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();
  const { id } = useParams();

  const initProductDetails = async () => {
    if (id) {
      setIsLoading(true);
      const product = await getProductById(+id);
      if (product) {
        setIsLoading(false);
      }
      setProduct(product);
    }
  };

  useEffect(() => {
    initProductDetails();
  }, [id]);

  return (
    <div className="product-details-container">
      {isLoading ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <SkeletonLoader />
          <div className="product-loader">
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
          <SkeletonLoader />
        </div>
      ) : (
        <>
          <div style={{ marginBottom: "2rem" }}>
            <h1 className="product-title">{product?.title}</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Ratings rating={product?.rating ?? 0} />
              <span style={{ color: "#666", whiteSpace: "nowrap" }}>
                {product?.reviews.length} reviews
              </span>
              <span style={{ color: "#666", whiteSpace: "nowrap" }}>
                | {product?.brand}
              </span>
            </div>
          </div>

          <div className="product-image">
            <div
              style={{
                flex: 1,
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                padding: "1rem",
                minWidth: 0, 
              }}
            >
              <ProductImageGallery images={product?.images ?? []} />
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                minWidth: 0, 
              }}
            ><div
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "1.25rem",
                  borderRadius: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    marginBottom: "1rem",
                    color: "#222",
                  }}
                >
                  Pricing
                </h3>
                <PriceDetails
                  price={product?.price ?? 0}
                  discountPercentage={product?.discountPercentage ?? 0}
                />
              </div>

              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    marginBottom: "1rem",
                    color: "#222",
                  }}
                >
                  Product Details
                </h3>
                <p
                  style={{
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                    color: "#444",
                  }}
                >
                  {product?.description ?? ""}
                </p>
                <div className="product-info">
                  <KeyValueMapper label="Brand" value={product?.brand ?? "-"} />
                  <KeyValueMapper
                    label="Category"
                    value={product?.category ?? "-"}
                  />
                  <KeyValueMapper
                    label="Min. Order"
                    value={product?.minimumOrderQuantity ?? "-"}
                  />
                  <KeyValueMapper
                    label="Warrenty"
                    value={product?.warrantyInformation ?? "-"}
                  />
                  <KeyValueMapper
                    label="Shipping"
                    value={product?.shippingInformation ?? "-"}
                  />
                  <KeyValueMapper
                    label="Return Policy"
                    value={product?.returnPolicy ?? "-"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                marginBottom: "1.5rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid #eee",
              }}
            >
              Customer Reviews ({product?.reviews.length})
            </h3>
            {product?.reviews.length ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {product.reviews.map(
                  (review) =>
                    review && (
                      <ReviewDetails
                        key={review?.date + review?.reviewerName}
                        review={review}
                      />
                    )
                )}
              </div>
            ) : (
              <p style={{ color: "#666", fontStyle: "italic" }}>
                No reviews yet for this product.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
