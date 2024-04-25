import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const Select = ({ name, label, options, errorMessage }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="col-12 col-md-6 mb-3">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <div className="col-12 mb-4">
            <label htmlFor="basic-url" className="form-label text-dark bold">
              {label}
            </label>
            <select className="form-select border-dark py-2" {...field}>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      />
      {errors[name] && (
        <p className="text-[#FF0000]  text-[12px]">*{errorMessage}</p>
      )}
    </div>
  );
};
