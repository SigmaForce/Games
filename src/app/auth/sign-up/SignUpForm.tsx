"use client";

import { TextInput, SubmitButton } from "@/components";
import { useFormState } from "react-dom";
import { SignUpState, handleSignUpForm } from "./actions";

const initialState: SignUpState = {
  isValid: undefined,
  errors: {
    name: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  },
};

export default function SignUpForm() {
  const [state, formAction] = useFormState(handleSignUpForm, initialState);
  console.log("🚀 ~ SignUpForm ~ state:", state);

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" error={state.errors.name} />
      <TextInput name="email" label="E-mail" error={state.errors.email} />
      <TextInput
        name="password"
        label="Password"
        type="password"
        error={state.errors.password}
      />
      <TextInput
        name="PasswordConfirmation"
        label="Password confirmation"
        type="password"
        error={state.errors.passwordConfirmation}
      />

      <SubmitButton>Create Account!</SubmitButton>
    </form>
  );
}
