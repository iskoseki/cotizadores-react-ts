import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import { QuoterAlhajasProps } from "./quoterAlhajasProps.types";
import Loading from "../Loading";
import { useStore } from "../../context/CotizacionContext";
import { fetchDataRelojes } from "../../api/getQuoterRelojes";
import CurrencyInput from "react-currency-input-field";
import createApiUrl from "../../utils/creatApiUrl";
import ErrorComponent from "../ErrorComponent";

export default function QuoterRelojes({
  setCotizacionCompletada,
  handleCotizacionCompleta,
}: QuoterAlhajasProps) {
  const [marca, setMarca] = useState<string>("");
  const [precio, setPrecio] = useState<number>(0);
  const { guardarCotizacion, guardarDatosRelojes } = useStore();
  const [loading, setLoading] = useState(false);
  const initRelojesUrl = import.meta.env.VITE_INIT_RELOJES;
  const createRelojesUrl: string = createApiUrl(initRelojesUrl);
  const notify = () => toast.error("Por favor, rellene todos los campos");

  const RelojesResponse = useFetch<QuoterAlhajasProps>(createRelojesUrl);
  const data = RelojesResponse.data;
  const { error, isLoading } = RelojesResponse;
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }

  const handleCotizarClick = async () => {
    if (precio && marca) {
      setLoading(true);
      const data = await fetchDataRelojes(precio, marca);
      guardarDatosRelojes(marca, precio);
      guardarCotizacion(data);
      handleCotizacionCompleta(data);
      setCotizacionCompletada(true);
      setLoading(false);
    } else {
      notify();
    }
  };

  return (
    <>
      <div className="br-24 bg-white mb-3">
        {loading ? (
          <Loading />
        ) : (
          <div className="p-4">
            <Toaster />
            <div id="paso-1" className="pasos-cotizador">
              <h2 className="text-normal-dos text-dark bold mb-2">
                {data?.titulo_datos_cotizador}
              </h2>
              <p className="text-dark mb-5 hidden md:block">
                {data?.texto_datos_cotizador}
              </p>
              <div className="row mb-4">
                <div className="col-12 mb-4">
                  <label
                    htmlFor="basic-url"
                    className="form-label text-dark bold"
                  >
                    {data?.campos_datos_a_cotizar
                      ? data?.campos_datos_a_cotizar[0].nombre_del_campo
                      : ""}
                  </label>
                  <select
                    className="form-select border-dark py-2"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setMarca(e.target.value);
                    }}
                  >
                    <option defaultValue={"10K ORO"}>Selecciona</option>
                    {data?.campos_datos_a_cotizar
                      ? data?.campos_datos_a_cotizar[0].opciones.map(
                          (option, index: number) => (
                            <option key={index} value={option.opcion}>
                              {option.opcion}
                            </option>
                          )
                        )
                      : "Eror al cargar las opciones"}
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label
                    htmlFor="basic-url"
                    className="form-label text-dark bold"
                  >
                    {data?.campos_datos_a_cotizar
                      ? data?.campos_datos_a_cotizar[1].nombre_del_campo
                      : ""}
                  </label>
                  <div className="input-group">
                    <span className="input-group-text text-[#9BADD3]">$</span>
                    <CurrencyInput
                      className="form-control"
                      id="input-example"
                      name="input-name"
                      prefix=" "
                      placeholder="Por favor ingresa un número"
                      defaultValue={0}
                      decimalsLimit={2}
                      intlConfig={{ locale: "es-MX", currency: "MXN" }}
                      decimalSeparator="."
                      groupSeparator=","
                      onValueChange={(value) => setPrecio(Number(value))}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-md-end">
                <button
                  type="submit"
                  onClick={handleCotizarClick}
                  className={`btn btn-primary rounded-[8px] py-2 px-5 "
                  id="btn-paso-adelante-1  ${
                    marca === " " || precio === 0
                      ? "btn-secondary disabled w-full md:max-w-[195px]"
                      : " w-full md:max-w-[195px] "
                  }`}
                  disabled={marca === " " || precio === 0}
                >
                  Cotizar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
