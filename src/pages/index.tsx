//essa rota nao vai ter nehuma requisiçaoa a api e por padrao next vai ser ssg 
import { LandingPage } from "@/templates/landingPage/landingPage";
import { UseAuth } from "@/hooks/context/useAuth";
import { AdminDashoborads } from "./admin";

export default function Home() {
 const {session} =   UseAuth()
const role = session?.datauser.role
   if (!session?.token) {
    return <LandingPage />; 
  } else if(role === "ADMIN"){
      return <AdminDashoborads />; 
  }else{
     return <LandingPage />;
  }

}
