import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface VersionData {
  // Add properties for the expected data structure from the response
  claveVersion: number;
  // ... other properties
}

const useFetchVersion = (
  year: number,
  brand: number,
  model: number
): {
  data: VersionData[] | null;
  isLoading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<VersionData[] | null>(null);
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
          url: `https://bgwp.bgroup.com.ar/wp-admin/admin-ajax.php?action=montepio_get_versiones&ano=${year}&marca=${brand}&modelo=${model}`,
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

    if (year && brand && model) {
      // Only fetch if all parameters are available
      fetchData();
    }
  }, [year, brand, model]);

  return { data, isLoading, error };
};

export default useFetchVersion;
