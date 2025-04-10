import React from "react";
import '../styles/skeleton-loader.css'

function SkeletonLoader() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-item skeleton-title"></div>
      <div className="skeleton-item skeleton-text"></div>
      <div className="skeleton-item skeleton-text"></div>
      <div className="skeleton-item skeleton-button"></div>
    </div>
  );
}

export default SkeletonLoader;
