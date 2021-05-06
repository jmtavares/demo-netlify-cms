import React from "react";

export const Hero = ({ value, onChange }) => {
  return <input type="text" value={value} />;
};

export const schema = {
  properties: {
    separator: { type: "string" },
  },
};
