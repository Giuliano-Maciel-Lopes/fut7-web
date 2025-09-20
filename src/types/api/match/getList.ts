import { Match } from "@shared/prisma";

export type TeamMini = {
  name: string;
  photoUrl: string | null;
};

export type Matchsingle = Match & {
  team1: TeamMini;
  team2: TeamMini;
};

export type ListMatches = Matchsingle[];