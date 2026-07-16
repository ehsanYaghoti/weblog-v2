"use client";

import { registerFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import useRegister from "@/hooks/useRegister";

export default function RegisterForm() {
  const { form, onSubmit } = useRegister();

  return (
    <FormTemplate
      form={form}
      onSubmitHandler={onSubmit}
      fields={registerFieldsData.fields}
      page={registerFieldsData.page}
      title={registerFieldsData.title}
      btnTitle={registerFieldsData.btnTitle}
    />
  );
}
