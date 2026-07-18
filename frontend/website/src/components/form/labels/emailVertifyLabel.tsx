import { FieldLabel } from "@/components/ui/field";
import CountdownBtn from "./countdownBtn";

export default function EmailVertifyLabel({
  labelStyle,
  text,
  name,
}: {
  labelStyle?: string;
  text: string;
  name: string;
}) {
  return (
    <div className="w-full flex  items-center justify-between">
      <FieldLabel htmlFor={name} className={`${labelStyle || ""} `}>
        {text}
      </FieldLabel>
      <CountdownBtn initialTime={20} />
    </div>
  );
}
