import React from "react";
import { useStore } from "../../context/CotizacionContext";
import useCotizacionStore from "../../context/cotizacionAutoStore";
export default function CotizacionInfo() {
  const {
    year,
    brand,
    brandText,
    models,
    modelsText,
    version,
    versionText,
    product,
  } = useCotizacionStore();
  const { selectedQuoter, datosCotizador } = useStore();
  const Alhajas = datosCotizador?.alhajas;
  const Relojes = datosCotizador?.relojes;
  const Diamantes = datosCotizador?.diamantes;

  return (
    <div className="card border-dark text-dark bg-24 mb-4">
      <div className="card-body">
        <div className="bold text-normal mb-3">Datos cotizados</div>
        <div className="row">
          <div className="col-12 col-md-12 mb-4">
            <p className="text-uppercase text-small book">Tipo de cotizador</p>
            <p className="text-normal mb-0">{selectedQuoter}</p>
          </div>
          {selectedQuoter === "Alhajas" && (
            <>
              <div className="col-12 col-md-3 mb-4">
                <p className="text-uppercase text-small book">Peso</p>
                <p className="text-normal mb-0">{Alhajas && Alhajas.peso}G</p>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <p className="text-uppercase text-small book">Material</p>
                <p className="text-normal mb-0">
                  {Alhajas && Alhajas.material}
                </p>
              </div>
            </>
          )}
          {selectedQuoter === "Relojes" && (
            <>
              <div className="col-12 col-md-3 mb-4">
                <p className="text-uppercase text-small book">Marca</p>
                <p className="text-normal mb-0">{Relojes && Relojes.brand}</p>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <p className="text-uppercase text-small book">
                  Precio primedio del reloj
                </p>
                <p className="text-normal mb-0">{Relojes && Relojes.price}</p>
              </div>
            </>
          )}
          {selectedQuoter === "Diamantes" && (
            <>
              <div className="col-12 col-md-2 mb-4">
                <p className="text-uppercase text-small book">
                  Peso en Kilates
                </p>
                <p className="text-normal mb-0">
                  {Diamantes && Diamantes.size}
                </p>
              </div>
              <div className="col-12 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Cantidad</p>
                <p className="text-normal mb-0">
                  {Diamantes && Diamantes.quantity}
                </p>
              </div>
              <div className="col-12 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Corte</p>
                <p className="text-normal mb-0">{Diamantes && Diamantes.cut}</p>
              </div>
              <div className="col-12 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Color</p>
                <p className="text-normal mb-0">
                  {Diamantes && Diamantes.color}
                </p>
              </div>
              <div className="col-12 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Claridad</p>
                <p className="text-normal mb-0">
                  {Diamantes && Diamantes.clarity}
                </p>
              </div>
            </>
          )}
          {selectedQuoter === "Auto" && (
            <>
              <div className="col-4 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Año</p>
                <p className="text-normal mb-0">{year && year}</p>
              </div>
              <div className="col-4 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Marca</p>
                <p className="text-normal mb-0">{`${brand && brand}`}</p>
              </div>
              <div className="col-4 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Modelo</p>
                <p className="text-normal mb-0">{`${models}`}</p>
              </div>
              <div className="col-4 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Version</p>
                <p className="text-normal mb-0">{`${version}`}</p>
              </div>
              <div className="col-4 col-md-2 mb-4">
                <p className="text-uppercase text-small book">Producto</p>
                <p className="text-normal mb-0">{product}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
