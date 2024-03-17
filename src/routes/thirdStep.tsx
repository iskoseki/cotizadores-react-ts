import React, { Suspense, startTransition, useEffect, useState } from "react";
import QuoterCicle from "../components/QuoterCicle/QuoterCicle";
import Form from "../components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "../context/CotizacionContext";
import { FormValues } from "../types/formTypes";
import Loading from "../components/Loading";
import FormAutoImpulsa from "../components/Form/FormAutoImpulsa";
import { FourthStepContent } from "./fourdStep";
import axios from "axios";
import ErrorComponent from "../components/ErrorComponent";
//import axios from "axios";

export default function ThirdStep() {
  const {
    guardarFormulario,
    SetCotizacionStatus,
    CotizacionStatus,
    selectedQuoter,
  } = useStore();
  const { setCurrentStep, cotizacion, Monto, Plazo, PlazoQuincenal } =
    useStore();
  const cotizacionAutomotoFinal = {
    MontoDeseado: Monto,
    Plazo: Plazo,
    PlazoQuincenal: Math.round(Number(PlazoQuincenal)),
  };

  // Agrega un nuevo estado para manejar el error
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      startTransition(() => guardarFormulario(data));
      const postData = {
        ...data, // Los datos del formulario
        cotizacion:
          selectedQuoter === "Automotor" ? cotizacionAutomotoFinal : cotizacion, // Añade cotizacion o cotizacionAutomotor dependiendo del formulario seleccionado
      };
      const response = await axios.post(
        "https://crm.zoho.com/crm/WebToLeadForm",
        postData
      ); //https://crm.zoho.com
      console.log(response.status, postData);
      setLoading(false);
      SetCotizacionStatus(true);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error.response
      );
      // Si hay un error, establece el estado de error
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setCurrentStep(2);
  }, [setCurrentStep]);
  return (
    <div className="bg-[#f8f8f8]">
      {loading ? (
        // Si está cargando, muestra el componente de carga
        <Loading />
      ) : error ? (
        // Si hay un error, muestra el componente de error
        <ErrorComponent error={error} />
      ) : CotizacionStatus ? (
        <FourthStepContent />
      ) : (
        <>
          <Suspense fallback={<Loading height={400} />}>
            <QuoterCicle />
          </Suspense>
          <section className="section   pt-0">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-12 br-24 bg-white col-md-10">
                  <div className=" mb-3">
                    <div className=" p-10 ">
                      <h2 className="text-normal-dos text-dark bold">
                        Ingresa tus datos
                      </h2>
                      <p className="text-dark mb-5">
                        Lorem ipsum dolor sit amet consectetur. Cursus non
                        tellus sodales at maecenas egestas justo. Consequat
                        lobortis tristique faucibus orci quis tempor.
                      </p>
                      <Suspense fallback={<Loading />}>
                        {selectedQuoter === "Automotor" ? (
                          <FormAutoImpulsa onSubmit={onSubmit} />
                        ) : (
                          <Form onSubmit={onSubmit} />
                        )}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
