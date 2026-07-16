"use client";

import fetcher from "@/service/fetch";
import { AuthResponse } from "@/types/responses.types";
import applyServerErrors from "@/utils/authServerErrors";
import { registerSchema, TRegisterForm } from "@/validation/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";



export default function useRegister() {

    const router = useRouter();

    const form = useForm<TRegisterForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: { username: "", email: "", password: "" },
        mode: "all",
    });


    const onSubmit: SubmitHandler<TRegisterForm> = async (
        body,
    ) => {
        try {

            const data: AuthResponse = await fetcher({
                method: "POST",
                url: process.env.NEXT_PUBLIC_REGISTER_URL!,
                body
            })

            if (!data.success) {

                applyServerErrors(form, data.errors)
                return;

            }

            toast.success("Submit was Success full", { position: "top-center" })
            router.push("/auth/login");
        } catch (error) {
            toast.error("something went wrong", { position: "top-center" })
        }
    }

    return { form, onSubmit }
}
