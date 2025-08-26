
import { newReleases } from "../../utils/newReleases";
import { CardNew } from "../../components/cardNew";
import { release } from "os";


export function SectionNew() {
  return (
    <section className="flex - flex-col gap-4">

      <div className=" flex justify-center">
        <h3 className="text-heading-lg text-green-400">
          Novidades dessa Seseon
        </h3>
      </div>

      <div className="w-full">
        {newReleases.map((release)=>(
            <CardNew description={release.description} img={release.img} key={release.img}/>
        ))}


      </div>
    </section>
  );
}
