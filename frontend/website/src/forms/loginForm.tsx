"use client";

import { loginFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import useLogin from "@/hooks/useLogin";

export default function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <FormTemplate
      form={form}
      onSubmitHandler={onSubmit}
      {...loginFieldsData}
    />
  );
}
