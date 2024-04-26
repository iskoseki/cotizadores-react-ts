import { useStore } from "../../context/CotizacionContext";
import React, { useEffect, useState } from "react";
import { calcularPagoQuincenal } from "../../utils/pagoQuincenalCal";
import { formatCurrency } from "../../utils/formarCurrency";
import CurrencyInput from "react-currency-input-field";

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
  const [inputMonto, setInputMonto] = useState<number>(0);

  const [error, setError] = useState<string | null>();

  useEffect(() => {
    if ((Monto && Monto > Prestamo) || (Monto && Monto < 20000)) {
      guardarMonto(Prestamo);
    }
  }, [Prestamo, guardarMonto, Monto]);

  useEffect(() => {
    handleMontoChange(Prestamo);
    setInputMonto(Prestamo);
  }, []);

  const handleMontoChange = (monto: number) => {
    let newMonto = monto;
    let errorMessage = "";
    if (newMonto)
      if (newMonto < 20000) {
        newMonto = 20000;
        errorMessage = "El monto ingresado es menor al mínimo permitido.";
      } else if (newMonto > Prestamo) {
        newMonto = Prestamo;
        errorMessage = "El monto ingresado es mayor al máximo permitido.";
      }
    guardarMonto(Number(newMonto));
    const newPlazo = calcularPagoQuincenal(Number(newMonto), Plazo);
    guardarPlazoQuincenal(newPlazo);
    setError(errorMessage);
  };

  const handleButtonClick = () => {
    setCotizacionCompletada(false);
  };

  const disableButton = () => {
    if (
      (inputMonto && inputMonto > Prestamo) ||
      (inputMonto && inputMonto < 20000)
    ) {
      return true;
    } else if (inputMonto === 0 || !inputMonto) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div id="renegociar" className="pasos-cotizador my-4 bg-white br-24 p-4">
      <h2 className="text-normal-dos text-dark bold mb-8 ">
        ¿Necesitás un monto menor?
      </h2>
      <div className="row ">
        <div className="col-12  w-full mb-4">
          <label htmlFor="basic-url" className="form-label text-dark bold">
            Monto deseado del préstamo
          </label>
          {error && <p className="text-red-500 text-[12px]">{error}</p>}

          <div className="input-group">
            <span className="input-group-text text-[#9BADD3]">$</span>
            <CurrencyInput
              className="form-control"
              id="input-example"
              name="input-name"
              placeholder="Por favor ingresa un número"
              defaultValue={Prestamo}
              decimalsLimit={2}
              max={Prestamo}
              intlConfig={{ locale: "es-MX", currency: "MXN" }}
              decimalSeparator="."
              groupSeparator=","
              prefix=" "
              onValueChange={(value) => {
                setInputMonto(Number(value));
                handleMontoChange(Number(value));
              }}
            />
          </div>
          <small id="montoHelp" className="form-text text-muted ">
            El monto mínimo del préstamo es de $20,000 y un máximo de{" "}
            {formatCurrency(Prestamo)}.
          </small>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="w-full md:col-6 mb-4 flex justify-between items-end">
            <span className="text-left font-medium text-[#757575]">
              Pago quincenal
            </span>
            <hr className="border-dashed border-2 border-[#E0E0E0] flex-grow mx-2" />
            <span className="text-right mr-2 text-[#616161] font-semibold">
              {!PlazoQuincenal ? "$0.00" : formatCurrency(PlazoQuincenal)}
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
          Volver a cotizar
        </button>
        <button
          onClick={() => setShowForm(true)}
          className={`btn ${
            disableButton() ? "btn-secundary" : "btn-primary"
          }  py-2 px-5`}
          disabled={disableButton()}
        >
          <p className="">Siguiente</p>
        </button>
      </div>
    </div>
  );
}
