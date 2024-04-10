// api.ts
import axios, { AxiosRequestConfig } from 'axios';
export const fetchDataDiamantes = async ( size: number, quantity: number, clarity: string, color:string ,cut:string) => {

 const encodedClarity = encodeURIComponent(clarity);
 const encodedColor = encodeURIComponent(color);
 const encodedCut = encodeURIComponent(cut);

 const config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://bgwp.bgroup.com.ar/wp-admin/admin-ajax.php?action=montepio_get_diamantes&tamano=${size}&cantidad=${quantity}&id_web_claridad=${encodedClarity}&id_web_color=${encodedColor}&id_web_corte=${encodedCut}`
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
