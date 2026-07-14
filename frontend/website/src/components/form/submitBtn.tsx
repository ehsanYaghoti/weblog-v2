"use client";


import { LoaderCircle } from "lucide-react"
import { useFormContext } from "react-hook-form"



export default function SubmitBtn({btnTitle , loading} : {btnTitle : string , loading : boolean}) {

    const { formState } = useFormContext();

    return <button
        disabled={loading ? true : false}
        type="submit"
        className="px-4 py-3 h-12 rounded-lg self-center cursor-pointer w-full disabled:bg-gray-500 disabled:cursor-not-allowed shadow-xl focus:shadow-lg bg-slate-900 text-white font-medium border flex items-center justify-center border-black/10"
    >
        {loading ? (
            <i>
                <LoaderCircle className="animate-spin" />
            </i>
        ) : (
            btnTitle
        )}
    </button>
}
