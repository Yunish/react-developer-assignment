import React, { useState } from "react";

interface IProductImageGallery {
  images: Array<string>;
}

const ProductImageGallery = ({ images }: IProductImageGallery) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoom) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        margin: "0 auto",
        gap: "16px",
      }}
    >
      {/* Main Featured Image with Zoom */}
      <div
        style={{
          width: "100%",
          height: "400px",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          position: "relative",
          cursor: zoom ? "zoom-in" : "zoom-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={images[selectedImage]}
          alt={`Product view ${selectedImage + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: zoom ? "none" : "contain",
            backgroundColor: "#f8f9fa",
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transform: zoom ? "scale(2)" : "scale(1)",
            transition: "transform 0.1s ease",
          }}
        />
      </div>

      {/* Thumbnail Navigation */}
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "4px",
              cursor: "pointer",
              overflow: "hidden",
              transition: "all 0.2s ease",
              border:
                selectedImage === index
                  ? "2px solid #007bff"
                  : "2px solid #eee",
              opacity: selectedImage === index ? 1 : 0.7,
            }}
            onClick={() => {
              setSelectedImage(index);
              setZoom(false); // Reset zoom when changing images
            }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
