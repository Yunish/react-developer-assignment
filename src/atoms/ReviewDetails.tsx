import React from "react";
import { Review } from "../types/types";

interface IReviewDetails {
  review: Review;
}

const ReviewDetails = ({ review }: IReviewDetails) => {
  // Format date (e.g., "May 23, 2024")
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Generate star rating display (e.g., "★★☆☆☆")
  const starRating = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "400px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Review Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "bold", color: "#333" }}>
          {review.reviewerName}
        </span>
        <span style={{ fontSize: "0.85rem", color: "#777" }}>
          {formattedDate}
        </span>
      </div>

      {/* Rating (styled red if <= 2) */}
      <div
        style={{
          color: review.rating <= 2 ? "#ff6b6b" : "#ffb400",
          marginBottom: "8px",
        }}
      >
        {starRating} ({review.rating}/5)
      </div>

      {/* Comment */}
      <p style={{ color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
        "{review.comment}"
      </p>

      {/* Email (verified buyer) */}
      <div style={{ fontSize: "0.8rem", color: "#666", fontStyle: "italic" }}>
        Verified buyer: {review.reviewerEmail}
      </div>
    </div>
  );
};

export default ReviewDetails;
