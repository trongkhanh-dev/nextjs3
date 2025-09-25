"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
      formType="SIGN_UP"
    />
  );
};

export default SignUp;
