import axios, { AxiosRequestConfig } from "axios";

interface PriceByKeyRequest {
  meta: null;
  obj_data: {
    claveAnio: number,
    claveMarca: number,
    claveModelo: number,
    claveVersion: string
  };
  obj_scope: string;
  obj_type: string;
  iden: string;
  operacion: string;
}
export const fetchPriceByKeyRequest = async (yearKey:number, brandKey:number, modelKey:number, versionKey:string
  ) => {
  const data: PriceByKeyRequest = {
    meta: null,
    obj_data: {
     claveAnio: yearKey,
     claveMarca: brandKey,
     claveModelo: modelKey,
     claveVersion: versionKey
    },
    obj_scope: "",
    obj_type: "",
    iden: "EGq0Bl9UGqXS3cC8/d7BV7KjpMaV9t89pt2ch7QRRfBkTO+/jc9pBkSCI11e0BsHMaubvONXOYEC8yb+AbgPJuTL66XtTA57HUMFPjKRABrENBT6Vkc1aEhRY/7Fd7cKa+HS5alv0czWVWBP2FuKe4kHHF0SNfZrJPQTszM/lH8=",
    operacion: "WS_VALUACION_AUTOS.OBTENERPRECIOXCLAVE"
  };


  const config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/api/interop.apivalua',
    headers: { 
      'vl-host': '172.17.134.49', 
      'vl-date': '1627999585', 
      'vl-auth': 'EGq0Bl9UGqXS3cC8/d7BV7KjpMaV9t89pt2ch7QRRfBkTO+/jc9pBkSCI11e0BsHMaubvONXOYEC8yb+AbgPJuTL66XtTA57HUMFPjKRABrENBT6Vkc1aEhRY/7Fd7cKa+HS5alv0czWVWBP2FuKe4kHHF0SNfZrJPQTszM/lH8=', 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
  };

  try {
    const response = await axios.request(config);
    console.log(response.data.obj_data);
    return response.data.obj_data;
   
  } catch (error) {
    console.error(error);
  }
};