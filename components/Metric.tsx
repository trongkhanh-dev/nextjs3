import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imageUrl: string;
  alt: string;
  value?: string;
  title?: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imageUrl,
  alt,
  value,
  title,
  href,
  textStyle,
  isAuthor,
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
      <p className={`${textStyle} flex items-center gap-1`}>{value}</p>
      <span className={`small-regular line-clamp-1`}>{title}</span>
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
