import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 150, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Tarsh Creative"
      width={size}
      height={size}
      className={`rounded-2xl ${className}`}
      priority
    />
  );
}
