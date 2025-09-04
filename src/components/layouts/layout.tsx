import React from "react";
import { Header } from "./header";
import { Fotter } from "./fotter";

type props = {
  children: React.ReactNode;
};

export function Layout({ children }: props) {
  return (
    <div className="min-h-screen  flex flex-col  text-white bg-gray-900 ">
      <Header />

      <main className="flex-1 flex flex-col items-center mt-20 md:mt-24">
       <div className="w-full max-w-12xl ">{children}</div>
      </main>

      <Fotter/>
    </div>
  );
}
