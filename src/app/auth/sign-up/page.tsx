import { PageWrapper, SubmitButton, TextInput } from "@/components";
import SignUpForm from "./SignUpForm";
import Link from "next/link";

export default async function SignUpPage() {
  return (
    <PageWrapper>
      <div className="flex-center w-full min-h-screen">
        <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
          <h1 className="text-3xl">Create your account</h1>
          <SignUpForm />
          <div className="mt-8">
            <Link href={"/auth/sign-in"}>Already have an account? Sign In</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
