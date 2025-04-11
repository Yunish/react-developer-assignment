import React from "react";
import { Review } from "../types/types";
import { formattedDate } from "../utils/date-formatter";

interface IReviewDetails {
  review: Review;
}

const ReviewDetails = ({ review }: IReviewDetails) => {
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
          {formattedDate(review.date)}
        </span>
      </div>

      <div
        style={{
          color: review.rating <= 2 ? "#ff6b6b" : "#ffb400",
          marginBottom: "8px",
        }}
      >
        {starRating} ({review.rating}/5)
      </div>

      <p style={{ color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
        "{review.comment}"
      </p>

      <div style={{ fontSize: "0.8rem", color: "#666", fontStyle: "italic" }}>
        Verified buyer: {review.reviewerEmail}
      </div>
    </div>
  );
};

export default ReviewDetails;
