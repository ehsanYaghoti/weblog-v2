import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";


export type TInputProps = {
  type?: string;
  name: string;
  inputStyle?: string;
  placeholder?: string;
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
};


export interface TOtpInputProps extends TInputProps {
    length : number
}

export type TLabelProps = {
  page: string;
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
  page: string;
  type?: string;
  name: string;
  style?: string;
  placeholder?: string;
  label: string;
  errorMessage?: string;
};
