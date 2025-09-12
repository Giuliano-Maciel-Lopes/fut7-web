import { fetchDataListTeam } from "@/hooks/team/list/list";
import { TeamConfirmedPage } from "@/templates/teamConfirmedPage/teamConfirmedPage";
import { ListTeamReturn } from "@/types/api/TEAM/list";

type Props ={
  initialTeam?:ListTeamReturn[]
}

export default function TeamConfirmed({initialTeam}:Props) {
  return (
    <div>
      <TeamConfirmedPage initialData={initialTeam}  />
    </div>
  );
}
export async function getServerSideProps() {
 const initialTeam =   await fetchDataListTeam()
 
  return { props: {initialTeam } }
}
