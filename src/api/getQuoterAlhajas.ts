import axios, { AxiosRequestConfig } from 'axios';
export const fetchDataAlhajas = async (weight: number, material: string) => {
  
 const config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://bgwp.bgroup.com.ar/wp-admin/admin-ajax.php?action=montepio_get_alhajas&peso=${weight}&material=${material}`,
  };
  try {
    const response = await axios.request(config);
    const data = response.data;
    const jsonData = JSON.parse(data);

    return jsonData.obj_data;
  } catch (error) {
    console.error("Error en la peticion de Cotizacion Diamantes",error.message);
  }
};
