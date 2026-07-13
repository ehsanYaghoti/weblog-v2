import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type TFormProps = {
  title: string;
  btnTitle : string;
  fields: {
    index: number;
    name: string;
    type?: string;
    label: string;
  }[];
};

export type TInputProps = {
  type?: string;
  name: string;
  inputStyle?: string;
  placeholder?: string;
  //   inputProps : UseControllerProps
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
};

export type TLabelProps = {
  text: string;
  name: string;
  labelStyle?: string;
};

export type TErrorProps = {
  message?: string;
  name: string;
  errorStyle?: string;
  fieldState: ControllerFieldState;
};

export type TFieldProps = {
  type?: string;
  name: string;
  style?: string;
  placeholder?: string;
  label: string;
  errorMessage?: string;
};
