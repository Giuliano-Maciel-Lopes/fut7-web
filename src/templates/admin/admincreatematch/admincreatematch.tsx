import { FormCreateMatch } from "./components/formcreate";
import { AdminTeamsPage } from "../adminteamsPage";

export function AdminCreatePagematch() {
  return (
    <section className="flex  flex-col container my-10">
      <div className=" flex flex-col md:flex-row">
        <div className="md:w-1/2 ">
          <FormCreateMatch />
        </div>
        <div className="md:w-1/2"></div>
      </div>
      <AdminTeamsPage />
    </section>
  );
}
