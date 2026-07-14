import { FormTemplateConfig } from "@/types/forms.types";
import { TforgotPassForm } from "@/validation/forgotPassSchema";
import { TLoginForm } from "@/validation/loginSchema";
import { TRegisterForm } from "@/validation/registerSchema";

export const registerFieldsData: FormTemplateConfig<TRegisterForm> = {
  page: "register",
  title: "Create account",
  btnTitle: "Sign Up",
  fields: [
    { index: 0, name: "username", label: "Username" },
    { index: 1, name: "email", type: "email", label: "Email" },
    { index: 2, name: "password", type: "password", label: "Password" },
  ],
};

export const loginFieldsData: FormTemplateConfig<TLoginForm> = {
  page: "login",
  title: "Login",
  btnTitle: "Sign In",
  fields: [
    { index: 0, name: "email", type: "email", label: "Email" },
    { index: 1, name: "password", type: "password", label: "Password" },
  ],
};

export const forgotPassFieldsData: FormTemplateConfig<TforgotPassForm> = {
  page: "forgot-password",
  title: "Forgot Password",
  btnTitle: "Vertificate",
  fields: [
    { index: 0, name: "email", type: "email", label: "Email" },
  ],
};
