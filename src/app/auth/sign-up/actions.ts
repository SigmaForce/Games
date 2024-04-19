"use server";

import { ZodError, z } from "zod";

import UsersService from "@/services/Users";
import { redirect } from "next/navigation";
import { getZodErrors } from "@/helpers/zod";

export type SignUpError = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

export type SignUpState = {
  isValid?: boolean;
  errors: SignUpError;
};

const validateSignUpForm = (formData: FormData) => {
  const checkPasswords = (data: any) =>
    data.password === data.passwordConfirmation;
  const checkPasswordsErrors = {
    message: "Password confirmation doesn't match",
    path: ["passwordConfirmation"],
  };

  const userSchema = z
    .object({
      name: z.string().min(3, "Name must have at least 3 chars"),
      email: z.string().email("Email invalid"),
      password: z.string().min(10, "Password must have at least 10 chars"),
      passwordConfirmation: z
        .string()
        .min(10, "Password confirmation must have at least 10 chars"),
    })
    .refine(checkPasswords, checkPasswordsErrors);

  try {
    userSchema.parse(Object.fromEntries(formData));
    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    const zodErrors = getZodErrors(error);
    return { isValid: false, errors: zodErrors || {} };
  }
};

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignUpForm(formData);
  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const record = await UsersService.signUp(data);
  redirect("/");
};
