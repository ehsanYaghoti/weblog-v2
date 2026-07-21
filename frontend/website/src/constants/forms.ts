import { FormTemplateConfig } from "@/types/forms.types";
import { TforgotPassForm } from "@/validation/forgotPassSchema";
import { TLoginForm } from "@/validation/loginSchema";
import { TOtpForm } from "@/validation/otpSchema";
import { TRegisterForm } from "@/validation/registerSchema";
import { TResetPassForm } from "@/validation/resetPassSchema";

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
        { index: 2, name: "rememberme", type: "checkbox", label: "Remember Me" }
    ],
};

export const forgotPassFieldsData: FormTemplateConfig<TforgotPassForm> = {
    page: "forgot-password",
    title: "Forgot Password",
    description: "Enter your Email to send you a verification code.",
    btnTitle: "Send",
    fields: [
        { index: 0, name: "email", type: "email", label: "Email" },
    ],
};

export const emailVerificationFieldsData: FormTemplateConfig<TOtpForm> = {
    page: "email-verification",
    title: "Email Verification",
    btnTitle: "Verify",
    fields: [
        { index: 0, name: "code", label: "Code" },
    ],
};

export const resetPassFieldsData: FormTemplateConfig<TResetPassForm> = {
    page: "reset-password",
    title: "Reset Password",
    btnTitle: "Reset",
    fields: [
        { index: 0, name: "password", type: "password", label: "Password" },
        { index: 1, name: "confirmPassword", type: "password", label: "Confirm Password" },
    ],
};
