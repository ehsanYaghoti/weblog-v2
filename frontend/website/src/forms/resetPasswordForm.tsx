"use client";

import {
    useForm,
    SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import { TResetPassForm , resetPassSchema } from "@/validation/resetPassSchema";




export default function ResetPasswordForm () {

    const form = useForm<TResetPassForm>({
        resolver: zodResolver(resetPassSchema),
        defaultValues: { password: "" , confirmPassword : "" },
        mode: "all",
    });

    const onSubmit: SubmitHandler<TResetPassForm> = async (
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
            fields={resetPassFieldsData.fields}
            page={resetPassFieldsData.page}
            title={resetPassFieldsData.title}
            btnTitle={resetPassFieldsData.btnTitle}
        />
    )
}
