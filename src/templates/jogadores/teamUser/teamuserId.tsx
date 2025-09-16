import { Loading } from "@/components/loading/loading";
import { useTeamShowUserId } from "@/hooks/team/showIduserId/showUserId";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { CampoEditable } from "@/components/campo/campoeditable";


export function TeamUserPage() {
  const {data , isLoading }= useTeamShowUserId()

  if(isLoading) return <Loading/>
  if(!data) return <NotfoundItems msgNotfound="Você ainda nao possui um time! " />
  return (
    <section className="flex  flex-col container gap-4 pt-10 pb-28">
        <CampoEditable data={data}/>
    </section>
  );
}