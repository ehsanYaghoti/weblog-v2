"use client";

import fetcher from "@/service/fetch";
import { AuthResponse } from "@/types/responses.types";
import applyServerErrors from "@/utils/authServerErrors";
import { forgotPassSchema, TforgotPassForm } from "@/validation/forgotPassSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";



export default function useForgotPass() {

    const router = useRouter();

    const form = useForm<TforgotPassForm>({
        resolver: zodResolver(forgotPassSchema),
        defaultValues: { email: "" },
        mode: "all",
    });


    const onSubmit: SubmitHandler<TforgotPassForm> = async (
        body,
    ) => {
        try {

            const data: AuthResponse = await fetcher({
                method: "POST",
                url: process.env.NEXT_PUBLIC_FORGOT_URL!,
                body
            })

            if (!data.success) {

                applyServerErrors(form, data.errors)
                return;

            }

            toast.success("Submit was Success full", { position: "top-center" })
            router.push("/auth/reset-password");
        } catch (error) {
            toast.error("something went wrong", { position: "top-center" })
        }
    }

    return { form, onSubmit }
}
