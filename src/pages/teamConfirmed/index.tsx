import { fetchDataListTeam } from "@/hooks/team/list/list";
import { TeamConfirmedPage } from "@/templates/teamConfirmedPage/teamConfirmedPage";
import { ListTeamReturn } from "@/types/api/TEAM/list";

type Props ={
  data?:ListTeamReturn[]
}

export default function TeamConfirmed({data}:Props) {
  return (
    <div>
      <TeamConfirmedPage data={data}  />
    </div>
  );
}
export async function getServerSideProps() {
 const data =   await fetchDataListTeam()
 
  return { props: {data } }
}
