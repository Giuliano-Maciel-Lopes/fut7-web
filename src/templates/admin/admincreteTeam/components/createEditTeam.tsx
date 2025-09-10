import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreatEditLayout } from "@/templates/letterPlayerPage";

export function CreatEditFormTeam() {
  return (
    <CreatEditLayout msg="Area de Times">
      <form>
        <Input />
        <Input />
        <Input  className="h-48 text-center "
          type="file"
          legend="Imagem" />
        <Button />
      </form>
    </CreatEditLayout>
  );
}
