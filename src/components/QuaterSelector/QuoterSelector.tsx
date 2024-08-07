import React, { useRef, Suspense, RefObject } from "react";
import { useFetch } from "../../hooks/useFetch";
import { QuaterSelectorProps, Response } from "./QuaterSelector.types";
import Loading from "../../components/Loading";
import { QuoterItem } from "./QuoterItem";
import { useDragMouse } from "../../hooks/useMauseDrag";
import createApiUrl from "../../utils/creatApiUrl";
import ErrorComponent from "../ErrorComponent";

const QuaterSelector: React.FC<QuaterSelectorProps> = ({
  setSelectedQuoter,
  selectedQuoter,
}) => {
  const initCotizadoresUrl = import.meta.env.VITE_INIT_COTIZADORES;
  const createCotizadoresUrl: string = createApiUrl(initCotizadoresUrl);

  const { data, error, isLoading } = useFetch<Response>(createCotizadoresUrl);

  const sliderRef: RefObject<HTMLUListElement> = useRef(null);
  const {
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  } = useDragMouse(sliderRef);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent error={error.message} />;
  }

  return (
    <div className="br-24 md:bg-white mb-3">
      <div className="py-4 px-8 md:p-4 ">
        <div className="md:border-b-[1px] md:border-[#BDBDBD]  border-dark mb-4 mx-2">
          <h1 className="text-normal-dos text-dark text-center bold mb-4">
            ¿Qué necesitas cotizar?
          </h1>
        </div>

        <Suspense fallback={<Loading />}>
          <ul
            className="nav nav-pills flex flex-col md:flex-row gap-2 nav-fill overflow-x-auto overflow-hidden scrollbar-none scroll-smooth md:mx-8"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            {data?.mostrar_cotizador === true ? (
              data?.cotizador.map((cotizador, index) => (
                <QuoterItem
                  key={index}
                  cotizador={cotizador}
                  index={index}
                  setSelectedQuoter={setSelectedQuoter}
                  selectedQuoter={selectedQuoter}
                />
              ))
            ) : (
              <p className="text-center font-bold">
                El cotizador no se encuentra disponible.
              </p>
            )}
          </ul>
        </Suspense>
      </div>
    </div>
  );
};

export default QuaterSelector;
