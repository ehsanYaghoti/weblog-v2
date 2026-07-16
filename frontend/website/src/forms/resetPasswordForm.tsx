"use client";

import { resetPassFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import userResetPass from "@/hooks/useResetPass";

export default function ResetPasswordForm() {
  const { form, onSubmit } = userResetPass();

  return (
    <FormTemplate
      form={form}
      onSubmitHandler={onSubmit}
      fields={resetPassFieldsData.fields}
      page={resetPassFieldsData.page}
      title={resetPassFieldsData.title}
      btnTitle={resetPassFieldsData.btnTitle}
    />
  );
}
