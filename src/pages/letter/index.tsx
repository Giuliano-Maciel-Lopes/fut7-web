import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { ProtectedComponent } from "@/utils/ProtectedComponent";
// essa pagina vai ser scs pois o usuario vai poder ver susa cartinha e mudar com usequery 

export default function Leterr() {
  return (
    <ProtectedComponent>
      <LatterPlayerpage/>
    </ProtectedComponent>
  );
}