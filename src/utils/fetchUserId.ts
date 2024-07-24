import { useEffect, useState } from "react";

const VITE_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_USER_ID = import.meta.env.VITE_USER_ID;

export default function UserID() {
  const [id, setId] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado de carga

  useEffect(() => {
    const fetchData = async () => {
    const url = `https://bgwp.bgroup.com.ar${VITE_USER_ID}`;
    console.log("URL del ID REQ:",url);
     
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log("ID RES",jsonData)
        jsonData.id === null ? setId("Usuario sin ID") : setId(jsonData.id);
        console.log(id)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [id]);

  return { id, error, loading }; 
}
