import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { UsePLayerFindByuser } from "@/hooks/player/findyByuser/findyByuser";
import { useUploadFormConfirm } from "@/hooks/uploadsform/useUploadFormConfirm";
import { useCreateEditPlayerForm } from "@/hooks/player/createEdit/form";
import { useCreateEditPlayer } from "@/hooks/player/createEdit/query";
import { useUpload } from "@/hooks/uplods/uploads";
import { Loading } from "@/components/loading/loading";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";

export default function Leterr() {
  const confirm = useToggle();

  const { isLoading, data } = UsePLayerFindByuser(); // busca dados player

  const editcreat = useCreateEditPlayerForm({ player: data }); // formulario
  const { mutate, isPending } = useCreateEditPlayer(); // cria  e edit
  const uploadfile = useUpload(); // upl

  if (isLoading) return <Loading />;

  const { handleConfirm } = useUploadFormConfirm({
    uploadfile,
    entityName: "PLAYERS",
    id: data?.id,
    form: editcreat,
    mutate,
  });

  return (
    <div>
      <LatterPlayerpage
        data={data}
        editCreat={editcreat}
        onConfirm={confirm.open}
        uploadfile={uploadfile}
      />

      
      <ConfirmLayout
        isLoading={isPending}
        mensg="Tem certeza que deseja modificar sua cartinha ?"
        onCancel={confirm.closed}
        onConfirm={async () => {
          confirm.closed();
          await handleConfirm();
        }}
        onOpenChange={confirm.toggle}
        open={confirm.isOpen}
      />
    </div>
  );
}
