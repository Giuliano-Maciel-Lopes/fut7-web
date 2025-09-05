//essa rota nao vai ter nehuma requisiçaoa a api e por padrao next vai ser ssg 
import { LandingPage } from "@/templates/landingPage/landingPage";
import { UseAuth } from "@/hooks/context/useAuth";
import { Dashoboards } from "./admin";
import { PlayersDashBorads } from "./players";

export default function Home() {
 const {session} =   UseAuth()
const role = session?.datauser.role
   if (!session?.datauser.role) {
    return <LandingPage />; 

  } else if(role === "ADMIN"){
      return <Dashoboards />; // pag do admin 
      
  }else if(role === "JOGADOR"){
     return <PlayersDashBorads />;
  }

}
