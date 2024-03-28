import { Dispatch, SetStateAction } from "react";
import { Cotizacion } from "../../types/cotizacionTypes";

export interface QuoterAlhajasProps {

  setCotizacionCompletada: Dispatch<SetStateAction<boolean>>;
  handleCotizacionCompleta: (resultadoCotizacion: Cotizacion[]) => void;
 mostrar_datos_cotizador?: boolean,
 titulo_datos_cotizador?: string;
 texto_datos_cotizador?: string;
 campos_datos_a_cotizar?: {
    nombre_del_campo: string;
    tipo_de_campo: string;
    tamano_de_campo: string;
    seleccion: boolean;
    opciones: [
      {opcion: string }
    ];
  }[];
  
}
