"use client";

import { TextInput, SubmitButton } from "@/components";
import { useFormState } from "react-dom";
import { handleSignUpForm } from "./actions";

export default function SignUpForm() {
  const [state, formAction] = useFormState(handleSignUpForm, {});

  return (
    <form action={formAction}>
      <TextInput name="name" label="Name" />
      <TextInput name="email" label="E-mail" inputMode="email" />
      <TextInput name="password" label="Password" type="password" />
      <TextInput
        name="PasswordConfirmation"
        label="Password confirmation"
        type="password"
      />

      <SubmitButton>Create Account!</SubmitButton>
    </form>
  );
}
