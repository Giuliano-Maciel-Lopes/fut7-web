import { StepCarrrosel } from "../../components/stepcarrrosel/setcarrosel";
import { Campo } from "../../components/campo/campo";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

type Props = {
  data?: GetTeamReturn | GetTeamReturn[];
  isCaptain?: boolean;
};

export function TeamConfirmedPage({ data, isCaptain }: Props) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const team = data ? (Array.isArray(data) ? data : [data]) : [];
  if (team.length === 0)
    return (
      <NotfoundItems msgNotfound="nenhum time encontrado no momento volte novamente mais tarde" />
    );
  const nameTeam = team.map((t) => t.name);

  return (
    <section className="flex flex-col container gap-4 pt-10 pb-28">
      {isCaptain && (
        <div className=" flex gap-4">
          <Button onClick={() => router.push("/player/team/training")}>
            Editar Formaçao
          </Button>
          <Button onClick={() => router.push(`/player/team/${team[0].id}`)}>
            Editar Time
          </Button>
        </div>
      )}{" "}
      <div>
        {team.length > 1 && (
          <div className="mt-10">
            <StepCarrrosel
              name={nameTeam}
              setCurrentIndex={setIndex}
              currentIndex={index}
            />
          </div>
        )}

        <div className="relative w-full md:w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Campo data={team[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
