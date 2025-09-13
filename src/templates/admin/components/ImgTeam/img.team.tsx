import { CaptionsOff, } from "lucide-react";
import Image from "next/image";
 type Props={
    img:string | null
  }
  
  export function ImgTeam({img}:Props) {
      const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
    return (
      <div >
          {img ? (
            <Image
              src={`${BaseURL}/${img}`}
              alt={"name do teams"}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <CaptionsOff width={40} height={70}color="black" />
          )}
      </div>
    );
  }
  