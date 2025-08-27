export function Campo() {
  return (
    
    <div className="relative w-full md:w-[500px] h-[500px] md:h-[600px] mx-auto rounded-md border-2 border-white">
      {/* Linhas laterais */}
      <div className="absolute inset-0 border-2 border-white rounded-md"></div>

      {/* Linha do meio */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -translate-y-1/2"></div>

      {/* Círculo central */}
      <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full"></div>

      {/* Área do gol - topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-16 border-2 border-white"></div>

      {/* Área do gol - fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-16 border-2 border-white"></div>

      {/* Jogadores */}

      {/* Ataque */}
      <div className="absolute top-16 left-[30%] w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        A
      </div>
      <div className="absolute top-16 right-[30%] w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        A
      </div>

      {/* Meio campo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        M
      </div>

      {/* Volante */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        V
      </div>

      {/* Laterais */}
      <div className="absolute bottom-28 left-12 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        L
      </div>
      <div className="absolute bottom-28 right-12 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        L
      </div>

      {/* Goleiro */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
        G
      </div>
    </div>
  );
}
