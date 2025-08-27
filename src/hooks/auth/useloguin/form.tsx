import { useForm } from "react-hook-form";
import {
  CreateSessionInput,
  createSessionSchema,
} from "@/schemazod/session/creat";
import { zodResolver } from "@hookform/resolvers/zod";

export function useLoguinForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,

  } = useForm<CreateSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });
  return {register , errors , handleSubmit};
}
