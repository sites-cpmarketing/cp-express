import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <circle cx="22" cy="22" r="22" fill="url(#paint0_linear_2_36)" />
        <path
          d="M17.8175 12.864H12.0875L22.0075 32.064L31.9275 12.864H26.1975L22.0075 22.184L17.8175 12.864Z"
          fill="#0B0E14"
        />
        <path
          d="M26.1975 12.864H31.9275L22.0075 32.064L17.8175 22.184L22.0075 12.864L26.1975 12.864Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_36"
            x1="22"
            y1="0"
            x2="22"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE4900" />
            <stop offset="1" stopColor="#FE4900" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-lg font-bold">CP Express</span>
    </div>
  );
}
