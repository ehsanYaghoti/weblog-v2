import { TFieldProps } from "@/types/props.types";
import { Field } from "../ui/field";
import FormError from "./formError";
import FormInput from "./formInput";
import FormLabel from "./formLabel";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";


export default function FormField({
  name,
  label = `${name.toLowerCase()}`,
  type,
}: TFieldProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({field , fieldState}) => (
        <Field data-invalid={fieldState.invalid}>
          <FormLabel text={label} name={name} />
          <FormInput name={name} field={field} type={type} fieldState={fieldState} />
          <FormError name={name} fieldState={fieldState} />
        </Field>
      )}
    />
  );
}
