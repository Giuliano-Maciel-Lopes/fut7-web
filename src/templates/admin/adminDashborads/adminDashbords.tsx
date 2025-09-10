import { BoxFunctional } from "./components/boxFunctional";
import { boxFunctionalUtils } from "./utlils";
import { useRouter } from "next/router";

export function AdminDashoboardsPage() {
  const router = useRouter()
  return (
    <div className=" container ">

      

      <section className="flex flex-wrap gap-2 relative mt-4 md:mt-6">
        {boxFunctionalUtils.map((box) => (
          <BoxFunctional
          onclick={()=>router.push(box.url)}
            key={box.id}
            description={box.description}
            icon={<box.icon />}
            title={box.title}
          />
        ))}
      </section>
    </div>
  );
}
