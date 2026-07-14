import { HTMLInputTypeAttribute } from "react";
import {
    FieldValues,
    Path,
    SubmitHandler,
    UseFormReturn,
} from "react-hook-form";

export type FormTemplateConfig<T extends FieldValues> = {
    page: string;
    title: string;
    btnTitle: string;
    fields: {
        index: number;
        name: Path<T>;
        label: string;
        type?: HTMLInputTypeAttribute;
    }[];
}

export type FormTemplateProps<T extends FieldValues> =
    FormTemplateConfig<T> & {
        form: UseFormReturn<T>,
        onSubmitHandler: SubmitHandler<T>;
    };
