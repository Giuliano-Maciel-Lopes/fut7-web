import { StepTeam } from "./components/stepTeam";
import { Campo } from "./components/campo";
import { uselistTeam } from "@/hooks/team/list/list";
import { Loading } from "@/components/loading/loading";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

type Props = {};

export function TeamConfirmedPage() {
  const [index, setIndex] = useState(0);
  const { data, isLoading } = uselistTeam();

  if (isLoading) return <Loading />;
  if (!data || data.length === 0)
    return (
      <NotfoundItems msgNotfound="nenhum time encontrado no momento volte novamente mais tarde" />
    );
  const nameTeam = data.map((t) => t.name);

  return (
    <section className="flex  flex-col container gap-4 pt-10 pb-28">
      <div className="mt-10">
        <StepTeam
          nameTeam={nameTeam}
          setCurrentIndex={setIndex}
          currentIndex={index}
        />
      </div>

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
      <Campo data={data[index]} />
    </motion.div>
  </AnimatePresence>
</div>
    </section>
  );
}
