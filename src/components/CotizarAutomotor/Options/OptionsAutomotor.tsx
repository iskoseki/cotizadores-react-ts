import React, { Suspense } from "react";
import Loading from "../../Loading";

import YearOption from "./YearOption";
import BrandOption from "./BrandOption";
import ModelOption from "./ModelOption";
import VersionOption from "./VersionOption";
import ProductOption from "./ProductOption";

import { useFetchYears } from "../../../hooks/QuoterAutomotorHooks/useYear";
import { useFetchModels } from "../../../hooks/QuoterAutomotorHooks/useModels";
import useFetchBrands from "../../../hooks/QuoterAutomotorHooks/useBrands";
import useFetchVersion from "../../../hooks/QuoterAutomotorHooks/useFetchVersion";
import useCotizacionStore from "../../../context/cotizacionAutoStore";

import OptionsError from "./OptionsError";

export default function OptionsAutomotor() {
  const {
    year,
    brand,
    models,
    version,
    productType,
    setYear,
    setBrand,
    setBrandText,
    setModels,
    setModelsText,
    setVersion,
    setVersionText,
    setProductType,
  } = useCotizacionStore();

  const { data: yearData, error: yearError } = useFetchYears();
  const { data: brandData, error: brandError } = useFetchBrands(Number(year));
  const { data: modelsData, error: modelsError } = useFetchModels(
    Number(year),
    Number(brand)
  );
  const { data: versionData, error: versionError } = useFetchVersion(
    Number(year),
    Number(brand),
    Number(models)
  );

  if (yearError || brandError || modelsError || versionError) {
    return <OptionsError error={yearError || brandError || modelsError} />;
  }

  return (
    <Suspense fallback={<Loading height={200} />}>
      <div className="row mb-4">
        {yearError ? (
          <OptionsError error={yearError} />
        ) : (
          <>
            <YearOption year={year} setYear={setYear} yearOptions={yearData} />

            <BrandOption
              brand={brand}
              setBrandText={setBrandText}
              setBrand={setBrand}
              brandOptions={brandData}
            />
            <ModelOption
              models={models}
              setModelsText={setModelsText}
              setModels={setModels}
              modelsOptions={modelsData}
            />
            <VersionOption
              version={version}
              setVersion={setVersion}
              setVersionText={setVersionText}
              versionOptions={versionData}
            />
            <ProductOption
              productType={productType}
              setProductType={setProductType}
            />
          </>
        )}
      </div>
    </Suspense>
  );
}
