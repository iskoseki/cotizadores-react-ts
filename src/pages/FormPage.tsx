import React, { Suspense, useEffect, useState } from "react";
import QuoterCicle from "../components/QuoterCicle/QuoterCicle";
import Form from "../components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "../context/CotizacionContext";
import { FormValues, SetForm } from "../types/formTypes";
import Loading from "../components/Loading";
import { FourthStepContent } from "./TicketPage";

import ErrorComponent from "../components/ErrorComponent";
import useFormFields from "../hooks/useFormFields";
import { useFormValues } from "../hooks/useFormValues";
import createApiUrl from "../utils/creatApiUrl";
import { useFetch } from "../hooks/useFetch";

const ThirdStep: React.FC = () => {
  const {
    guardarFormulario,
    SetCotizacionStatus,
    CotizacionStatus,
    selectedQuoter,
  } = useStore();
  const { setCurrentStep, cotizacion, Monto, Plazo, PlazoQuincenal } =
    useStore();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { data } = useFetch<SetForm>(createApiUrl("/wp-json/acf/v3/pages/28"));
  const { formFields, formAutoFields } = useFormFields();
  const { action, title } = useFormValues();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentStep(2);
  }, [setCurrentStep]);

  const handleFormSubmit: SubmitHandler<FormValues> = async (formData) => {
    setLoading(true);
    const typeToQuoter: Record<string, string> = {
      Relojes: "Relojes",
      Alhajas: "Joyas",
      Auto: "Autoimpulsa",
      Diamantes: "Diamantes",
    };
    const quoterType = selectedQuoter && typeToQuoter[selectedQuoter];
    const url = action;

    if (!url) {
      console.error("URL is not defined");
      setLoading(false);
      return;
    }

    try {
      guardarFormulario(formData);
      if (quoterType !== "Autoimpulsa") {
        formData.LEADCF12 = quoterType;
      }
      if (quoterType === "Autoimpulsa") {
        formData.LEADCF40 = String(Monto);
        formData.LEADCF42 = String(Plazo);
        formData.LEADCF43 = String(PlazoQuincenal?.toFixed());
      } else {
        const cotizacionData = cotizacion[2];
        formData.LEADCF44 = String(cotizacionData.PrestamoMaximo);
        formData.LEADCF39 = String(cotizacionData.PrestamoMinimo);
        formData.LEADCF41 = String(cotizacionData.Producto);
      }
      console.log(action);
      const postData = new URLSearchParams(formData as any).toString();
      const response = await fetch(action, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: postData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log(
        `🤝 Bienvenido ${formData["First Name"]}, tu cita fue enviada con éxito, status: ${response.status}.`
      );
      SetCotizacionStatus(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error.message
        );
        setError(`🥲 Error: ${error.message}`);
      } else {
        console.error("An unexpected error occurred:", error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f8f8]">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : CotizacionStatus ? (
        <FourthStepContent />
      ) : (
        <>
          <Suspense fallback={<Loading height={400} />}>
            <QuoterCicle />
          </Suspense>
          <section className="section pt-0">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-12 br-24 bg-white col-md-10">
                  <div className="mb-3">
                    <div className="p-10">
                      <h2 className="text-normal-dos text-dark bold">
                        {title}
                      </h2>
                      <p className="text-dark mb-5">
                        {data?.texto_ingresa_tus_datos}
                      </p>
                      <Suspense fallback={<Loading />}>
                        <Form
                          formFields={
                            selectedQuoter === "Auto"
                              ? formAutoFields
                              : formFields
                          }
                          onSubmit={handleFormSubmit}
                        />
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
};

export default ThirdStep;
