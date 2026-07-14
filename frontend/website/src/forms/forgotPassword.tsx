"use client";

import {
    useForm,
    SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import { forgotPassSchema, TforgotPassForm } from "@/validation/forgotPassSchema";




export default function ForgotPasswordForm () {

    const form = useForm<TforgotPassForm>({
        resolver: zodResolver(forgotPassSchema),
        defaultValues: { email: "" },
        mode: "all",
    });

    const onSubmit: SubmitHandler<TforgotPassForm> = async (
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
            fields={forgotPassFieldsData.fields}
            page={forgotPassFieldsData.page}
            title={forgotPassFieldsData.title}
            btnTitle={forgotPassFieldsData.btnTitle}
        />
    )
}
