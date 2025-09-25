import { newReleases } from "../../utils/newReleases";
import { CardNew } from "../../components/cardNew";
import Image from "next/image";

export function SectionNew() {
  return (
    <section className="flex  flex-col gap-4  items-center">

      <div className="  container flex justify-center">
        <h3 className="text-heading-lg text-blue-500">
          Novidades dessa Seseon
        </h3>
      </div>

      <div className="flex gap-9 items-center justify-center mt-10">
        {newReleases.map((r) => (
          <CardNew
            classname={
              r.id === 2
                ? "md:w-72 md:h-[420px] border-blue-400 shadow-[0_0_25px_rgba(0,112,244,0.6)]"
                : ""
            }
            icone={r.icone}
            description={r.description}
            img={r.img}
            key={r.id}
          />
        ))}
      </div>
      
    </section>
  );
}
