import { TFormProps } from "@/types/props.types";

export const registerFieldsData: TFormProps = {
  title: "Create account",
  btnTitle: "Sign Up",
  fields: [
    { index: 0, name: "username", label: "Username" },
    { index: 1, name: "email", type: "email", label: "Email" },
    { index: 2, name: "password", type: "password", label: "Password" },
  ],
};
