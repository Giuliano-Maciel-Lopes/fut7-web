import { useForm } from "react-hook-form";
import { MatchBodySchema,  } from "@/schemazod/match/create";
import { zodResolver } from "@hookform/resolvers/zod";

export function useCreateMatchForm() {
  const form = useForm({
    resolver: zodResolver(MatchBodySchema),
  });

  return form;
}

export type UseCreateMatchReturn = ReturnType<typeof useCreateMatchForm>;
