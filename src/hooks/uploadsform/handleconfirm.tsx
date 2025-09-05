import type { UseFormReturn, FieldValues, Path } from "react-hook-form";
import type { Uploadinput } from "../uplods/uploads";

// obs photoUrl? ESTA PAdronizado esse campo tanto no team quanto no palyer para mduara  imagem de ambos 

type EntityName = "PLAYERS" | "TEAM";

type Props<TFormValues extends FieldValues > = {
  uploadfile: Uploadinput;
  form: UseFormReturn<TFormValues>;
  mutate: (args: { data: TFormValues; id?: string }) => void;
  id?: string;
  entityName: EntityName;
};

export function useUploadFormConfirm<TFormValues extends FieldValues>({
  uploadfile,
  form,
  mutate,
  id,
  entityName,
}: Props<TFormValues>) {
  const { handleSubmit, setValue } = form;

  const handleConfirm = async () => {

    handleSubmit(async (dataform) => {
       let formData: TFormValues & { photoUrl?: string } = { ...dataform };
      if (uploadfile.file) {
        const patchurl = await uploadfile.onSubmit(entityName);
        
        formData.photoUrl = patchurl
      }
      mutate({ data:formData , id });
    })();
  };

  return { handleConfirm };
}
