"use client";

import { emailVertificationFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import useEmailVertification from "@/hooks/useEmailVertification";




export default function EmailVertificationForm ({email} : {email : string}) {

    const {form , onSubmit} = useEmailVertification(email);

    return (
        <FormTemplate
            form={form}
            onSubmitHandler={onSubmit}
            fields={emailVertificationFieldsData.fields}
            page={emailVertificationFieldsData.page}
            title={emailVertificationFieldsData.title}
            description={`we had sent a code to this email : ${email}`}
            btnTitle={emailVertificationFieldsData.btnTitle}
        />
    )
}
