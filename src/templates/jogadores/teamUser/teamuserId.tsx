import { Loading } from "@/components/loading/loading";
import { Campo } from "../../../components/campo/campo"
import { useTeamShowUserId } from "@/hooks/team/showIduserId/showUserId";
import { NotfoundItems } from "@/components/notfound/nutfound";


export function TeamUserPage() {
  const {data , isLoading }= useTeamShowUserId()

  if(isLoading) return <Loading/>
  if(!data) return <NotfoundItems msgNotfound="Você ainda nao possui um time! " />
  return (
    <section className="flex  flex-col container gap-4 pt-10 pb-28">
        <Campo data={data}/>
    </section>
  );
}