import axios, { AxiosRequestConfig } from 'axios';

export const fetchDataRelojes = async ( value: number, brand: string) => {

   const config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://bgwp.bgroup.com.ar/wp-admin/admin-ajax.php?action=montepio_get_relojes&valor=${value}&marca=${brand}`,
  };

  try {
    const response = await axios.request(config);
    
    const data = response.data;
    const jsonData = JSON.parse(data);

    return jsonData.obj_data;
  } catch (error) {
    console.error(error);
  }
};

