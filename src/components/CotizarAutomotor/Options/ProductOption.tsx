import React from "react";
//import { useStore } from "../../../context/CotizacionContext";
//import useCotizacionStore from "../../../context/cotizacionAutoStore";

export interface ProductOptionProps {
  productType: string;
  setProductType: (newProductType: string) => void;
}
{
  /*interface ProductType {
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
*/
}
export default function ProductOption({
  productType,
  setProductType,
}: ProductOptionProps) {
  // const [data, setData] = useState<ProductType[]>([]);
  //const { guardarPlazo } = useStore();
  //const { setProduct, setProductClass } = useCotizacionStore();

  {
    /*
  useEffect(() => {
    fetch("src/components/CotizarAutomotor/Options/catalogo-de-productos.json")
      .then((response) => response.json())
      .then((data) => setData(data.obj_data))
      .catch((error) => console.error(error));
  }, [productType, setProduct, setProductClass]);
*/
  }
  {
    /* const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProductOrder = e.target.value;

    // Encuentra el producto seleccionado en los datos
    const selectedProduct = data.find(
      (product) => product.Orden.toString() === selectedProductOrder
    );

    // Guarda los valores de Plazo, Producto y ClaseProducto
    if (selectedProduct) {
      guardarPlazo(selectedProduct.Plazo);
      setProductType(selectedProduct.TipoProducto);
      setProductClass(selectedProduct.ClaseProducto);
      setProduct(selectedProduct.ClaveProducto);
    }
  };*/
  }

  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Producto
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
      >
        <option defaultValue={"Default"}>Selecciona un producto</option>
        <option value={1}>ME LO GUARDAN</option>
        <option value={0}>ME LO LLEVO</option>

        {/**
        *  <option defaultValue={"Default"}>Selecciona un producto</option>
        {data
          ? data.map((option) => (
              <option key={option.Orden} value={option.Orden}>
                {option.DescripcionProducto}
              </option>
            ))
          : null}
        */}
      </select>
    </div>
  );
}
