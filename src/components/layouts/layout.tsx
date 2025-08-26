import React from "react";
import { Header } from "./header";

type props = {
  children: React.ReactNode;
};

export function Layout({ children }: props) {
  return (
    <div className="min-h-screen  flex flex-col  text-white bg-gray-900 ">
      <Header />

      {children}
    </div>
  );
}
