"use client";

import {
    useForm,
    SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TRegisterForm, registerSchema } from "@/validation/registerSchema";
import { registerFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import { setErrorMap } from "zod/v3";
import { toast } from "sonner";
import fetcher from "@/service/fetch";
import { AuthResponse } from "@/types/responses.types";




export default function RegisterForm() {

    const form = useForm<TRegisterForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: { username: "", email: "", password: "" },
        mode: "all",
    });

    const onSubmit: SubmitHandler<TRegisterForm> = async (
        body,
    ) => {
        try {

            const data: AuthResponse = await fetcher({ method: "POST", url: process.env.NEXT_PUBLIC_REGISTER_URL!, body })

            if (!data.success) {

                const errors = data.errors;

                if (errors?.email) {
                    form.setError('email', { type: "server", message: errors.email })
                } else if (errors.password) {
                    form.setError('password', { type: "server", message: errors.password })
                } else if (errors.username) {
                    form.setError('username', { type: "server", message: errors.username })
                } else {
                    toast.error("something went wrong", { position: "top-center" })
                }

            }

            if (data.success) {
                toast.success("form Submit was Success full", { position: "top-center" })
            }
        } catch (error) {
            toast.error("something went wrong", { position: "top-center" })
        }

    };

    return (
        <FormTemplate
            form={form}
            onSubmitHandler={onSubmit}
            fields={registerFieldsData.fields}
            page={registerFieldsData.page}
            title={registerFieldsData.title}
            btnTitle={registerFieldsData.btnTitle}
        />
    )
}
