import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { useEffect, useState } from "react";
import { CotizacionAuto } from "../../types/cotizacionTypes";
import { useStore } from "../../context/CotizacionContext";
import { useFetch } from "../useFetch";
import { QuoterAutoProps } from "../../components/CotizarAutomotor/QuoterAutoProps";
import createApiUrl from "../../utils/creatApiUrl";

const useFetchCotizacion = (
  yearKey: number,
  brandKey: number,
  modelKey: number,
  plazo: number,
  versionKey: string,
  productType: string,
  productClass: string,
  product: string
): {
  data: CotizacionAuto;
  isLoading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<CotizacionAuto>({} as CotizacionAuto);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const guardarCotizacionAutos = useStore(
    (state) => state.guardarCotizacionAutos
  );
  const AutoImplusaResponse = useFetch<QuoterAutoProps>(
    createApiUrl("/wp-json/acf/v3/pages/74")
  );

  const incentivosAutos = AutoImplusaResponse.data;
  const incentivos = incentivosAutos?.incentivos;

  useEffect(() => {
    const fetchCotizacion = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const config: AxiosRequestConfig = {
          method: "post",
          maxBodyLength: Infinity,
          url: createApiUrl(
            `/wp-admin/admin-ajax.php?action=montepio_get_monto_auto&modelo=${modelKey}&marca=${brandKey}&ano=${yearKey}&tipo_cliente=A&producto=${product}&plazo=${plazo}&version=${versionKey}&tipo_producto=${productType}&clase_producto=${productClass}`
          ),
        };

        const res = await axios.request(config);
        const data = res.data;
        const response = JSON.parse(data);

        // Buscar el incentivo correspondiente
        const incentivo = incentivos?.find(
          (incentivo) =>
            incentivo.anio === yearKey.toString() &&
            incentivo.producto === product
        );
        console.log("INCENTIVO", incentivo);
        const nuevoPrestamo = incentivo
          ? response.obj_data.Prestamo +
            (response.obj_data.Prestamo * Number(incentivo.porcentaje)) / 100
          : response.obj_data.Prestamo; // Si no hay incentivo, guardar el valor original

        setData({ ...response.obj_data, Prestamo: nuevoPrestamo });
        guardarCotizacionAutos({
          ...response.obj_data,
          Prestamo: nuevoPrestamo,
        });
      } catch (err: unknown) {
        if (err && err instanceof AxiosError) {
          setError(err.message);
        } else {
          console.error("Unexpected error:", err);
          setError("An unexpected error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if all parameters are available
    if (yearKey && brandKey && modelKey && plazo && versionKey && productType) {
      fetchCotizacion();
    }
  }, [
    yearKey,
    brandKey,
    modelKey,
    plazo,
    versionKey,
    productType,
    guardarCotizacionAutos,
    incentivos,
    product,
    productClass,
  ]);
  return { data, isLoading, error };
};

export default useFetchCotizacion;
