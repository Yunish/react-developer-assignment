import React from "react";
import "../styles/key-value-mapper.css";
interface IKeyValueMapper {
  label: string;
  value: string | number;
}
function KeyValueMapper({ label, value }: Readonly<IKeyValueMapper>) {
  return (
    <p className="key-value-mapper">
      <strong>{label}:</strong> {value}
    </p>
  );
}

export default KeyValueMapper;
