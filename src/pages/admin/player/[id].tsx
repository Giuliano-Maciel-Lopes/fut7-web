import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { useShowPlayerId } from "@/hooks/player/showId/showId";
import { useRouter } from "next/router";
import { Loading } from "@/components/loading/loading";
import { useUploadFormConfirm } from "@/hooks/uploadsform/useUploadFormConfirm";
import { useCreateEditPlayer } from "@/hooks/player/createEdit/query";
import { useCreateEditPlayerForm } from "@/hooks/player/createEdit/form";
import { useUpload } from "@/hooks/uplods/uploads";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";
import { NotfoundItems } from "@/components/notfound/nutfound";

export default function PlayerId() {
  const router = useRouter();
  const id = router.query.id;
  const confirm = useToggle();
  const { data, isLoading } = useShowPlayerId(id as string);

  const { mutate, isPending } = useCreateEditPlayer();
  const editcreate = useCreateEditPlayerForm({ player: data });
  const uploadfile = useUpload();

  const { handleConfirm } = useUploadFormConfirm({
    entityName: "PLAYERS",
    form: editcreate,
    uploadfile,
    mutate,
    id: data?.id,
  });

  if (isLoading) return <Loading />;
  if (!data)
    return (
<NotfoundItems msgNotfound="Este jogador não existe mais ou foi excluído." />
    );

  return (
    <div>
      <LatterPlayerpage
        editCreat={editcreate}
        onConfirm={confirm.open}
        uploadfile={uploadfile}
        data={data}
      />
      <ConfirmLayout
        isLoading={isPending}
        mensg="Tem certeza que deseja modificar a cartinha desse usuario ?"
        onCancel={confirm.closed}
        onConfirm={async () => {
          await handleConfirm();
          confirm.closed();
        }}
        onOpenChange={confirm.toggle}
        open={confirm.isOpen}
      />
    </div>
  );
}
