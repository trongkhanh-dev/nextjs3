"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  // const handleSignIn = async (provider: "github" | "google") => {
  //   try {
  //     const result = await signIn(provider, {
  //       callbackUrl: ROUTES.HOME,
  //       // redirect: true,
  //     });
  //     // If redirect is true, the browser will navigate away.
  //     // If some providers return a result without redirect, you can handle it here if needed.
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //     toast("Event has been created", {
  //       description: "Sunday, December 03, 2023 at 9:00 AM",
  //       action: {
  //         label: "Undo",
  //         onClick: () => console.log("Undo"),
  //       },
  //     });
  //   }
  // };

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME, // dùng callbackUrl
      });
    } catch (error) {
      toast.error("Sign in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured while signing in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        onClick={() => handleSignIn("github")}
        className="cursor-pointer background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3"
      >
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button
        onClick={() => handleSignIn("google")}
        className="cursor-pointer background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3"
      >
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
