import React, { useState } from "react";

import { useFetch } from "../../hooks/useFetch";

import { QuoterAlhajasProps } from "./quoterAlhajasProps.types";
import Loading from "../Loading";
import { fetchDataAlhajas } from "../../api/getQuoterAlhajas";
import { useStore } from "../../context/CotizacionContext";
import toast, { Toaster } from "react-hot-toast";
import createApiUrl from "../../utils/creatApiUrl";

export default function QuoterAlhajas({
  setCotizacionCompletada,
  handleCotizacionCompleta,
}: QuoterAlhajasProps) {
  const [material, setMaterial] = useState<string>("");
  const [peso, setPeso] = useState<number>(0);
  const { guardarCotizacion } = useStore();
  const [loading, setLoading] = useState(false);
  const initAlhajasUrl = import.meta.env.VITE_INIT_ALHAJAS;
  const createAlhajasUrl: string = createApiUrl(initAlhajasUrl);
  const notify = () => toast.error("Por favor, rellene todos los campos");
  const { error, isLoading, data } =
    useFetch<QuoterAlhajasProps>(createAlhajasUrl);

  if (isLoading) {
    return <Loading height={180} />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCotizarClick = async () => {
    if (peso && material) {
      setLoading(true);
      const data = await fetchDataAlhajas(peso, material);
      guardarCotizacion(data);
      setLoading(false);
      handleCotizacionCompleta(data);
      setCotizacionCompletada(true);
    } else {
      notify();
    }
  };

  return (
    <div className="br-24 bg-white mb-3">
      <Toaster />
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4">
          <div id="paso-1" className="pasos-cotizador">
            <h2 className="text-normal-dos text-dark bold mb-2 ">
              {data?.titulo_datos_cotizador}
            </h2>
            <p className="text-dark mb-5 hidden md:block ">
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
                  required
                  onChange={(e) => {
                    setMaterial(e.target.value);
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
                <input
                  className="form-control"
                  type="number"
                  min={0}
                  required
                  onChange={(e) => {
                    setPeso(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-end">
              <button
                type="submit"
                onClick={handleCotizarClick}
                className={`btn btn-primary rounded-[8px] py-2 px-5 "
                  id="btn-paso-adelante-1  ${
                    material === "" || peso === 0
                      ? "btn-secondary disabled w-full md:max-w-[195px]"
                      : " w-full md:max-w-[195px] "
                  }`}
                disabled={material === "" || peso === 0}
              >
                Cotizar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
