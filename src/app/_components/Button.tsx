import Image, { type StaticImageData } from "next/image";
import React, { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: StaticImageData;
  alt: string;
  children: ReactNode;
}

export function Button({ icon, alt, children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex items-center gap-5 rounded-lg bg-gray-600 px-6 py-5"
      {...rest}
    >
      <Image src={icon} alt={alt} />
      <span className="text-lg text-gray-200">{children}</span>
    </button>
  );
}
