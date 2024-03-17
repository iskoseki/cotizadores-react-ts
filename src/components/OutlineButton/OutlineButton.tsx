import React, { MouseEventHandler } from "react";

type OutlineButton = {
  type: "submit" | "reset" | "button" | undefined;
  id: string;
  value?: string;
  title?: string;
  func?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
};
const OutlineButton = ({
  type,
  id,
  value,
  title,
  func,
  children,
}: OutlineButton) => (
  <button
    type={type}
    id={id}
    value={value}
    title={title}
    onClick={func}
    className="hidden md:block  flex-shrink-0 justify-center items-center gap-2.5 py-1 px-4 w-[11.25rem]
     h-12 rounded-5xl border-1 border-[#a6192e] text-[#a6192e] text-center leading-normal"
  >
    {children}
  </button>
);

export default OutlineButton;
