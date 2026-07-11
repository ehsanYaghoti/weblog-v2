"use client";

import {
  useForm,
  SubmitHandler,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Inputs = {
  firstName: string;
  username: string;
  email: string;
  password: string;
};

let renderCount = 0;

function Input(props: UseControllerProps<Inputs>) {
  const { field, fieldState } = useController(props);

  return (
    <div className="w-full">
      <input {...field} placeholder={props.name} type="text" className=" w-full px-2 py-1 border border-black/50 rounded-lg" />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function Register() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    defaultValues: { firstName: "" },
    mode: "all",
  });

//   renderCount++;
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //   console.log(watch("email"));

  return (
    <div className=" w-full h-full flex items-center justify-center bg-white min-h-screen ">
      <div className=" flex flex-col border border-black/50 bg-white items-center gap-8 w-125 min-h-96 rounded-lg p-8 font-sans text-slate-700">
        <span className="p-3 border">render count : {renderCount}</span>
        <h1 className=" font-semibold text-2xl w-full">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start w-full  gap-6"
        >
          <Input
            control={control}
            name="firstName"
            rules={{
              required: "firstName is required",
              minLength: { value: 6, message: "min length is 6 character" },
            }}
          />
          <label htmlFor="username">username</label>
          <input
            type="text"
            {...register("username", { required: "username is required" })}
            className="w-full px-2 py-1 rounded-lg border border-black/50"
            placeholder="type username here ..."
          />
          {errors.username && (
            <span className="txt-sm text-red-500">this field is required</span>
          )}
          <label htmlFor="email">email</label>
          <input
            type="email"
            {...register("email", { required: "email is required" })}
            className="w-full px-2 py-1 rounded-lg border border-black/50 "
            placeholder="type email here ..."
          />
          {errors.email && (
            <span className="txt-sm text-red-500">this field is required</span>
          )}
          <label htmlFor="password">password</label>
          <input
            type="password"
            autoComplete=""
            {...register("password", {
              required: "the password is required",
              minLength: {
                value: 4,
                message: "password minimum length is 4 character",
              },
            })}
            className="w-full px-2 py-1 rounded-lg border border-black/50"
            placeholder="type password here ..."
          />
          {errors.password && (
            <span className="txt-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <button
            type="submit"
            className="px-4 py-2 rounded-lg self-center bg-slate-700 text-white font-medium border  border-black/10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
