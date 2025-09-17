import { Loading } from "@/components/loading/loading";
import { useTeamShowUserId } from "@/hooks/team/showIduserId/showUserId";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { CampoEditable } from "@/components/campo/campoEditable/campoeditable";
import { useTeamUpdateIndex } from "@/hooks/team/updatepositionIndex/updatepositionIndex";
import { PlayerPositionIndex } from "@/types/api/TEAM/get";




export function TeamTrainingPage() {
  const {data , isLoading }= useTeamShowUserId()
  const {mutate , isPending} = useTeamUpdateIndex()



  if(isLoading) return <Loading/>
  if(!data) return <NotfoundItems msgNotfound="Você ainda nao possui um time! " />

     const handleSave = (PlayerIndexNew: {players:PlayerPositionIndex[]}) => {
    mutate({ data:PlayerIndexNew ,  id: data.id });
  };

  return (
    <section className="flex  flex-col container gap-4 pt-10 pb-28">
        <CampoEditable onSave={handleSave} data={data}/>
    </section>
  );
}