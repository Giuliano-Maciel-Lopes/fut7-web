import { Invite } from "@shared/prisma";

// Tipagem mínima de user dentro do player + nome do player
type PlayerWithUser = {
  id: string;
  nameCart: string;          // nome do jogador
  user: { id: string };      // id do usuário
};

export type InviteWithTeamAndUsers = Invite & {
  team: { name: string };
  sender: PlayerWithUser;
  receiver: PlayerWithUser;
};

// Array de convites
export type InvitesList = InviteWithTeamAndUsers[];
export type InviteSingle = InviteWithTeamAndUsers;
