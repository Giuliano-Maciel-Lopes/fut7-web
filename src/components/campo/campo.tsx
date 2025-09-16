import { PlayerLetter } from "@/components/LetterPlayer";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { useRouter } from "next/router";
import { ContainerCampo } from "./container";
import { playerPositions } from "./positionfixed";

type Props = {
  data: GetTeamReturn;
};

export function Campo({ data }: Props) {
  const router = useRouter();
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;

  // slots fixos para cada posição (mesmo se não houver jogador) ;// titulares
  const titulares = Array.from({ length: 7 }, (_, index) => {
    const player = data.players.find((p) => p.positionIndex === index);
    return player || null;
  });

  // Reservas (positionIndex >= 7)
  const reservas = data.players.filter((p) => p.positionIndex >= 7);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <ContainerCampo>
        {titulares.map((player, index) => (
          <div
            key={index}
            className={`${playerPositions[index]} cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`}
          >
            <PlayerLetter.container
              onclick={() => {
                if (router.pathname === "/teamConfirmed" && player?.id) {
                  router.push(`/players/${player.id}`);
                }
              }}
              size="sm"
              className={`absolute  flex items-center justify-center`}
            >
              <PlayerLetter.image
                size="lg"
                img={
                  player?.photoUrl
                    ? `${BaseURL}/${player?.photoUrl}`
                    : undefined
                }
              />
              <div className="text-sm mb-2 text-center overflow-hidden w-14 ">
                {player?.nameCart}
              </div>
            </PlayerLetter.container>
          </div>
        ))}
      </ContainerCampo>

      {/* Reservas */}
      <div className="md:w-1/2 p-3 flex flex-col h-60 border-4 from-purple-400 via-pink-500 to-purple-600">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
          <h3 className="text-heading-lg">Reservas</h3>
          {reservas.map((player) => (
            <div
              key={player.nameCart}
              className="cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`"
            >
              {" "}
              <PlayerLetter.container
                onclick={() => {
                  if (router.pathname === "/teamConfirmed" && player?.id) {
                    router.push(`/players/${player.id}`);
                  }
                }}
                size="md2"
              >
                {player.nameCart}
              </PlayerLetter.container>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
