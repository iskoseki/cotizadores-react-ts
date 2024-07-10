import { useEffect, useState } from "react";

const VITE_USER_ID = import.meta.env.VITE_USER_ID;

export default function UserID() {
  const [id, setId] = useState<string | number | null>(null);
  const [error, setError] = useState(null);
    useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(VITE_USER_ID);
      const jsonData = await response.json();
     jsonData.id === null ? setId("Usuario sin ID") : setId(jsonData.id);
    } catch (error) {
      setError(error.message);
    }
  }
  fetchData();
    }, []);
 return {id, error}

}
