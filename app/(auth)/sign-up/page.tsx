"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";
import React from "react";
import { signUpWithCredentials } from "@/lib/actions/auth.action";

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={signUpWithCredentials}
      formType="SIGN_UP"
    />
  );
};

export default SignUp;
