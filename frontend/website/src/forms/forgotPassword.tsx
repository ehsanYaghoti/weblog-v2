"use client";

import { forgotPassFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import useForgotPass from "@/hooks/useForgotPss";




export default function ForgotPasswordForm () {

    const {form , onSubmit} = useForgotPass();

    return (
        <FormTemplate
            form={form}
            onSubmitHandler={onSubmit}
            {...forgotPassFieldsData}
        />
    )
}
