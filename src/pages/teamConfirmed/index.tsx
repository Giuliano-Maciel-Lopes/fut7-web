import { fetchDataListTeam } from "@/hooks/team/list/list";
import { TeamConfirmedPage } from "@/templates/teamConfirmedPage/teamConfirmedPage";
import {GetTeamReturn} from "@/types/api/TEAM/get";

type Props ={
  data?:GetTeamReturn[]
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
