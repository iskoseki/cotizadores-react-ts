import React, { Suspense, startTransition, useEffect, useState } from "react";
import QuoterCicle from "../components/QuoterCicle/QuoterCicle";
import Form from "../components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { useStore } from "../context/CotizacionContext";
import { FormValues, SetForm } from "../types/formTypes";
import Loading from "../components/Loading";
import { FourthStepContent } from "./TicketPage";
import ErrorComponent from "../components/ErrorComponent";
import { useFetch } from "../hooks/useFetch";
import { headerFormName } from "../components/Form/formFields";

import useFormFields from "../hooks/useFormFields";
import { useFormValues } from "../hooks/useFormValues";
import createApiUrl from "../utils/creatApiUrl";
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

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data } = useFetch<SetForm>(createApiUrl("/wp-json/acf/v3/pages/28"));
  const { formFields, formAutoFields } = useFormFields();
  const { action, title } = useFormValues();
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentStep(2);
  }, [setCurrentStep]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const url = action;
    if (!url) {
      console.error("URL is not defined");
      return;
    }
    try {
      startTransition(() => guardarFormulario(data));
      const postData = {
        ...data,
        cotizacion:
          selectedQuoter === "Auto" ? cotizacionAutomotoFinal : cotizacion,
      };

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log(
          `Cita enviada con exito, status:${response.status}`,
          postData
        );
      }

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status + " " + response.headers} `
        );
      }
      setLoading(false);
      SetCotizacionStatus(true);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error.message
      );
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
          <section className="section   pt-0">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-12 br-24 bg-white col-md-10">
                  <div className=" mb-3">
                    <div className=" p-10 ">
                      <h2 className="text-normal-dos text-dark bold">
                        {title}
                      </h2>
                      <p className="text-dark mb-5">
                        {data?.texto_ingresa_tus_datos}
                      </p>
                      <Suspense fallback={<Loading />}>
                        <Form
                          formName={
                            selectedQuoter === "Auto"
                              ? headerFormName.autoFormName
                              : headerFormName.quoterFormName
                          }
                          formFields={
                            selectedQuoter === "Auto"
                              ? formAutoFields
                              : formFields
                          }
                          onSubmit={onSubmit}
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
}
