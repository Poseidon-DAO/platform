import React from "react";
import { ProviderTypes } from "Types";

export default function Provider({
  icon,
  name,
  onClick,
}: {
  icon: string;
  name: ProviderTypes;
  onClick: (name: ProviderTypes) => void;
}) {
  return (
    <div
      style={{
        height: "10rem",
        width: "10rem",
        margin: "0 1rem",
        cursor: "pointer",
      }}
      onClick={() => onClick(name)}
    >
      <img src={icon} alt={name} style={{ objectFit: "cover" }} />
    </div>
  );
}
