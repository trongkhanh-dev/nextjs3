import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger
      // className="w-[50px] h-[50px] border border-black dark:border-white
      //      shadow-md shadow-gray-400 rounded-md"
      >
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className="background-light900_dark200 border-none p-5">
        {/* <SheetHeader> */}
        <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        {/* <SheetDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetDescription> */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            alt="Logo"
            width={23}
            height={23}
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
          <div className=" flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient font-bold text-[14px]">
                    Log In
                  </span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark-400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                  {/* <span className="primary-text-gradient font-bold text-[14px]"> */}
                  Sign Up
                  {/* </span> */}
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
        {/* </SheetHeader> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
