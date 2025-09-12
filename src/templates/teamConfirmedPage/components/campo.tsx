import { PlayerLetter } from "@/components/LetterPlayer";

export function Campo({ data }: { data: { players: any[] } }) {
  // posições fixas no campo (mesmo layout do seu exemplo)
  const playerPositions = [
    "absolute bottom-4 left-20 lg:left-1/2 lg:-translate-x-1/2",                  // goleiro
    "absolute bottom-16 left-4 ",                  // Lateral esquerda
    "absolute bottom-16 right-4 ",                  //  lateral direita
    "absolute top-[50%] left-1/2 -translate-x-1/2 ",  // 1 volnte             // V
    "absolute top-20 left-12 ",                 // Lateral esquerda
    "absolute top-20 right-12 ",                // Lateral direita
    "absolute top-4 left-1/2 -translate-x-1/2 ", // Goleiro
  ];

  // slots fixos para cada posição (mesmo se não houver jogador)
   const titulares = Array.from({ length: 7 }, (_, index) => {
    const player = data.players.find(p => p.positionIndex === index);
    return player || null;
  });

  // Reservas (positionIndex >= 7)
  const reservas = data.players.filter(p => p.positionIndex >= 7);

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

          {/* Renderiza jogadores dinamicamente */}
          {titulares.map((player, index) => (
             <div key={index} className={playerPositions[index]}>
            <PlayerLetter.container
              key={player?.nameCart || index}
              size="sm"
              className={`absolute ${playerPositions[index]} flex items-center justify-center`}
            >
              {player?.nameCart || ""}
            </PlayerLetter.container>
           </div>
          ))}
        </div>
      </div>

      {/* Reservas */}
      <div className="md:w-1/2 p-3 flex flex-col h-60 border-4 from-purple-400 via-pink-500 to-purple-600">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
          {reservas.map((player) => (
              <div
                key={player.nameCart}
                className=""
              > <PlayerLetter.container  size="md2">
                 {player.nameCart}
              </PlayerLetter.container>

              
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
