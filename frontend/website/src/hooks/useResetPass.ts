"use client";

import fetcher from "@/service/fetch";
import { AuthResponse } from "@/types/responses.types";
import applyServerErrors from "@/utils/authServerErrors";
import { resetPassSchema, TResetPassForm } from "@/validation/resetPassSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";



export default function userResetPass() {

    const router = useRouter();

    const form = useForm<TResetPassForm>({
        resolver: zodResolver(resetPassSchema),
        defaultValues: { password: "" , confirmPassword : "" },
        mode: "all",
    });


    const onSubmit: SubmitHandler<TResetPassForm> = async (
        body,
    ) => {
        try {

            const data: AuthResponse = await fetcher({
                method: "POST",
                url: process.env.NEXT_PUBLIC_RESET_URL!,
                body
            })

            if (!data.success) {

                applyServerErrors(form, data.errors)
                return;

            }

            toast.success("Reset Password was Success full", { position: "top-center" })
            router.push("/auth/login");
        } catch (error) {
            toast.error("something went wrong", { position: "top-center" })
        }
    }

    return { form, onSubmit }
}
