import React, { useState } from "react";

export const QuoterItem = ({
  cotizador,
  index,
  setSelectedQuoter,
  selectedQuoter,
}) => {
  const [showSVG, setShowSVG] = useState(false);

  const handleShowSVG = () => {
    if (cotizador.titulo === selectedQuoter) {
      setShowSVG(true);
    } else {
      setShowSVG(false);
    }
  };
  return (
    <li
      key={index}
      className={`nav-item mx-1 ml-1 mr-2   border-2 rounded-5xl  position-relative ${
        selectedQuoter === cotizador.titulo
          ? "active  border-[#D97B89] "
          : "border-[#FFEBF0] "
      }`}
      onClick={() => {
        setSelectedQuoter(cotizador.titulo);
        handleShowSVG();
      }}
    >
      <p
        className={`nav-link cotizador pointer ${
          selectedQuoter === cotizador.titulo
            ? "text-[#e44359] hover:text-[#e44359] "
            : "text-[#A6192E]  hover:text-[#D97B89] "
        }`}
        aria-current="page"
      >
        {cotizador.titulo}
      </p>
      {selectedQuoter === cotizador.titulo && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="check-cotizador"
        >
          <path
            d="M10.0001 1.6665C5.41675 1.6665 1.66675 5.4165 1.66675 9.99984C1.66675 14.5832 5.41675 18.3332 10.0001 18.3332C14.5834 18.3332 18.3334 14.5832 18.3334 9.99984C18.3334 5.4165 14.5834 1.6665 10.0001 1.6665ZM9.04052 13.4594C8.65 13.8499 8.01683 13.8499 7.62631 13.4594L4.75466 10.5877C4.42996 10.2631 4.42996 9.73662 4.75466 9.41193C5.07903 9.08755 5.60483 9.08719 5.92966 9.41111L8.33342 11.8082L14.0667 6.07484C14.3932 5.74841 14.9227 5.74934 15.248 6.07693C15.5716 6.40288 15.5707 6.9292 15.2459 7.25401L9.04052 13.4594Z"
            fill="#C04356"
          />
        </svg>
      )}
    </li>
  );
};
