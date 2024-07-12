import { useEffect, useState } from "react";

//const VITE_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_USER_ID = import.meta.env.VITE_USER_ID;

export default function UserID() {
  const [id, setId] = useState<string | number | null>(null);
  const [error, setError] = useState(null);
    useEffect(() => {
  const fetchData = async () => {
   // const url = VITE_BASE_URL + VITE_USER_ID;
  //  console.log(url)
    try {
      const response = await fetch(VITE_USER_ID);
      const jsonData = await response.json();
     jsonData.id === null ? setId("Usuario sin ID") : setId(jsonData.id);
     console.log("ID de Usuario",jsonData)
    } catch (error) {
      setError(error.message);
    }
  }
  fetchData();
    }, []);
 return {id, error}

}
