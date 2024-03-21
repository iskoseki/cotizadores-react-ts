import { useStore } from "../../context/CotizacionContext";
import React, { useEffect, useState } from "react";
import { calcularPagoQuincenal } from "../../utils/pagoQuincenalCal";

export default function RenegociarAuto({ setCotizacionCompletada }) {
  const {
    cotizacionAutomotor,
    Monto,
    Plazo,
    PlazoQuincenal,
    guardarMonto,
    guardarPlazoQuincenal,
    setShowForm,
  } = useStore();
  const { Prestamo } = cotizacionAutomotor;

  useEffect(() => {
    if ((Monto && Monto > Prestamo) || (Monto && Monto < 20000)) {
      guardarMonto(Prestamo);
    }
  }, [Prestamo, guardarMonto, Monto]);

  const [inputMonto, setInputMonto] = useState(Monto);

  useEffect(() => {
    if (Monto) setInputMonto(Monto > 20000 ? Monto : 20000);
  }, [Monto]);

  const [error, setError] = useState<string | null>();

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonto = Number(e.target.value);
    setInputMonto(newMonto);

    if (newMonto < 20000) {
      setError("El monto mínimo del préstamo es de $20,000");
    } else if (newMonto > Prestamo) {
      setError(`El monto máximo del préstamo es de $${Prestamo}`);
    } else {
      setError(null);
    }
  };

  const handleMontoBlur = () => {
    let newMonto = inputMonto;
    if (newMonto)
      if (newMonto < 20000) {
        newMonto = 20000;
      } else if (newMonto > Prestamo) {
        newMonto = Prestamo;
      }
    guardarMonto(Number(newMonto));
    const newPlazo = calcularPagoQuincenal(Number(newMonto), Plazo);
    guardarPlazoQuincenal(newPlazo);
  };

  const handleButtonClick = () => {
    // Lógica para modificar el estado
    setCotizacionCompletada(false);
  };

  return (
    <div id="renegociar" className="pasos-cotizador my-4 bg-white br-24 p-4">
      <h2 className="text-normal-dos text-dark bold mb-8 ">Renegociar</h2>
      <div className="row ">
        <div className="col-12  w-full mb-4">
          <label htmlFor="basic-url" className="form-label text-dark bold">
            Monto deseado del préstamo
          </label>
          {error && <p className="text-red-500 text-[12px]">{error}</p>}
          <input
            className="form-control border-dark appearance-none"
            type="number"
            min="20000"
            max={Prestamo}
            onChange={handleMontoChange}
            onBlur={handleMontoBlur}
          />
          <small id="montoHelp" className="form-text text-muted ">
            El monto mínimo del préstamo es de $20,000 y un máximo de $
            {Prestamo}.
          </small>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="w-full md:col-6 mb-4 flex justify-between items-end">
            <span className="text-left font-medium text-[#757575]">
              Pago quincenal
            </span>
            <hr className="border-dashed border-2 border-[#E0E0E0] flex-grow mx-2" />
            <span className="text-right mr-2 text-[#616161] font-semibold">
              ${PlazoQuincenal && Math.round(PlazoQuincenal)}
            </span>
          </div>
          <div className=" w-full md:col-6 mb-4 flex justify-between items-end">
            <span className="text-left  font-medium text-[#757575]">
              Plazo mensual
            </span>
            <hr className="border-dashed border-2 border-[#E0E0E0] flex-grow mx-2" />
            <span className="text-right mr-2 text-[#616161] font-semibold">
              {Plazo}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-end">
        <button
          onClick={handleButtonClick}
          className="btn btn-outline-dark hidden md:block py-2 px-5"
          id="btn-paso-atras-1"
        >
          Volver
        </button>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary py-2 px-5"
        >
          <p className="">Siguiente</p>
        </button>
      </div>
    </div>
  );
}
