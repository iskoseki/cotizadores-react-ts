import React from "react";
import { useFormContext } from "react-hook-form";

export const Input = ({
  name,
  label,
  type,
  pattern,
  maxLength,
  errorMessage,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="col-12 col-md-6 mb-3">
      <label htmlFor={name} className="form-label text-dark bold">
        {label}
      </label>
      <div className="input-group">
        <input
          type={type}
          {...register(name, {
            required: errorMessage,
            pattern: {
              value: pattern,
              message: errorMessage,
            },
          })}
          id={name}
          className="form-control border-dark py-2"
          maxLength={maxLength}
        />
      </div>
      {errors[name] && (
        <p className="text-[#FF0000] text-[12px]">
          *
          {typeof errors[name].message === "string"
            ? errors[name].message
            : "Default error message"}
        </p>
      )}
    </div>
  );
};
