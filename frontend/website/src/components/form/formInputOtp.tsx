"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { useState } from "react";
import { TInputProps, TOtpInputProps } from "@/types/props.types";
import { useFormContext } from "react-hook-form";

export default function FormInputOtp({
  length,
  name,
  field,
  fieldState,
}: TOtpInputProps) {

  return (
    <InputOTP
      maxLength={length}
      pattern={REGEXP_ONLY_DIGITS}

      {...field}
    >
      {Array.from({ length }).map((_, index) => (
          <InputOTPGroup key={index} data-active className="self-center justify-self-center mx-auto gap-0">
            <InputOTPSlot  index={index} aria-invalid={fieldState.invalid} />
          </InputOTPGroup>
      ))}
    </InputOTP>
  );
}
