import { CreateEditForm } from "@/templates/letterPlayerPage";
import { CreatEditFormTeam } from "./components/createEditTeam";
import { useUploadFormConfirm } from "@/hooks/uploadsform/useUploadFormConfirm";
import { useCreateEditTeam } from "@/hooks/team/createEdit/query";
import { useCreateEditFormTeam } from "@/hooks/team/createEdit/form";



export function CreateTeamPage() {

  return (
    <aside className="container">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">TESTE2</div>
      </div>
    </aside>
  );
}
