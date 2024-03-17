import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface ModelData {
  // Add properties for the expected data structure from the response
  claveModelo: number;
  // ... other properties
}

export const useFetchModels = (
  year: number,
  brand: number
): {
  data: ModelData[] | null;
  isLoading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<ModelData[] | null>(null);
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
          url: `https://bgwp.bgroup.com.ar/wp-admin/admin-ajax.php?action=montepio_get_modelos&ano=${year}&marca=${brand}`,
        };

        const response = await axios.request(config);
        const data = response.data;
        const jsonData = JSON.parse(data);

        setData(jsonData.obj_data);
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

    if (year && brand) {
      // Only fetch if both year and brand are available
      fetchData();
    }
  }, [year, brand]);

  return { data, isLoading, error };
};
