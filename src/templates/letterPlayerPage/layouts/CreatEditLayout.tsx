import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string; // permite passar classes extras
};

export function CreatEditLayout({ children, className = "" }: Props) {
  return (
    <div
      className={` flex flex-col w-full h-auto bg-white border-4 border-blue-800 rounded-lg shadow-sm p-6  mx-auto my-8  ${className}`}
    >
      <div>{children}</div>
      <div></div>
    </div>
  );
}
