"use client";

import fetcher from "@/service/fetch";
import { AuthResponse } from "@/types/responses.types";
import applyServerErrors from "@/utils/authServerErrors";
import { otpSchema, TOtpForm } from "@/validation/otpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";



export default function useEmailVertification() {

    const router = useRouter();

    const form = useForm<TOtpForm>({
        resolver: zodResolver(otpSchema),
        defaultValues: { code : "" },
        mode: "all",
    });


    const onSubmit: SubmitHandler<TOtpForm> = async (
        body,
    ) => {
        try {

            const data: AuthResponse = await fetcher({
                method: "POST",
                url: process.env.NEXT_PUBLIC_EMAIL_VERTIFICATION_URL!,
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
