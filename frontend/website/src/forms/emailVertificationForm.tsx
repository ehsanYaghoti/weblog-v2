"use client";

import { emailVertificationFieldsData } from "@/constants/forms";
import FormTemplate from "@/components/form/form";
import useEmailVertification from "@/hooks/useEmailVertification";




export default function EmailVertificationForm () {

    const {form , onSubmit} = useEmailVertification();

    return (
        <FormTemplate
            form={form}
            onSubmitHandler={onSubmit}
            fields={emailVertificationFieldsData.fields}
            page={emailVertificationFieldsData.page}
            title={emailVertificationFieldsData.title}
            btnTitle={emailVertificationFieldsData.btnTitle}
        />
    )
}
