import { PlayerLetter } from "@/components/LetterPlayer";
import { PlayerLayout } from "./layouts";
import { CreateEditForm } from "./components";

import { Player } from "@shared/prisma";
import { Uploadinput } from "@/hooks/uplods/uploads";
import type { UseCreateEditPlayerFormReturn } from "@/hooks/player/createEdit/form";

type Props={
data?:Player,
 editCreat: UseCreateEditPlayerFormReturn;
uploadfile: Uploadinput;
onConfirm:()=> void

}


export function LatterPlayerpage({data ,editCreat , onConfirm , uploadfile}:Props) {
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  
  return (
    <PlayerLayout className="" bgImage="/assets/fundofutebol.jpg">
      <section className="container flex flex-col md:flex-row  items-center gap-10 md:gap-0 my-5">
        <div className="md:w-1/2 ">
          <PlayerLetter.container size="lg">
            <PlayerLetter.image
              size="lg"
              img={data?.photoUrl ? `${BaseURL}/${data.photoUrl}` : undefined}
            />
            <PlayerLetter.data
              size="lg"
              assistencia={data?.assists ?? 0}
              gols={data?.goals ?? 0}
              nameCart={data?.nameCart || "Crie sua cartinha"}
            />
          </PlayerLetter.container>
        </div>

        <div className="md:w-1/2">
          <CreateEditForm
            editCreat={editCreat}
            uploadfile={uploadfile}
            onConfirm={onConfirm}
          />
        </div>
      </section>
    </PlayerLayout>
  );
}
