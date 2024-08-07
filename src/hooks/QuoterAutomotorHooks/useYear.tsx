import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import createApiUrl from "../../utils/creatApiUrl";

interface Data {
  meta: null;
  obj_data: {
    edicion: number;
    clase: number;
  };
  obj_scope: string;
  obj_type: string;
  iden: string;
  operacion: string;
}

export const useFetchYears = (): {
  data: Data | null;
  isLoading: boolean;
  error: string | number | null;
} => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const config: AxiosRequestConfig = {
          method: "post",
          maxBodyLength: Infinity,
          url: createApiUrl(
            `/wp-admin/admin-ajax.php?action=montepio_get_anios` ///wp-admin/admin-ajax.php?action=montepio_get_anios
          ),
        };

        const response = await axios.request(config);
        const data = response.data;
        const jsonData = JSON.parse(data);

        setData(jsonData.obj_data);
      } catch (err: unknown) {
        if (err && err instanceof AxiosError) {
          setError(err.status ? String(err.status) : null);
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
