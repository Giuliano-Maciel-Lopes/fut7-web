import { useRouter } from "next/router";
import { Loading } from "@/components/loading/loading";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useShowPlayerId } from "@/hooks/player/showId/showId";
import { useCreateEditPlayerForm } from "@/hooks/player/createEdit/form";
import { useCreateEditPlayer } from "@/hooks/player/createEdit/query";
import { useUpload } from "@/hooks/uplods/uploads";
import { useUploadFormConfirm } from "@/hooks/uploadsform/useUploadFormConfirm";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";
import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { CreateEditForm } from "@/templates/letterPlayerPage";

export function AdminUpdatePlayerPage() {
  const router = useRouter();
  const playerId = router.query.id as string;
  const confirm = useToggle();

  // Busca os dados do jogador
  const { data, isLoading } = useShowPlayerId(playerId);

  // Formulário
  const editCreate = useCreateEditPlayerForm({ player: data });

  // Mutation
  const { mutate, isPending } = useCreateEditPlayer();

  // Upload
  const uploadFile = useUpload();

  // Confirmação do upload/form
  const { handleConfirm } = useUploadFormConfirm({
    entityName: "PLAYERS",
    form: editCreate,
    uploadfile: uploadFile,
    mutate,
    id: data?.id,
  });

  if (isLoading) return <Loading />;
  if (!data)
    return (
      <NotfoundItems msgNotfound="Este jogador não existe ou foi excluído." />
    );

  return (
    <div>
      <LatterPlayerpage data={data}>
        <CreateEditForm
          playerPosition={data.position}
          editCreat={editCreate}
          uploadfile={uploadFile}
          onConfirm={confirm.open}
        />
      </LatterPlayerpage>

      <ConfirmLayout
        isLoading={isPending}
        mensg="Tem certeza que deseja modificar a cartinha desse usuário?"
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
