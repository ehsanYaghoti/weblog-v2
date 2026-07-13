"use client";

import FormField from "@/components/form/formField";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { registerSchema } from "@/validation/registerSchema";
import { TFormProps } from "@/types/props.types";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

export default function FormTemplate({ title, btnTitle, fields }: TFormProps) {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", email: "", password: "" },
    mode: "all",
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = async (data) => {

    const res = await new Promise(resolve => setTimeout(() => {
        resolve("response")
    }, 2000))

    console.log(res);

    console.log(data);

  }

  return (
    <div className=" flex flex-col border border-black/50 bg-white items-center gap-8 w-105 min-h-96 rounded-lg p-8 font-sans! text-slate-700">
      <h1 className=" font-semibold text-2xl w-full">{title}</h1>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="flex bg-white flex-col items-start w-full  gap-6"
        >
          {fields.map((field) => (
            <FormField
              key={field.index}
              name={field.name}
              type={field.type}
              label={field.label}
            />
          ))}

          <button
            disabled={form.formState.isSubmitting ? true : false}
            type="submit"
            className="px-4 py-3 h-12 rounded-lg self-center cursor-pointer w-full disabled:bg-gray-500 disabled:cursor-not-allowed shadow-xl focus:shadow-lg
             bg-slate-900 text-white font-medium border flex items-center justify-center
             border-black/10"
          >
            {form.formState.isSubmitting ? <i><LoaderCircle className="animate-spin" /></i> : btnTitle}
          </button>
          <span className="text-sm text-slate-600 self-center">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-slate-800 font-semibold underline"
            >
              Login
            </Link>{" "}
          </span>
        </form>
      </FormProvider>
    </div>
  );
}
