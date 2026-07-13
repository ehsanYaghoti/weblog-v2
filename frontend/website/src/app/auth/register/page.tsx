import FormTemplate from "@/components/form/form";
import { registerFieldsData } from "@/constants/forms";

export default function Register() {
  return (
    <FormTemplate
      title={registerFieldsData.title}
      btnTitle={registerFieldsData.btnTitle}
      fields={registerFieldsData.fields}
    />
  );
}
