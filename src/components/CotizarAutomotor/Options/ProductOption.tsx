import React from "react";
import useCotizacionStore from "../../../context/cotizacionAutoStore";
import { useStore } from "../../../context/CotizacionContext";
import { useFetchProduct } from "../../../hooks/QuoterAutomotorHooks/useFetchProducto";
//import { useStore } from "../../../context/CotizacionContext";
//import useCotizacionStore from "../../../context/cotizacionAutoStore";

export interface ProductOptionProps {
  productType: string;
  setProductType: (newProductType: string) => void;
}

interface ProductType {
  PlazoMaximo: number;
  Plazo: number;
  Orden: number;
  MonitoreoGPS: number;
  ImporteGPS: number;
  Tasa: number;
  Version: string;
  ClaseProducto: string;
  TipoProducto: string;
  TipoCliente: null | string;
  DescripcionProducto: string;
  ClaveProducto: string;
  NumSucursal: string;
}

export default function ProductOption({
  productType,
  setProductType,
}: ProductOptionProps) {
  const { guardarPlazo } = useStore();
  const { setProduct, setProductClass } = useCotizacionStore();
  const { data, error } = useFetchProduct();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProductOrder = e.target.value;

    // Encuentra el producto seleccionado en los datos
    const selectedProduct =
      data &&
      data.find(
        (product) => product.TipoProducto.toString() === selectedProductOrder
      );

    // Guarda los valores de Plazo, Producto y ClaseProducto
    if (selectedProduct) {
      guardarPlazo(selectedProduct.PlazoMaximo);
      setProductType(selectedProduct.TipoProducto);
      setProductClass(selectedProduct.ClaseProducto);
      setProduct(selectedProduct.ClaveProducto);
    }
  };

  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Producto
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={productType}
        onChange={(e) => {
          setProductType(e.target.value);
          handleSelectChange(e);
        }}
      >
        <option>Selecciona un producto</option>
        {data ? (
          data.map((option) => (
            <option key={option.Orden} value={option.TipoProducto}>
              {option.DescripcionProducto}
            </option>
          ))
        ) : (
          <option>{error}</option>
        )}
      </select>
    </div>
  );
}
