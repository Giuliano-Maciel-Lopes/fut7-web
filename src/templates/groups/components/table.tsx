import { GrouplistScore } from "@/types/api/groups/getListgroups";

type TableProps = {
  group: GrouplistScore[0]; // um único grupo
};

export function Table({ group }: TableProps) {
  // Só  numbers
  const staticTeam = [
    { abbrev: "pts", key: "points" },
    { abbrev: "vit", key: "win" },
    { abbrev: "emp", key: "drawn" },
    { abbrev: "der", key: "lost" },
    { abbrev: "gp", key: "goalsFor" },
    { abbrev: "gc", key: "goalsAgainst" },
    { abbrev: "sg", key: "goalDifference" },
  ] as const; 

  if (!group) return null;

  return (
    <div className="border p-2 rounded-sm">
      <div className="overflow-x-auto scroll-smooth">
        <div className="grid grid-cols-[2fr_repeat(7,1fr)] min-w-max border border-blue-500 rounded-sm">
          {/* Cabeçalho */}
          <div className="p-2 font-bold border">Team</div>
          {staticTeam.map((s) => (
            <div key={s.key} className="p-2 font-bold text-center border">
              {s.abbrev}
            </div>
          ))}

          {group.groupscore.map((team) => (
            <div key={team.teamId} className="contents">
              <div className="p-2 border">{team.team.name}</div>

              {staticTeam.map((s) => (
                <div key={s.key} className="p-2 text-center border">
                  {team[s.key] ?? 0} 
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
