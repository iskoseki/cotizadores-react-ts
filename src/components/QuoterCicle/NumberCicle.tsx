import React from "react";
import CheckIcon from "../CheckIcon";

type NumberCicleProps = {
  num: number;
  isActive: boolean;
  paso?: boolean;
  children: React.ReactNode;
};

const NumberCicle = ({ num, isActive, paso, children }: NumberCicleProps) => {
  return (
    <li className="list-group-item text-small-dos d-flex flex-column text-center ">
      <div
        className={`numero mx-auto mb-3 d-flex align-items-center justify-content-center ${
          isActive ? "active scale-125" : ""
        }`}
      >
        {paso ? <CheckIcon /> : <span className="text-normal book">{num}</span>}
      </div>
      <div className={`texto text-dark ${isActive ? "active scale-110" : ""}`}>
        {children}
      </div>
    </li>
  );
};

export default NumberCicle;
