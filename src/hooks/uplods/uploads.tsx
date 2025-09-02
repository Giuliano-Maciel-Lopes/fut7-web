import { useState } from "react";
import { SchemaUploadCategory } from "@/schemazod/uploads/uploads";
import { api } from "@/services/axios";
import { ZodError } from "zod";
import { AxiosError } from "axios";

export function useUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  async function onSubmit(category:string| undefined) {
    setError(undefined);
    try {
      SchemaUploadCategory.parse({
        file: file
          ? {
              filename: file.name,
              mimetype: file.type,
              size: file.size,
            }
          : undefined,
        category,
      });

      const formData = new FormData();
      if (file) formData.append("file", file);
      if(category) formData.append("category", category);
      
      const response = await api.post("/uploads", formData);

      return response.data.pathImg;

    } catch (err) {
      if (err instanceof ZodError) {
        setError(err.issues[0].message);

      } else if (err instanceof AxiosError) {

        setError("Erro ao enviar arquivo: " + err.message);
      } else {
        setError("Erro desconhecido");
      }
      return null;
    }
  }

  return { file, setFile, error, onSubmit };
}
export type Uploadinput = ReturnType<typeof useUpload>;