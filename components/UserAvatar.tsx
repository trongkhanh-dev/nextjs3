import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";

const UserAvatar = ({
  id,
  name,
  imageUrl,
  className = "h-9 w-9",
}: {
  id: string;
  name: string;
  imageUrl?: string;
  className?: string;
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={className}>
        {imageUrl ? (
          <Image
            className="object -cover"
            width={36}
            height={36}
            quality={100}
            src={imageUrl}
            alt={name}
          />
        ) : (
          <AvatarFallback className="primary-gradient font-space-grotesk font-bold tracking-wider text-white">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
