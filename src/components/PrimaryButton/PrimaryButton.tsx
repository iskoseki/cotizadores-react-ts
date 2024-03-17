import React from "react";

type PrimaryButton = {
  type: "submit" | "reset" | "button" | undefined;
  id: string;
  value?: string;
  title?: string;
  children: React.ReactNode;

  fun?: () => void;
};
const PrimaryButton = ({
  type,
  id,
  value,
  title,
  children,
  fun,
}: PrimaryButton) => {
  return (
    <button
      onClick={fun}
      type={type}
      id={id}
      value={value}
      title={title}
      className={`flex flex-shrink-0 justify-center items-center gap-2.5 py-2 px-6 w-full md:w-[11.25rem] h-12 hover:bg-[#E65369]  bg-[#a6192e] Sans" '] text-white text-center rounded-5xl leading-normal transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
