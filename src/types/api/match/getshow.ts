import { Match, MatchEvent, } from "@shared/prisma";
import { TeamMini } from "./getList";

// Mini info de player
export type PlayerMini = {
  id: string;
  nameCart: string;
  teamId: string | null;
};

// Cada time com players
export type TeamWithPlayers = TeamMini & {
  players: PlayerMini[];
};

// Eventos com info do player
export type EventMini = Omit<MatchEvent, "player"> & {
  player: PlayerMini | null;
};

// Retorno completo do show match
export type GetShowMatch = Match & {
  team1: TeamWithPlayers;
  team2: TeamWithPlayers;
  events: EventMini[];
};
