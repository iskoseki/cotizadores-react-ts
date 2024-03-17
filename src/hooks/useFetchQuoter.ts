import { startTransition, useEffect, useState } from "react";

export const useFetchQuoters = () => {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://montepio.whileam.com.ar/wp-json/acf/v3/pages/28");
        const jsonData = await response.json();
          startTransition(() => { setData(jsonData);})
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
};
