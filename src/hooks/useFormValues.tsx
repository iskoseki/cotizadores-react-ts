import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";
import createApiUrl from "../utils/creatApiUrl";

export interface visiblesType {
  etiqueta_del_campo?: string;
  nombre_del_campo: string;
  tipo: string;
  tamano?: string;
  obligatorio?: boolean;
  seleccion?: boolean;
  opciones?: { opcion: string }[];
}
export interface Props {
  action_formulario_cotizadores: string;
  action_formulario_autoimpulsa: string;
  campos_ocultos_formulario_autoimpulsa: [];
  campos_ocultos_formulario_cotizadores: [];
  campos_formulario_autoimpulsa: visiblesType[];
  campos_formulario_cotizadores: visiblesType[];
  titulo_formulario: string;
}

export const useFormValues = () => {
  const { data } = useFetch<Props>(createApiUrl("/wp-json/acf/v3/pages/36"));

  const [ocultos, setOcultos] = useState([]);
  const [ocultosAuto, setOcultosAuto] = useState([]);
  const [visibles, setVisibles] = useState<visiblesType[]>([]);
  const [visiblesAuto, setVisiblesAuto] = useState<visiblesType[]>([]);
  const [action, setAction] = useState<string>();
  const [actionAuto, setActionAuto] = useState<string>();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    if (data) {
      setOcultos(data.campos_ocultos_formulario_cotizadores || []);
      setOcultosAuto(data.campos_ocultos_formulario_autoimpulsa || []);
      setVisibles(data.campos_formulario_cotizadores || []);
      setVisiblesAuto(data.campos_formulario_autoimpulsa || []);
      setAction(data.action_formulario_cotizadores || "");
      setActionAuto(data.action_formulario_autoimpulsa || "");
      setTitle(data.titulo_formulario || "");
    }
  }, [data]);

  return {
    action,
    ocultos,
    visibles,
    ocultosAuto,
    visiblesAuto,
    actionAuto,
    title,
  };
};
