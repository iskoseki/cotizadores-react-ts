import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface Data {
  PlazoMaximo: number;
  Plazo: number;
  Orden: number;
  MonitoreoGPS: number;
  ImporteGPS: number;
  Tasa: number;
  Version: string;
  ClaseProducto: string;
  TipoProducto: string;
  TipoCliente: null;
  DescripcionProducto: string;
  ClaveProducto: string;
  NumSucursal: string;
}

export const useFetchProduct = (): {
  data: Data[];
  isLoading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const config: AxiosRequestConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://bgwp.bgroup.com.ar/wp-admin/admin-ajax.php?action=montepio_get_productos`,
        };

        const response = await axios.request(config);
        const data = response.data;
        const jsonData = JSON.parse(data);
        setData(jsonData);
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

    fetchData();
  }, []);
  return { data, isLoading, error };
};
