"use client";

import { TInputProps } from "@/types/props.types";
import { Input } from "@/components/ui/input";
import { useController, useFormContext } from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function FormInput({
  type = "text",
  name,
  placeholder,
  inputStyle,
  field,
  fieldState,
}: TInputProps) {
  const { register } = useFormContext();
  // const {field , fieldState} = useController(inputProps)
  const [viewPass, setViewPass] = useState(false);

  return (
    <>
      {type === "password" ? (
        <InputGroup>
          <InputGroupInput
            type={viewPass ? 'text' : 'password'}
            id={name}
            {...register(name)}
            {...field}
            aria-invalid={fieldState.invalid}
            className={inputStyle || ""}
            placeholder={placeholder || `Enter ${name} here ...`}
            autoComplete="current-password"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" onClick={e => setViewPass(!viewPass)}>
              {viewPass ? <EyeOffIcon /> : <EyeIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
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
