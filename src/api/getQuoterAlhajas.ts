import axios, { AxiosRequestConfig } from 'axios';
import createApiUrl from '../utils/creatApiUrl';
export const fetchDataAlhajas = async (weight: number, material: string) => {
  
 const config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: createApiUrl(`/wp-admin/admin-ajax.php?action=montepio_get_alhajas&peso=${weight}&material=${material}`),
  };
  try {
    const response = await axios.request(config);
    const data = response.data;
    const jsonData = JSON.parse(data);
    console.log("💸 Cotizacion de Alhajas",jsonData);
    return jsonData.obj_data;
  } catch (error) {
    console.error("Error en la peticion de Cotizacion Diamantes",error.message);
  }
};
