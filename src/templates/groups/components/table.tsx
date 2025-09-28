import { GrouplistScore } from "@/types/api/groups/getListgroups";

type TableProps = {
  group: GrouplistScore[0]; // um único grupo
};

export function Table({ group }: TableProps) {
  const staticTeam = [
    { abbrev: "pts", key: "points" },
    { abbrev: "vit", key: "win" },
    { abbrev: "emp", key: "drawn" },
    { abbrev: "der", key: "lost" },
    { abbrev: "gp", key: "goalsFor" },
    { abbrev: "gc", key: "goalsAgainst" },
    { abbrev: "sg", key: "goalDifference" },
  ];

  if (!group) return null;

  return (
    <div className="flex flex-col gap-8 border p-2 rounded-sm">
      <div className="flex flex-col border border-blue-500 rounded-sm">
        <div className="flex">
          <div className="w-[40%] border-2 p-2 font-bold ">Team</div>
          <div className="overflow-x-auto scroll-smooth border-2 w-full hide-scrollbar">
            <div className="flex min-w-max">
              {staticTeam.map((s) => (
                <div
                  key={s.key}
                  className="border-2 p-3 min-w-[60px] text-center flex-shrink-0 font-bold "
                >
                  {s.abbrev}
                </div>
              ))}
            </div>
          </div>
        </div>

        {group.groupscore.map((team) => (
          <div key={team.teamId} className="flex">
            <div className="w-[40%] border-2 p-2">{team.team.name}</div>
            <div className="overflow-x-auto border-2 w-full hide-scrollbar">
              <div className="flex min-w-max">
                {staticTeam.map((s) => (
                  <div
                    key={s.key}
                    className="border-2 p-3 min-w-[60px] text-center flex-shrink-0"
                  >
                    {/* aqui mostra os valores reais do time */}
                    {team[s.key as keyof typeof team] ?? 0}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
