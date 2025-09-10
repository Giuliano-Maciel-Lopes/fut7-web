import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string; // permite passar classes extras
  msg:string
};

export function CreatEditLayout({ msg,  children, className = "" }: Props) {
  return (
    <div
      className={` flex flex-col w-full h-auto bg-white border-4 border-blue-800 rounded-lg shadow-sm  ${className}`}
    >
      <h1 className="w-full text-center bg-blue-600 text-white font-bold text-xl py-3 rounded-b-lg shadow">
       {msg}
      </h1>

      <div className=" p-2  my-4">{children}</div>
      
    </div>
  );
}
