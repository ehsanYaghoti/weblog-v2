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




export default function RegisterForm() {

    const form = useForm<TRegisterForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: { username: "", email: "", password: "" },
        mode: "all",
    });

    const onSubmit: SubmitHandler<TRegisterForm> = async (
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
            fields={registerFieldsData.fields}
            page={registerFieldsData.page}
            title={registerFieldsData.title}
            btnTitle={registerFieldsData.btnTitle}
        />
    )
}
