import {
  User,
  Settings,
  Database,
} from "lucide-react";

export const boxFunctionalUtils = [
  {
    id: 1,
    icon: User,
    title: "Jogadores",
    description: "Visualize e edite todos os jogadores.",
    url: "/players/filter/participatory",
  }, // ja tem / admin na pag da cartinha
  {
    id: 2,
    icon: Settings,
    title: "team",
    description: "crie times manualmente.",
    url: "/admin/teams",
  },
  {
    id: 3,
    icon: Database,
    title: "partidas",
    description: "criar partidas.",
    url: "/admin/match/create",
  },
];
