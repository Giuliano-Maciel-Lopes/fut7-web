import { useState } from "react";
import { uselistGroups } from "@/hooks/group/list/list";
import { StepCarouselText } from "@/components/stepcarrrosel/setcarroseltext";
import { Table } from "./components/table";
import { GrouplistScore } from "@/types/api/groups/getListgroups";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { CopyIdButton } from "@/components/copieIdButton/copieIdButton";

export type PropsGroupPage = {
  dataSsr: GrouplistScore;
  isAdm: boolean;
};

export function GroupsPage({ dataSsr, isAdm }: PropsGroupPage) {
  const { data: dataquery, isFetching } = uselistGroups();
  const data = isAdm ? dataquery : dataSsr;

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselNames = data ? data.map((g) => g.name) : [];

  if (!data || data.length === 0)
    return <NotfoundItems msgNotfound="Ainda não tem grupos disponíveis" />;

  return (
    <section className="container flex flex-col gap-6 my-10">
      {isAdm && (
        <div>
          <CopyIdButton id={data[currentIndex].id} />
        </div>
      )}

      <StepCarouselText
        text={carouselNames}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Table group={data[currentIndex]} />
      
    </section>
  );
}
