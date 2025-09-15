import { PlayerLetter } from "@/components/LetterPlayer";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { useRouter } from "next/router";
type Props = {
  data: GetTeamReturn;
};

export function Campo({ data }: Props) {
  const router = useRouter();
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  // posições fixas no campo
  const playerPositions = [
    "absolute bottom-4 left-1/2 -translate-x-1/2",       // goleiro
  "absolute bottom-16 left-[10%]",                    // lateral esquerda
  "absolute bottom-16 right-[10%]",                   // lateral direita
  "absolute top-[50%] left-1/2 -translate-x-1/2",     // volante
  "absolute top-[25%] left-[20%]",                    // meia esquerda
  "absolute top-[25%] right-[20%]",                   // meia direita
  "absolute top-4 left-1/2 -translate-x-1/2",         // atacante
  ];

  // slots fixos para cada posição (mesmo se não houver jogador)
  const titulares = Array.from({ length: 7 }, (_, index) => {
    const player = data.players.find((p) => p.positionIndex === index);
    return player || null;
  });

  // Reservas (positionIndex >= 7)
  const reservas = data.players.filter((p) => p.positionIndex >= 7);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Campo */}
      <div className="w-full bot md:w-1/2 h-[500px] md:h-[600px] rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 p-2">
        <div
          className="relative w-full h-full rounded-md border-2 border-white bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/fundo1.jpg')` }}
        >
          {/* Linha do meio */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -translate-y-1/2"></div>

          {/* Círculo central */}
          <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full"></div>

          {/* Área do gol */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-16 border-2 border-white"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-16 border-2 border-white"></div>

          {/* Renderiza jogadores */}
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
                className={`absolute ${playerPositions[index]} flex items-center justify-center`}
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
        </div>
      </div>

      {/* Reservas */}
      <div className="md:w-1/2 p-3 flex flex-col h-60 border-4 from-purple-400 via-pink-500 to-purple-600">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
          <h3 className="text-heading-lg">Reservas</h3>
          {reservas.map((player) => (
            <div key={player.nameCart} className="cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`">
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
