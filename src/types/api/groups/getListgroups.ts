import { Group, GroupScore } from "@shared/prisma";


export type GroupSingleScore = Group & {
  groupscore: GroupScore & {
    team: {
      name: string;
    };
  };
};


export type GroupWithScores = Group & {
  groupscore: (GroupScore & {
    team: {
      name: string;
    };
  })[];
};


export type GrouplistScore  = GroupWithScores[];
