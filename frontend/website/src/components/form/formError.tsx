import { TErrorProps } from "@/types/props.types";
import { FieldError } from "../ui/field";
import { useFormContext } from "react-hook-form";

export default function FormError({
  name,
  errorStyle,
  fieldState,
}: TErrorProps) {
  const { formState } = useFormContext();

  const message : string = formState.errors?.[name]?.message as string;

  return (
    <div className="w-full h-5 min-h-fit ">
      {fieldState.invalid && (
        <FieldError
          errors={[fieldState.error]}
          className={` ${errorStyle || ""} errSpan`}
        >
          {message}
        </FieldError>
      )}
    </div>
  );
}
