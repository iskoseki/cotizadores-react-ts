import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { QuoterDiamantesProps } from "../quoterDiamantesProps.types";
import { useDragMouse } from "../../../hooks/useMauseDrag";

interface ClaridadProps {
  data: QuoterDiamantesProps;
  setColor: Dispatch<SetStateAction<string>>;
}
export default function Tonos({ data, setColor }: ClaridadProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useDragMouse(sliderRef);
  return (
    <div className="mt-4 br-24 p-8 bg-white">
      <h2 className="text-normal-dos text-dark text-center bold">Tono</h2>

      <hr className="bg-dark my-4" />

      <input id="tono" type="hidden" name="tono" value="" />

      <div
        className="overflow-x-auto overflow-hidden scrollbar-none scroll-smooth flex justify-start md:justify-center items-start relative gap-4"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {data.tonos ? (
          data.tonos.map((tono, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setColor("G-H-I");
                  setSelected(tono.nombre);
                }}
              >
                <div
                  className={`flex items-center justify-center min-w-[194px] min-h-[78px] relative rounded-5xl bg-white border-1 ${
                    selected === tono.nombre
                      ? " border-[#A6192E]"
                      : "border-[#FFEBF0]"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={tono.imagen}
                      className="w-8 h-8 "
                      alt=""
                      style={{ maxWidth: "65px" }}
                    />
                    <p
                      className={`mt-2 text-base font-bold text-center ${
                        selected === tono.nombre
                          ? " text-[#A6192E]"
                          : "text-[#ED8696]"
                      }
                    `}
                    >
                      {tono.nombre}
                    </p>

                    {selected === tono.nombre ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="absolute top-1 right-1"
                      >
                        <path
                          d="M10.0001 1.6665C5.41675 1.6665 1.66675 5.4165 1.66675 9.99984C1.66675 14.5832 5.41675 18.3332 10.0001 18.3332C14.5834 18.3332 18.3334 14.5832 18.3334 9.99984C18.3334 5.4165 14.5834 1.6665 10.0001 1.6665ZM9.04052 13.4594C8.65 13.8499 8.01683 13.8499 7.62631 13.4594L4.75466 10.5877C4.42996 10.2631 4.42996 9.73662 4.75466 9.41193C5.07903 9.08755 5.60483 9.08719 5.92966 9.41111L8.33342 11.8082L14.0667 6.07484C14.3932 5.74841 14.9227 5.74934 15.248 6.07693C15.5716 6.40288 15.5707 6.9292 15.2459 7.25401L9.04052 13.4594Z"
                          fill="#A6192E"
                        ></path>
                      </svg>
                    ) : null}
                  </div>
                </div>
              </button>
            );
          })
        ) : (
          <p>Problemas con la carga de tonos</p>
        )}
      </div>
    </div>
  );
}
