"use client";

import {
    useForm,
    SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import { loginSchema, TLoginForm } from "@/validation/loginSchema";




export default function LoginForm() {

    const form = useForm<TLoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
        mode: "all",
    });

    const onSubmit: SubmitHandler<TLoginForm> = async (
        data,
    ) => {
        const res = await new Promise((resolve) =>
            setTimeout(() => {
                resolve("response");
            }, 2000),
        );

        console.log(res);

        console.log(data);
    };

    return (
        <FormTemplate
            form={form}
            onSubmitHandler={onSubmit}
            fields={loginFieldsData.fields}
            page={loginFieldsData.page}
            title={loginFieldsData.title}
            btnTitle={loginFieldsData.btnTitle}
        />
    )
}
