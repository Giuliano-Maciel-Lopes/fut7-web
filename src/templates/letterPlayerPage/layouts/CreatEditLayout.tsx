import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string; // permite passar classes extras
};

export function CreatEditLayout({ children, className = "" }: Props) {
  return (
    <div
      className={`w-full h-auto bg-white border border-gray-300 rounded-lg shadow-sm p-6  mx-auto my-8  ${className}`}
    >
      {children}
    </div>
  );
}
