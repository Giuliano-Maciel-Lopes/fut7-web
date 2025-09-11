import { Team } from "@shared/prisma";

export type PlayerMini = {
  nameCart: string;
  photoUrl: string | null;
};

export type ListTeamReturn = Team & {
  players: PlayerMini[];
};
