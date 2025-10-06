"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClass?: string;
  iconPosition: "left" | "right";
}
const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClass,
  iconPosition,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "query",
        value: searchQuery,
      });
      router.push(newUrl, { scroll: false });
    } else {
      if (pathname == route) {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
        router.push(newUrl, { scroll: false });
      }
    }
  }, [searchQuery, router, searchParams, pathname, route]);

  return (
    <div
      className="background-light800_darkgradient flex min-h-[56px] grow items-center gap-a4 rounded-[10px] px-4 cursor-text"
      onClick={focusInput}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          // className="cursor-pointer"
        />
      )}
      <Input
        ref={inputRef}
        className="paragraph-regular no-focus placeholder text-dark-500  border-none shadow-none outline-none"
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          // className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
