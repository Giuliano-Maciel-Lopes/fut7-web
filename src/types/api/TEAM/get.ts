import { Team } from "@shared/prisma";

export type PlayerMini = {
  nameCart: string;
  photoUrl: string | null;
  positionIndex: number
  id:string
};

export type GetTeamReturn = Team & {
  players: PlayerMini[];
};
