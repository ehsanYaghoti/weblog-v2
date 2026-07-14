"use client";

import FormField from "@/components/form/formField";
import {
    FormProvider,
    FieldValues,
    useFormState,
} from "react-hook-form";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { FormTemplateProps } from "@/types/forms.types";
import SubmitBtn from "./submitBtn";

console.log("FormTemplate render");

export default function FormTemplate<T extends FieldValues>({
    form,
    page,
    title,
    btnTitle,
    fields,
    onSubmitHandler
}: FormTemplateProps<T>) {

    const { isSubmitting } = useFormState({
        control: form.control
    })

    return (
        <div className=" flex flex-col border border-black/50 bg-white items-center gap-8 w-105 min-h-64 rounded-lg p-8 font-sans! text-slate-700">
            <h1 className=" font-semibold text-2xl w-full">{title}</h1>
            <FormProvider<T> {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmitHandler)}
                    noValidate
                    className="flex bg-white flex-col items-start w-full  gap-6"
                >
                    {fields.map((field) => (
                        <FormField
                            page={page}
                            key={field.index}
                            name={field.name}
                            type={field.type}
                            label={field.label}
                        />
                    ))}

                    <SubmitBtn btnTitle={btnTitle} loading={isSubmitting} />
                    {
                        (page === 'register' || page === "login") && <span className="text-sm text-slate-600 self-center">
                            {page === "register"
                                ? "Already have an account? "
                                : "Dose not have an account? "}
                            <Link
                                href={page === "register" ? "/auth/login" : "/auth/register"}
                                className="text-slate-800 font-semibold underline"
                            >
                                {page === "register" ? "Login" : "Register"}
                            </Link>{" "}
                        </span>
                    }

                </form>
            </FormProvider>
        </div>
    );
}
