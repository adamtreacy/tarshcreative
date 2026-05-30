type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Circular Tarsh Creative wordmark badge — recreated in CSS/SVG text
 * to echo the Instagram logo (dusty slate circle, light tracked caps).
 */
export default function Logo({ size = 150, className = "" }: LogoProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-full bg-brand text-cream shadow-[0_10px_40px_-12px_rgba(44,58,66,0.55)] ${className}`}
      style={{ width: size, height: size }}
      aria-label="Tarsh Creative"
    >
      <div
        className="font-display leading-none"
        style={{ fontSize: size * 0.27, letterSpacing: "0.04em" }}
      >
        TAR<span className="font-display italic">s</span>H
      </div>
      <div
        className="font-body uppercase opacity-90"
        style={{
          fontSize: size * 0.082,
          letterSpacing: "0.42em",
          marginTop: size * 0.04,
          textIndent: "0.42em",
        }}
      >
        Creative
      </div>
    </div>
  );
}
