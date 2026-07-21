"use client";

import { TInputProps } from "@/types/props.types";
import { useFormContext } from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function FormInputPassword({
  name,
  placeholder,
  inputStyle,
  field,
  fieldState,
}: TInputProps) {
  const { register } = useFormContext();
  const [viewPass, setViewPass] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        type={viewPass ? "text" : "password"}
        id={name}
        {...register(name)}
        {...field}
        aria-invalid={fieldState.invalid}
        className={inputStyle || ""}
        placeholder={placeholder || `Enter ${name} here ...`}
        autoComplete="current-password"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          onClick={(e) => setViewPass(!viewPass)}
        >
          {viewPass ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
