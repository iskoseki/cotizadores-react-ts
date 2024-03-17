import React from "react";

export default function ResultoToPrintHead() {
  return (
    <div>
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="mx-auto mb-3"
        >
          <path
            d="M19.9997 3.3335C10.833 3.3335 3.33301 10.8335 3.33301 20.0002C3.33301 29.1668 10.833 36.6668 19.9997 36.6668C29.1663 36.6668 36.6663 29.1668 36.6663 20.0002C36.6663 10.8335 29.1663 3.3335 19.9997 3.3335ZM17.3734 27.6264C16.9829 28.0169 16.3498 28.0169 15.9592 27.6264L9.04011 20.7073C8.64959 20.3167 8.64959 19.6836 9.04011 19.2931L9.97689 18.3563C10.367 17.9661 10.9994 17.9657 11.3901 18.3553L16.6663 23.6168L28.6067 11.6764C28.9982 11.2849 29.6333 11.2861 30.0234 11.6789L30.9642 12.6264C31.3524 13.0173 31.3513 13.6486 30.9617 14.0381L17.3734 27.6264Z"
            fill="#8BB438"
          />
        </svg>
      </div>
      <h2 className="text-normal-dos text-[#8BB438]  bold text-center">
        ¡Cita exitosa!
      </h2>
      <p className="text-dark mb-5 bold text-center">
        Recordá que todas las cotizaciones son estimativas.
      </p>
    </div>
  );
}
