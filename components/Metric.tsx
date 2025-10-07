import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imageUrl: string;
  alt: string;
  value?: string | number;
  title?: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
  titleStyles?: string;
}

const Metric = ({
  imageUrl,
  alt,
  value,
  title,
  href,
  textStyle,
  isAuthor,
  titleStyles,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imageUrl}
        alt={alt}
        width={16}
        height={16}
        className="rounded-full object-contain"
      />
      <p className={`${textStyle} flex items-center gap-1`}>
        {value}
        {title ? (
          <span className={cn(`small-regular line-clamp-1`, titleStyles)}>
            {title}
          </span>
        ) : null}
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="flex gap-1 items-center">
      {metricContent}
    </Link>
  ) : (
    <div className="flex gap-0.5 items-center">{metricContent}</div>
  );
};

export default Metric;
