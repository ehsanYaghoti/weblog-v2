"use client";

import fetcher from "@/service/fetch";
import { AuthResponse } from "@/types/responses.types";
import applyServerErrors from "@/utils/authServerErrors";
import { loginSchema, TLoginForm } from "@/validation/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";



export default function useLogin() {

    const router = useRouter();

    const form = useForm<TLoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" , rememberme : false },
        mode: "all",
    });


    const onSubmit: SubmitHandler<TLoginForm> = async (
        body,
    ) => {
        try {

            const data: AuthResponse = await fetcher({
                method: "POST",
                url: process.env.NEXT_PUBLIC_LOGIN_URL!,
                body
            })

            if (!data.success) {

                applyServerErrors(form, data.errors)
                return;

            }

            toast.success("Submit was Success full", { position: "top-center" })
            router.push("/");
        } catch (error) {
            toast.error("something went wrong", { position: "top-center" })
        }
    }

    return { form, onSubmit }
}
