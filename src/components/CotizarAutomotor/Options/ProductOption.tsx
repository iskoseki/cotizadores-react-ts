import React from "react";

export interface ProductOptionProps {
  productType: string;
  setProductType: (newProductType: string) => void;
}
export default function ProductOption({
  productType,
  setProductType,
}: ProductOptionProps) {
  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Selecione el producto
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={productType}
        onChange={(e) => {
          setProductType(e.target.value);
        }}
      >
        <option defaultValue={"Default"}>Selecciona un producto</option>
        <option value={"1"}>Me lo guardan</option>
        <option value={"2"}>Me lo llevo</option>
      </select>
    </div>
  );
}
