import type { UseFormReturn, FieldValues, Path } from "react-hook-form";
import type { Uploadinput } from "../uplods/uploads";

type EntityName = "PLAYERS" | "TEAM";

type Props<TFormValues extends FieldValues> = {
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
    if (uploadfile.file) {
      const patchurl = await uploadfile.onSubmit(entityName);
      
      setValue("photoUrl" as Path<TFormValues>, patchurl); 

      handleSubmit((dataform) => {
        mutate({ data: dataform, id });
      })();
    } else {
      handleSubmit((dataform) => {
        mutate({ data: dataform, id });
      })();
    }
  };

  return { handleConfirm };
}
