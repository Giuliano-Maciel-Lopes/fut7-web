import { Match, MatchEvent } from "@shared/prisma";
import { TeamMini } from "./getList";

export type PlayerMini = {
  nameCart: string;
};

export type EventMini = Omit<MatchEvent, "player"> & {
  player: PlayerMini | null;
};

export type GetShowMatch = Match & {
  team1: TeamMini;
  team2: TeamMini;
  events: EventMini[];
};
