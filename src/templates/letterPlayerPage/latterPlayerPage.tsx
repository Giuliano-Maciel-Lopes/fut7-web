import { PlayerLetter } from "@/components/LetterPlayer";
import { Loading } from "@/components/loading/loading";
import { UsePLayerFindByuser } from "@/hooks/player/findyByuser/findyByuser";
import { PlayerLayout } from "./layouts";
import { CreateEditForm } from "./components";
import { useCreateEditPlayerForm } from "@/hooks/player/createEdit/form";
import { useUpload } from "@/hooks/uplods/uploads";
import { useCreateEditPlayer } from "@/hooks/player/createEdit/query";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";


export function LatterPlayerpage() {
  const confirm = useToggle();
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const { isLoading, data , } = UsePLayerFindByuser(); // busca dados player
  

  const editcreat = useCreateEditPlayerForm({ player: data }); // formulario
  const { handleSubmit, setValue } = editcreat;

  const { mutate, isPending } = useCreateEditPlayer(); // cria  e edita
  const uploadfile = useUpload(); // upl

  const handleConfirm = async () => {
    if (uploadfile.file) {
      const patchurl = await uploadfile.onSubmit("PLAYERS");

      setValue("photoUrl", patchurl);

      handleSubmit((dataform) => {
        mutate({ data: dataform, id: data?.id });
      })();
    } else {
      handleSubmit((dataform) => {
        mutate({ data: dataform, id: data?.id });
      })();
    }
  };

  if (isLoading) return <Loading />;

  

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
            editCreat={editcreat}
            uploadfile={uploadfile}
            onConfirm={confirm.open}
          />
        </div>
      </section>

        <ConfirmLayout
        isLoading={isPending}
          mensg="Tem certeza que deseja modificar sua cartinha ?"
          onCancel={confirm.closed}
          onConfirm={()=>{confirm.closed(); handleConfirm()}}
          onOpenChange={confirm.toggle}
          open={confirm.isOpen}
        />
      
    </PlayerLayout>
  );
}
