import { TFieldProps } from "@/types/props.types";
import { Field } from "../ui/field";
import FormError from "./formError";
import FormInput from "./formInput";
import FormLabel from "./formLabel";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import FormInputOtp from "./formInputOtp";
import { Checkbox } from "@/components/ui/checkbox";

export default function FormField({
  name,
  label = `${name.toLowerCase()}`,
  type,
  page,
}: TFieldProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        type === "checkbox" ?
        <Field orientation="horizontal" data-invalid={fieldState.invalid}>
          <Checkbox  id={name} checked={field.value} onCheckedChange={field.onChange} aria-invalid={fieldState.invalid} />
          <FormLabel page={page} text={label} name={name} />
          {/* <FormError name={name} fieldState={fieldState} /> */}
        </Field>
        :
        <Field data-invalid={fieldState.invalid}>
          <FormLabel page={page} text={label} name={name}  />
          {page === "email-verification" ? (
            <FormInputOtp
              length={6}
              name={name}
              field={field}
              type={type}
              fieldState={fieldState}
            />
          ) : (
            <FormInput
              name={name}
              field={field}
              type={type}
              fieldState={fieldState}
            />
          )}
          <FormError name={name} fieldState={fieldState} />
        </Field>
      )}
    />
  );
}
