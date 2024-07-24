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
import UserID from "../utils/fetchUserId";
import useCotizacionStore from "../context/cotizacionAutoStore";

const ThirdStep: React.FC = () => {
  const {
    guardarFormulario,
    SetCotizacionStatus,
    CotizacionStatus,
    selectedQuoter,
    setCurrentStep,
    cotizacion,
    Monto,
    Plazo,
    PlazoQuincenal,
    datosCotizador,
  } = useStore();
  const { year, brandText, modelsText, versionText, product } =
    useCotizacionStore();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { data } = useFetch<SetForm>(createApiUrl("/wp-json/acf/v3/pages/28"));
  const { formFields, formAutoFields } = useFormFields();
  const { action, title } = useFormValues();
  const { id, error: errorUser } = UserID();

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
      if (errorUser) {
        formData.LEADCF47 = String(id);
        throw new Error(errorUser);
      } else {
        formData.LEADCF47 = String(id);
      }
      guardarFormulario(formData);
      if (quoterType !== "Autoimpulsa") {
        formData.LEADCF12 = quoterType;
      }
      const DataOfAlhajas = datosCotizador.alhajas;
      const DataOfDiamantes = datosCotizador.diamantes;
      const DataOfRelojes = datosCotizador.relojes;

      if (quoterType === "Relojes") {
        formData.LEADCF16 = `Marca: ${DataOfRelojes.brand}, Precio: ${DataOfRelojes.price}`;
      }
      if (quoterType === "Joyas") {
        formData.LEADCF16 = `${DataOfAlhajas.peso}g, Material: ${DataOfAlhajas.material}`;
      }
      if (quoterType === "Diamantes") {
        formData.LEADCF16 = `${DataOfDiamantes.size} Kilates, Cantidad:${DataOfDiamantes.quantity}, Claridad:${DataOfDiamantes.clarity}, Color: ${DataOfDiamantes.color}, Corte: ${DataOfDiamantes.cut}`;
      }

      if (quoterType === "Autoimpulsa") {
        formData.LEADCF16 = `${year}, ${brandText}, ${modelsText}, ${versionText}, Nro producto: ${product}`;
        formData.LEADCF40 = String(`Monto:${Monto}`);
        formData.LEADCF42 = String(`Plazo:${Plazo}`);
        formData.LEADCF43 = String(`PlazoQuincenal:${PlazoQuincenal}`);
      } else {
        const cotizacionData = cotizacion[2];

        formData.LEADCF44 = String(
          `prestamo-maximo: ${cotizacionData.PrestamoMaximo}`
        );
        formData.LEADCF39 = String(
          `prestamo-minimo:${cotizacionData.PrestamoMinimo}`
        );
        formData.LEADCF41 = String(`Plazo:${cotizacionData.Producto}`);
      }
      console.log("📧 Datos enviados:", formData);
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
        `🤝 Bienvenido ${formData["First Name"]}, tu cita fue enviada con éxito, status: ${response.status}.`,
        postData
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
