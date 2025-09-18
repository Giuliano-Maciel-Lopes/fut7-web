import { Invite } from "@shared/prisma";

// Tipagem mínima de user dentro do player
type PlayerWithUserId = {
  user: { id: string };
};


export type InviteWithTeamAndUsers = Invite & {
  team: { name: string };
  sender: PlayerWithUserId;
  receiver: PlayerWithUserId;
};

// Array de convites
export type InvitesList = InviteWithTeamAndUsers[];
export type InviteSingle = InviteWithTeamAndUsers;
