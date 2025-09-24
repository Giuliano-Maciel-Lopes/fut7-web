import { useShowMatch } from "@/hooks/match/showId/showId";
import { useRouter } from "next/router";


export function AdminCreateMatchevent() {
    const  router = useRouter()
    const id = router.query.id as string
    
    const {data , isLoading } = useShowMatch(id)

   
  return (
    <div>
      
    </div>
  );
}