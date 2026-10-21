interface QraemonLogoProps {
  className?: string;
  size?: number;
  monochrome?: boolean;
}

export function QraemonLogo({ className = '', size = 32, monochrome = false }: QraemonLogoProps) {
  // Renders the distinctive QRAEMON dual concentric split-ring mark
  const goldColor = monochrome ? '#15120E' : '#FFB800';
  const blueColor = monochrome ? '#443E37' : '#1D63ED';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="QRAEMON emblem"
    >
      {/* Outer top-right arc (Gold) */}
      <path
        d="M 50 10 A 40 40 0 0 1 90 50 L 74 50 A 24 24 0 0 0 50 26 Z"
        fill={goldColor}
      />
      {/* Outer bottom-left arc (Blue/Charcoal) */}
      <path
        d="M 50 90 A 40 40 0 0 1 10 50 L 26 50 A 24 24 0 0 0 50 74 Z"
        fill={blueColor}
      />
      {/* Inner offset circle / core pupil representing memory focus */}
      <path
        d="M 50 26 A 24 24 0 0 1 74 50 L 50 50 Z"
        fill={goldColor}
        opacity={0.9}
      />
      <path
        d="M 50 74 A 24 24 0 0 1 26 50 L 50 50 Z"
        fill={blueColor}
        opacity={0.9}
      />
      {/* Central observation focal core */}
      <circle cx="50" cy="50" r="9" fill="#15120E" />
    </svg>
  );
}
