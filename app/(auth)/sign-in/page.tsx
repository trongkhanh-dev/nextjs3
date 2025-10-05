"use client";

import AuthForm from "@/components/forms/AuthForm";
import React from "react";
import { SignInSchema } from "@/lib/validation";
import { signInWithCredentials } from "@/lib/actions/auth.action";

const SignIn = () => {
  return (
    <AuthForm
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
      formType="SIGN_IN"
    />
  );
};

export default SignIn;
