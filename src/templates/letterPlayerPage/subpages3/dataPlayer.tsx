import { Button } from "@/components/ui/button";
import { CreatEditLayout } from "../layouts";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";
import { PlayerShows } from "@/types/api/players/get";
import { ImgTeam } from "@/templates/admin/components/ImgTeam/img.team";
import { useInviteCreate } from "@/hooks/invites/create/create";

type Props = {
  data: PlayerShows;
  isCaptain?: boolean;
  teamIdCaptain: string;
};

export function DataPlayer({ data, isCaptain, teamIdCaptain }: Props) {
  const confirmInv = useToggle();
  const { mutateAsync, isPending } = useInviteCreate();

  return (
    <CreatEditLayout msg="Dados do jogador">
      <div className="flex flex-col gap-6 text-black">
        <div className=" text-heading-lg flex flex-col gap-5 text-center overflow-hidden">
          <h3>Time: {data.team?.name}</h3>
          <div className="relative h-60 flex  flex-col items-center justify-center">
            <ImgTeam img={data.team?.photoUrl ?? null} />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-base">
            <span className="text-heading-xs">Posição: </span>
            <span className="text-heading-xs">{data.position}</span>
          </p>

          <p className="text-heading-xs">
            <span className="text-heading-xs">Número: </span>
            <span className="text-gray-700">{data.number}</span>
          </p>
        </div>

        {isCaptain && (
          <div className="mt-4 p-4 border rounded-xl bg-gray-50">
            <h3 className="font-bold text-lg mb-3">
              Convidar {data.nameCart} para sua equipe
            </h3>
            <Button onClick={confirmInv.open} className="w-full">
              Convidar
            </Button>
          </div>
        )}
        <ConfirmLayout
          mensg={`Deseja realmente convidar ${data.nameCart} para seu time?`}
          onCancel={confirmInv.closed}
          onConfirm={async () => {
            await mutateAsync({ receiverId: data.id, teamId: teamIdCaptain });
            confirmInv.closed();
          }}
          onOpenChange={confirmInv.toggle}
          open={confirmInv.isOpen}
          isLoading={isPending}
        />
      </div>
    </CreatEditLayout>
  );
}
