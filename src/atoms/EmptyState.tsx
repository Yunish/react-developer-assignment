// EmptyState.tsx
import React from "react";
import "../styles/empty-state.css";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Products selected yet",
  description = "Please select a product to view details",
  icon,
}) => {
  return (
    <div className="empty-state">
      {icon && <div className="empty-icon">{icon}</div>}
      <h2 className="empty-title">{title}</h2>
      <p className="empty-description">{description}</p>
    </div>
  );
};

export default EmptyState;
