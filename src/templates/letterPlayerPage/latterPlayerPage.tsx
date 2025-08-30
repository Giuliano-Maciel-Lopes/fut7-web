import { LetterPlayer } from "@/components/LetterPlayer";

export function LatterPlayerpage() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
     
      <div
        className="hidden md:flex absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/fundofutebol.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

      </div>

      {/* Card sempre visível */}
      <div className="relative z-10">
        <LetterPlayer size="lg" assistencia="10" gols="10" nome="Giuliano" LogoTeam={"/logo.png"} img={"/assets/giu.jpg"} />
      </div>
    </div>
  );
}
