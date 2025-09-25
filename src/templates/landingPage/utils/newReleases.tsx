import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { Trophy, Star, Flag } from "lucide-react";

import trofeu from "../../../../public/assets/trofeu.png";
import cartinha from "../../../../public/assets/cartinahs.png";
import campo from "../../../../public/assets/campo.png";

type NewRelease = {
  id: number;
  img: StaticImageData;
  icone: ReactNode;   // ReactNode aceita JSX
  description: string;
};

export const newReleases: NewRelease[] = [
  {
    id: 1,
    img: cartinha,
    icone: <Star className="w-6 h-6 text-green-400" />,
    description:
      "Nesse campeonato, cada jogador tem uma cartinha que mostra seus gols e assistências. Quanto mais gols, mais a cor da cartinha muda.",
  },
{
  id: 2,
  img: trofeu,
  icone: <Trophy className="w-6 h-6 text-amber-500" />,
  description:
    "O majestoso troféu do grande campeão! Um símbolo de glória e excelência, alem do ranking para  os maiores artilheiros, assistentes e os 50 melhores atletas do campeonato com premiaçoes. ",
},
  {
    id: 3,
    img: campo,
    icone: <Flag className="w-6 h-6 text-green-500" />,
    description:
      "Cada time terá seu capitão, que poderá recrutar membros, definir formações e ficará em destaque na aba de times.",
  },
];
