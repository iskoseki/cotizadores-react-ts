import React from "react";
import { useFormContext } from "react-hook-form";

export const HiddenInput = ({ name, value }) => {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      style={{ display: "none" }}
      {...register(name)}
      value={value}
    />
  );
};
