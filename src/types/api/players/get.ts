import { Player } from "@shared/prisma";

export type PlayerTeamInfo = {
  name: string;               // nome do time
  photoUrl?: string | null;   // logo do time (opcional)
  captain?: {                 // player que é capitão
    id: string;
    userId: string;           // para verificar se o logado é capitão
    nameCart: string;         // nome do jogador (cartinha)
  } | null;
};

// Tipo final para uso no frontend
export type PlayerShows = Player & {
  team?: PlayerTeamInfo | null;
};
