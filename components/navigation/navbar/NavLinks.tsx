"use client";

import React from "react";

import { sidebarLinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({
  isMobileNav = false,
  userId,
}: {
  isMobileNav?: boolean;
  userId?: string;
}) => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((item) => {
        let route = item.route;

        if (item.route === "/profile") {
          if (userId) {
            route = `${item.route}/${userId}`;
          } else return null;
        }

        const isActive =
          (pathname.includes(route) && route.length > 1) || pathname === route;

        const ComponentLink = (
          <Link
            href={route}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center gap-4 justify-start p-4 bg-transparent"
            )}
          >
            <Image
              width={20}
              height={20}
              src={item.imgURL}
              alt={item.label}
              className="invert dark:invert-0 "
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={item.label}>
            {ComponentLink}
          </SheetClose>
        ) : (
          <React.Fragment key={item.label}>{ComponentLink}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
