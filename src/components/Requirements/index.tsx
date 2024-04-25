import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { QuoterAutoProps } from "../CotizarAutomotor/QuoterAutoProps";

import Loading from "../Loading";
import createApiUrl from "../../utils/creatApiUrl";

export interface acordeon {
  icono: string;
  titulo: string;
  contenido: string;
}
export default function Requirements() {
  const initAutos = import.meta.env.VITE_INIT_AUTO;
  const createAutosUrl: string = createApiUrl(initAutos);

  const {
    data: Init,
    error: InitError,
    isLoading: InitIsLoading,
  } = useFetch<QuoterAutoProps>(createAutosUrl);

  if (InitIsLoading) {
    return <Loading />;
  }
  if (InitError) {
    return <div>Error: {InitError.message}</div>;
  }

  return (
    <div className="br-24 bg-white">
      <div className="p-4">
        <h1 className="text-[#757575]">
          Obtén el préstamo que necesitas dejando tu auto con nosotros.
        </h1>

        {Init?.acordeon ? (
          Init.acordeon.map((item, index) => {
            return (
              <Acordeon
                key={index}
                icono={item.icono}
                titulo={item.titulo}
                contenido={item.contenido}
              />
            );
          })
        ) : (
          <p>Hubo un problema al cargar los requisitos.</p>
        )}
      </div>
    </div>
  );
}
const Acordeon: React.FC<acordeon> = ({ titulo, contenido, icono }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="acordeon border-2 border-[#F2DEE3] rounded-[12px] my-3 cursor-pointer">
      <div
        className="acordeon-titulo py-3 px-4 flex justify-between items-center "
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-2">
          <img src={icono} />
          <h1 className="text-[#C04356] font-bold"> {titulo}</h1>
        </div>
        <svg
          className={`icono ${isOpen ? "rotado" : ""}`}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.89389 8.58008L12.4839 13.1701L17.0739 8.58008L18.4839 10.0001L12.4839 16.0001L6.48389 10.0001L7.89389 8.58008Z"
            fill="#C04356"
          />
        </svg>
      </div>
      <div className={`acordeon-contenido ${isOpen ? "open" : ""} `}>
        <div
          id="acordeon-contenido"
          className="p-4 text-[#424242]"
          dangerouslySetInnerHTML={{ __html: contenido }}
        />
      </div>
    </div>
  );
};
