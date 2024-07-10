import React from "react";
import OutlineButton from "../OutlineButton/OutlineButton";
import { useStore } from "../../context/CotizacionContext";

export default function Actions() {
  const { setShowForm } = useStore();
  return (
    <div className="flex justify-center md:justify-end md:gap-2">
      <OutlineButton
        func={() => setShowForm(false)}
        type="button"
        id="volver"
        value="Volver"
        title="Volver"
      >
        Volver
      </OutlineButton>

      <button
        type="submit"
        id="formsubmit"
        value="Agendar Cita"
        title="Agendar Cita"
        className={`btn btn-primary flex flex-shrink-0 justify-center items-center gap-2.5 py-2 px-2 w-full md:w-[11.25rem] h-12  bg-[#a6192e] Sans" '] text-white text-center rounded-5xl leading-normal`}
      >
        Enviar Información
      </button>
    </div>
  );
}
