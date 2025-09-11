import { PlayerLetter } from "@/components/LetterPlayer";


export function Campo() {
  return (
    <div className=" flex flex-col md:flex-row gap-8 mt-4">
    <div
      className="w-full md:w-1/2 h-[500px] md:h-[600px]  rounded-md
                    bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 p-2"
    >
      {/* Campo interno com borda branca */}
      <div
        className="relative w-full h-full rounded-md border-2 border-white bg-cover bg-center "
        style={{ backgroundImage: `url('/assets/fundo1.jpg')` }}
      >
        {/* Linha do meio */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -translate-y-1/2"></div>

        {/* Círculo central */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full"></div>

        {/* Área do gol - topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-16 border-2 border-white"></div>

        {/* Área do gol - fundo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-16 border-2 border-white"></div>

        {/* Jogadores */}
        <PlayerLetter.container size="sm" className="absolute top-16 left-[30%]  bg-red-500 flex items-center justify-center text-white font-bold">
         a
        </PlayerLetter.container>
        <div className="absolute top-16 right-[30%] w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          M
        </div>
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          V
        </div>
        <div className="absolute bottom-28 left-12 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          L
        </div>
        <div className="absolute bottom-28 right-12 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          L
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          G
        </div>
      </div>
    </div> 
    <div className=" md:w-1/2 p-3 flex flex-col h-60 border-4  from-purple-400 via-pink-500 to-purple-600  ">

    <div className="grid md:grid-cols-2 grid-cols-1">
      

    </div>
// reservas aqui ai c eixa que aqui n precisa de posiion 
    
    </div>
    </div>
  );
}
