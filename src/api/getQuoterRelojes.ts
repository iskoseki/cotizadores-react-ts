import axios, { AxiosRequestConfig } from 'axios';
import createApiUrl from '../utils/creatApiUrl';

export const fetchDataRelojes = async (value: number, brand: string) => {
  const encodedBrand = encodeURIComponent(brand);

  const config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: createApiUrl(`/wp-admin/admin-ajax.php?action=montepio_get_relojes&valor=${value}&marca=${encodedBrand}`),
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

