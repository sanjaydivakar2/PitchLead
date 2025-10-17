export function Logo({ className }: { className?: string }) {
  return (
    <div className={`w-8 h-8 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="32" height="32" rx="8" fill="url(#gradient)" />
        <path
          d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 8V16M8 12L16 16L24 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5B61FF" />
            <stop offset="1" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
