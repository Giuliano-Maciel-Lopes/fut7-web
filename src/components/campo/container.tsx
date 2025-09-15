type Props = {
  children: React.ReactNode;
};

export function ContainerCampo({ children }: Props) {
  return (
    <div className="w-full md:w-1/2 h-[500px] md:h-[600px] rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 p-2">
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

       
        {children}
      </div>
    </div>
  );
}
