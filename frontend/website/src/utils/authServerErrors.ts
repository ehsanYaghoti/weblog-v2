import { FieldValues, Path, UseFormReturn } from "react-hook-form";


type ServerErrors<T extends FieldValues> = Partial<
    Record<Path<T>, string>
>;

export default function applyServerErrors<T extends FieldValues>(
    form: UseFormReturn<T>,
    errors: ServerErrors<T>
) {

    for (const key in errors) {

        const message = errors[key as Path<T>];

        if (message) {
            form.setError(key as Path<T>, {
                type: "server",
                message
            })
        }

    }

}
