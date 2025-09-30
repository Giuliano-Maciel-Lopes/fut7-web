import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";
import { QueryClient } from "@tanstack/react-query";

export default function PlayerSearchFilter({ isAdm }) {
  return (
    <div>
      <ListPlayerPage dataSsr={[]} isAdm={isAdm} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);
  const isAdm = user?.role === "ADMIN";

  return {
    props: {
      isAdm,
      dataSsr: [], // Array vazio para search
    },
  };
}