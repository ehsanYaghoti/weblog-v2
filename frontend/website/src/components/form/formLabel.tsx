import { TLabelProps } from "@/types/props.types";
import { FieldLabel } from "../ui/field";
import Link from "next/link";

export default function FormLabel({ page , text, name, labelStyle }: TLabelProps) {
  return (name === "password" && page === 'login') ? (
    <div className="w-full flex  items-center justify-between">
      <FieldLabel htmlFor={name} className={`${labelStyle || ""} `}>
        {text}
      </FieldLabel>
      <Link href="/auth/forgot-password" className="text-xs text-slate-800 hover:text-blue-600 hover:underline ">Forgot Password ?</Link>
    </div>
  ) : (
    <FieldLabel htmlFor={name} className={labelStyle || ""}>
      {text}
    </FieldLabel>
  );
}
