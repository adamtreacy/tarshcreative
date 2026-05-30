import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 150, className = "" }: LogoProps) {
  // Image is 1080×1350 (4:5 ratio). Height is proportional.
  return (
    <Image
      src="/logo.png"
      alt="Tarsh Creative"
      width={size}
      height={Math.round(size * 1.25)}
      className={className}
      priority
    />
  );
}
