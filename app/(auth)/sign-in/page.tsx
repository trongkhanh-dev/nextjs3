"use client";

import AuthForm from "@/components/forms/AuthForm";
import React from "react";
import { SignInSchema } from "@/lib/validation";

const SignIn = () => {
  return (
    <AuthForm
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
      formType="SIGN_IN"
    />
  );
};

export default SignIn;
