import { Team } from "@shared/prisma";

export type PlayerMini = {
  nameCart: string;
  photoUrl: string | null;
  positionIndex: number
  id:string
};
export type CaptainMini = {
  userId: string; // só precisamos do userId
};

export type GetTeamReturn = Team & {
  players: PlayerMini[];
  captain: CaptainMini;
};

export type PlayerPositionIndex = Pick<PlayerMini, "id" | "positionIndex">;