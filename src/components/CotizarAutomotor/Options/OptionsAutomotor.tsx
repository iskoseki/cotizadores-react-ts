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

export default function OptionsAutomotor() {
  const {
    year,
    brand,
    models,
    version,
    productType,
    setYear,
    setBrand,
    setModels,
    setVersion,
    setProductType,
  } = useCotizacionStore();

  // Fetch year options using custom hook
  const { data: yearData } = useFetchYears();
  const { data: brandData } = useFetchBrands(Number(year));
  const { data: modelsData } = useFetchModels(Number(year), Number(brand));
  const { data: versionData } = useFetchVersion(
    Number(year),
    Number(brand),
    Number(models)
  );

  return (
    <Suspense fallback={<Loading height={200} />}>
      <div className="row mb-4">
        <YearOption year={year} setYear={setYear} yearOptions={yearData} />
        <BrandOption
          brand={brand}
          setBrand={setBrand}
          brandOptions={brandData}
        />
        <ModelOption
          models={models}
          setModels={setModels}
          modelsOptions={modelsData}
        />
        <VersionOption
          version={version}
          setVersion={setVersion}
          versionOptions={versionData}
        />
        <ProductOption
          productType={productType}
          setProductType={setProductType}
        />
      </div>
    </Suspense>
  );
}
