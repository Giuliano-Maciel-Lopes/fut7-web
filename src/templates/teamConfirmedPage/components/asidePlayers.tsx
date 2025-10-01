import { Button } from "@/components/ui/button";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { ConfirmLayout } from "@/components/confirmLogout";
import { useToggle } from "@/hooks/usetoggle";
import { useUpdateTeamIdMe } from "@/hooks/player/updateTeamId/updateteamId";
import { useUpdateTeamId } from "@/hooks/team/updateTeamIDplayers/updateTeamIDplayers";

type Props = {
  data: GetTeamReturn;
  isCaptain: boolean;
};

export function AsidePlayersTeam({ data, isCaptain }: Props) {
  const confirmDeleteMe = useToggle(); // jogador sai da equipe
  const confirmDeletePlayer = useToggle(); // capitão remove jogador
  const [playerToDelete, setPlayerToDelete] = useState<string | null>(null);

  const { mutateAsync: mutateMe, isPending: isPendingMe } = useUpdateTeamIdMe();
  const { mutateAsync: mutatePlayer, isPending: isPendingPlayer } =
    useUpdateTeamId();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Detalhes</Button>
        </DialogTrigger>

        <DialogContent
          className="flex flex-col bg-aside rounded-md border-4 border-blue-500 p-6
                     w-full max-w-2xl max-h-[80vh] sm:w-[90vw] sm:h-[90vh]
                     overflow-x-auto overflow-y-auto"
        >
          <DialogTitle className="text-heading-xl text-center font-bold mb-4">
            Jogadores do {data.name}
          </DialogTitle>

          {/* Botão para sair da equipe */}
          <Button
            onClick={confirmDeleteMe.open}
            variant="red"
            className="mb-4 max-w-max"
          >
            Sair da equipe
          </Button>

          {/* Lista de jogadores */}
          <div className="flex flex-col gap-2 min-w-[280px]">
            {data.players.map((p) => (
              <div
                key={p.id}
                className="flex justify-between items-center border-b border-gray-400 py-2 min-w-[280px]"
              >
                <p>{p.nameCart}</p>
                {isCaptain && (
                  <Button
                    variant="red"
                    size="sm"
                    className="w-auto"
                    onClick={() => {
                      setPlayerToDelete(p.id);
                      confirmDeletePlayer.open();
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirm para sair da equipe */}
      <ConfirmLayout
        mensg="Tem certeza que deseja sair da equipe?"
        onCancel={confirmDeleteMe.closed}
        onConfirm={async () => {
          await mutateMe();
          confirmDeleteMe.closed();
        }}
        onOpenChange={confirmDeleteMe.toggle}
        open={confirmDeleteMe.isOpen}
        isLoading={isPendingMe}
      />

      {/* Confirm para capitão deletar jogador */}
      <ConfirmLayout
        mensg="Tem certeza que deseja remover este jogador da equipe?"
        onCancel={confirmDeletePlayer.closed}
        onConfirm={async () => {
          if (!playerToDelete) {
            return;
          }
          await mutatePlayer(playerToDelete);
          confirmDeletePlayer.closed()
        }}
        onOpenChange={confirmDeletePlayer.toggle}
        open={confirmDeletePlayer.isOpen}
        isLoading={isPendingPlayer}
      />
    </>
  );
}
