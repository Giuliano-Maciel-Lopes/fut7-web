
import { useToggle } from "@/hooks/usetoggle";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";



type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  onclick:()=>void
};

export function BoxFunctional({ icon, title, description ,onclick }: Props) {
const hoverAside = useToggle()
  return (
    <Button onClick={onclick} onMouseEnter={hoverAside.open}  onMouseLeave={hoverAside.closed} className=" h-20 w-20 flex flex-col items-center px-4 pt-4 bg-gray-50 rounded-lg 
     hover:bg-gray-100 cursor-pointer hover:opacity-90 ">
      

      <div className="w-8 h-8 text-blue-600 mb-2">{icon}</div>
      <span className=" h-20 w-20 truncate text-black text-sm font-semibold">{title}</span>

          {hoverAside.isOpen && (
  <div className="absolute top-full mt-2 w-48 bg-white text-gray-700 text-sm p-2 rounded shadow-lg z-50">
          {description}
        </div>
          )}
    </Button>
  );
}
