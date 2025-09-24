import { FormCreateMatch } from "./components/formcreate";
import { AdminTeamsPage } from "../adminteamsPage";
import { ArrowBigDownDash } from "lucide-react";

export function AdminCreatePagematch() {
  return (
    <section className="flex  flex-col container my-10">
      <div className=" flex flex-col md:flex-row gap-4 justify-center items-center ">
        <div className="md:w-1/2 ">
          <FormCreateMatch />
        </div>
        <div className=" hidden md:flex md:w-1/2">
          <ArrowBigDownDash className="  flex h-60 w-full" />
        </div>
      </div>
      <AdminTeamsPage />
    </section>
  );
}
