"use client";

import { TInputProps } from "@/types/props.types";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import FormInputPassword from "./inputs/formInputPassword";

export default function FormInput({
  type = "text",
  name,
  placeholder,
  inputStyle,
  field,
  fieldState,
}: TInputProps) {
  const { register } = useFormContext();
  const [viewPass, setViewPass] = useState(false);

  return (
    <>
      {type === "password" ? (
        <FormInputPassword
          name={name}
          field={field}
          fieldState={fieldState}
          inputStyle={inputStyle}
          placeholder={placeholder || `Enter ${name} here ...`}
        />
      ) : (
        <Input
          type={type}
          id={name}
          {...register(name)}
          {...field}
          aria-invalid={fieldState.invalid}
          className={inputStyle || ""}
          placeholder={placeholder || `Enter ${name} here ...`}
          autoComplete="off"
        />
      )}
    </>
  );
}
