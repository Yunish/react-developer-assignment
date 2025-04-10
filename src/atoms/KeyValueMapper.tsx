import React from "react";

interface IKeyValueMapper {
  label: string;
  value: string | number;
}
function KeyValueMapper({ label, value }: Readonly<IKeyValueMapper>) {
  return (
    <p
      style={{
        fontSize: "0.875rem",
        color: "#4b5563",
        margin: "0.25rem 0",
      }}
    >
      <strong>{label}:</strong> {value}
    </p>
  );
}

export default KeyValueMapper;
