"use server";

import { z } from "zod";

import { redirect } from "next/navigation";
import { getZodErrors } from "@/helpers/zod";

export type SignInError = {
  email?: string;
  password?: string;
};

export type SignInState = {
  isValid?: boolean;
  errors: SignInError;
};

const validateSignInForm = (formData: FormData) => {
  const userSchema = z.object({
    email: z.string().email("Email invalid"),
    password: z.string().min(10, "Password must have at least 10 chars"),
  });

  try {
    userSchema.parse(Object.fromEntries(formData));
    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    const zodErrors = getZodErrors(error);
    return { isValid: false, errors: zodErrors || {} };
  }
};

export const handleSignInForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignInForm(formData);
  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  console.log("All Good", data);

  return { isValid: true, errors: {} };
};
