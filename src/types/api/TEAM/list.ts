import { Team } from "@shared/prisma";

export type PlayerMini = {
  nameCart: string;
  photoUrl: string | null;
  positionIndex: number
};

export type ListTeamReturn = Team & {
  players: PlayerMini[];
};
