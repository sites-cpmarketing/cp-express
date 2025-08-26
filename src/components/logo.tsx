import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="14" fill="#FE4900" />
        <path
          d="M8.06836 10.42V9.5H19.9316V10.42L14 21L8.06836 10.42Z"
          fill="white"
        />
        <path
          d="M14 21L19.9316 9.5H16.5191L14 15.2867L11.4808 9.5H8.06836L14 21Z"
          fill="#0B0E14"
        />
      </svg>
      <div className="flex items-center">
        <div className="bg-[#0038FF] text-white flex items-center justify-center w-7 h-7 rounded-sm mr-1">
          <span className="text-sm tracking-tighter">CP</span>
        </div>
        <span className="text-lg text-white">Express</span>
      </div>
    </div>
  );
}
