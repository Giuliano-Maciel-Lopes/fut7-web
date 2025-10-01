import { CreatEditFormTeam } from "./components/createEditFormTeam";
import { useUploadFormConfirm } from "@/hooks/uploadsform/useUploadFormConfirm";
import { useCreateEditTeam } from "@/hooks/team/createEdit/query";
import { useCreateEditFormTeam } from "@/hooks/team/createEdit/form";
import { useShowTeamId } from "@/hooks/team/showId/showId";
import { useRouter } from "next/router";
import { Loading } from "@/components/loading/loading";
import { useUpload } from "@/hooks/uplods/uploads";
import { useToggle } from "@/hooks/usetoggle";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { ConfirmLayout } from "@/components/confirmLogout";
import { ImgTeam } from "../components/ImgTeam/img.team";

type Props ={
  isAdm:boolean
}

export function EditTeamPage({isAdm}:Props) {

  const router = useRouter();
  const id = router.query.id;
  const ConfirmEdit = useToggle();

  const { data, isLoading } = useShowTeamId(id as string);
  const { mutate, isPending } = useCreateEditTeam();
  const uploadfile = useUpload();

  const editCreat = useCreateEditFormTeam({ team: data });

  const { handleConfirm } = useUploadFormConfirm({
    entityName: "TEAM",
    form: editCreat,
    mutate,
    uploadfile,
    id: data?.id, // c tiver time vai ser data caso contrario vai esta criando
  });
  if (isLoading) return <Loading />;
  if (!data)
    return (
      <NotfoundItems msgNotfound="Este Time não existe mais ou foi excluído." />
    );

  return (
    <aside className="container my-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white relative md:w-1/2 h-60 border-2 flex items-center justify-center">
        <ImgTeam img={data.photoUrl ?? null}/>
        </div>
        <div className="md:w-1/2">
          <CreatEditFormTeam
          isAdm={isAdm}
            editCreat={editCreat}
            onConfirm={ConfirmEdit.open}
            uploadfile={uploadfile}
          />
        </div>
      </div>
      <ConfirmLayout
        mensg="tem certeza que deseja modificar esse time"
        onCancel={ConfirmEdit.closed}
        onConfirm={async () => {
          await handleConfirm();
          ConfirmEdit.closed() 
        }}
        open={ConfirmEdit.isOpen}
        onOpenChange={ConfirmEdit.toggle}
        isLoading={isPending}
      />
    </aside>
  );
}
