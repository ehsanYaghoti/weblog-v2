"use client";

import { emailVerificationFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import useEmailVerification from "@/hooks/useEmailVerification";




export default function EmailVertificationForm ({email} : {email : string}) {

    const {form , onSubmit} = useEmailVerification(email);

    return (
        <FormTemplate
            form={form}
            onSubmitHandler={onSubmit}
            {...emailVerificationFieldsData}
            description={`we had sent a code to this email : ${email}`}
        />
    )
}
