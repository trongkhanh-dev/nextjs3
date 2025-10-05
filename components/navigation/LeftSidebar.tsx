import React from "react";
import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";

const LeftSidebar = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col gap-6 h-full">
        <NavLinks userId={userId} />
        <div className="flex flex-col gap-2 mt-auto">
          {userId ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              {" "}
              <Button
                type="submit"
                className="base-medium w-fit !transparent px-4 py-3"
              >
                <LogOut className="size-5 text-black dark:text-white" />
                <span className="text-dark300_light900 max-lg:hidden">
                  Logout
                </span>
              </Button>
            </form>
          ) : (
            <>
              <Button
                className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                asChild
              >
                <Link href={ROUTES.SIGN_IN}>
                  <Image
                    src="/icons/account.svg"
                    alt="Account"
                    width={20}
                    height={20}
                    className="inverted-colors lg:hidden "
                  />
                  <span className="primary-text-gradient font-bold text-[14px] max-lg:hidden">
                    Log In
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                className="small-medium light-border-2 btn-tertiary text-dark-400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
              >
                <Link href={ROUTES.SIGN_UP}>
                  <Image
                    src="/icons/sign-up.svg"
                    alt="Account"
                    width={20}
                    height={20}
                    className="inverted-colors lg:hidden "
                  />
                  {/* <span className="primary-text-gradient font-bold text-[14px]"> */}
                  <span className="font-bold text-[14px] max-lg:hidden">
                    Sign Up
                  </span>
                  {/* <span className="primary-text-gradient font-bold text-[14px] max-lg:hidden">
              Log In
            </span> */}
                  {/* </span> */}
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
