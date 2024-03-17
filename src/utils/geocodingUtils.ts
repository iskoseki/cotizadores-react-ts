import { Sede } from "../types/branchTypes";
const apiKey = import.meta.env.VITE_GEOCODING_API_KEY;
export async function getCoordinates(branch: Sede) {
  const address = `${branch.Calle} ${branch.Numero}, ${branch.Colonia}, ${branch.Municipio}, ${branch.Estado}, ${branch.CP}`;
 

  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${apiKey}&country=mx`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;

      return { lat, lng };
    } else {
      
      //console.error(`No results for address: ${address}`);
      return null;
    }
  } catch (error) {
   // console.error(`Error fetching coordinates for address: ${address}`, error);
    return null;
  }
}