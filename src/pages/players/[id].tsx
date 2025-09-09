import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { fetchDataShowPlayerId } from "@/hooks/player/showId/showId";
import { Player } from "@shared/prisma";
//ssr
type Props ={
  data:Player
}

export default function PlayersId( {data}:Props ) {
  return (
    <div>
      <LatterPlayerpage data={data}>teste</LatterPlayerpage>
    </div>
  );
}
export async function getServerSideProps(context: { params: { id: string } }) {
  const {id} = context.params;
  const data  =  await fetchDataShowPlayerId(id);

  return {
    props: {data} 
  };
}
