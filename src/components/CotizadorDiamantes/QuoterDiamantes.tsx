import React, { Suspense, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Claridad from "./Options/ClaridadOption";
import Cortes from "./Options/CortesOption";
import Tonos from "./Options/TonosOption";
import { QuoterDiamantesProps } from "./quoterDiamantesProps.types";
import { fetchDataDiamantes } from "../../api/getQuoterDiamantes";

import Loading from "../Loading";
import toast, { Toaster } from "react-hot-toast";
import createApiUrl from "../../utils/creatApiUrl";

const QuoterDiamantes = ({
  setCotizacionCompletada,
  handleCotizacionCompleta,
}: QuoterDiamantesProps) => {
  const [size, setSize] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [clarity, setClarity] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [cut, setCut] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const notify = () =>
    toast.error("Por favor, seleccione todos los campos para cotizar.");
  const initDiamantesUrl = import.meta.env.VITE_INIT_DIAMANTES;
  const createDiamanteUrl: string = createApiUrl(initDiamantesUrl);
  const DiamantesResponse = useFetch<QuoterDiamantesProps>(createDiamanteUrl);
  const data = DiamantesResponse.data;
  const { error, isLoading } = DiamantesResponse;
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleCotizarClick = async () => {
    console.log("handleCotizacion", size, quantity, clarity, color, cut);

    if (size && quantity && clarity && color && cut) {
      setLoading(true);
      const data = await fetchDataDiamantes(
        size,
        quantity,
        clarity,
        color,
        cut
      );

      handleCotizacionCompleta(data);
      setLoading(false);
      setCotizacionCompletada(true);
    } else {
      notify();
    }
  };

  return (
    <>
      <Toaster />
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <div className="relative br-24 mb-3">
            {data ? (
              <>
                <Cortes setCut={setCut} data={data} />
                <Tonos setColor={setColor} data={data} />
                <Claridad setClarity={setClarity} data={data} />
              </>
            ) : (
              <p> Error en la carga de de selectores</p>
            )}
            {data?.campos_datos_a_cotizar ? (
              <div className="p-4 bg-white br-24 mt-4  ">
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
                        {data.campos_datos_a_cotizar[0].nombre_del_campo}
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        min={0}
                        onChange={(e) => setSize(Number(e.target.value))}
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label
                        htmlFor="basic-url"
                        className="form-label text-dark bold"
                      >
                        {data.campos_datos_a_cotizar[1].nombre_del_campo}
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        min={0}
                        onChange={(e) => {
                          const cantidad = Number(e.target.value);
                          if (Number.isInteger(cantidad)) {
                            setQuantity(cantidad);
                          } else {
                            alert("Por favor, ingresa un número entero");
                          }
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
                    size === 0 ||
                    quantity === 0 ||
                    clarity === "" ||
                    color === "" ||
                    cut === ""
                      ? "btn-secondary disabled w-full md:max-w-[195px]"
                      : " w-full md:max-w-[195px] "
                  }`}
                      disabled={
                        size === 0 ||
                        quantity === 0 ||
                        clarity === "" ||
                        color === "" ||
                        cut === ""
                      }
                    >
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-white br-24 mt-4  ">
                <div id="paso-1" className="pasos-cotizador">
                  <h2 className="text-normal-dos text-dark bold mb-2">
                    hubo un problema en la carga. Vuelvelo a intentar.
                  </h2>
                </div>
              </div>
            )}
          </div>
        </Suspense>
      )}
    </>
  );
};

export default QuoterDiamantes;
