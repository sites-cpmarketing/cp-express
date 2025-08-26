import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold", className)}>
      <svg
        width="251"
        height="42"
        viewBox="0 0 251 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-auto"
      >
        <g clipPath="url(#clip0_2_2_studio)">
          <path
            d="M20.6184 41.2368C31.9961 41.2368 41.2368 31.9961 41.2368 20.6184C41.2368 9.24072 31.9961 0 20.6184 0C9.24072 0 0 9.24072 0 20.6184C0 31.9961 9.24072 41.2368 20.6184 41.2368Z"
            fill="#FE4900"
          />
          <path
            d="M10.1582 12.8027H14.167L20.6184 29.5693L27.0698 12.8027H31.0786L20.6184 34.1953L10.1582 12.8027Z"
            fill="white"
          />
          <path
            d="M20.6184 29.5693L27.0698 12.8027H23.8672L20.6184 21.6053L17.3696 12.8027H14.167L20.6184 29.5693Z"
            fill="#0B0E14"
          />
        </g>
        <g clipPath="url(#clip1_2_2_studio)">
          <path
            d="M60.1093 0.381592H48.4214V41.2368H60.1093C69.3149 41.2368 76.8183 34.1953 76.8183 25.438C76.8183 16.6806 69.3149 9.63916 60.1093 9.63916V0.381592ZM60.1093 32.002C63.8584 32.002 66.8647 29.018 66.8647 25.438C66.8647 21.8579 63.8584 18.8739 60.1093 18.8739V32.002Z"
            fill="#0038FF"
          />
          <path
            d="M126.242 16.5222V10.2246H91.1328V16.5222H105.15V41.2368H112.215V16.5222H126.242Z"
            fill="white"
          />
          <path
            d="M149.034 10.2246H134.42V41.2368H141.485V27.5459L148.455 35.8315H155.08L146.495 25.9326L154.522 10.2246H149.034ZM141.485 16.1406V22.28H142.923L141.485 16.1406Z"
            fill="white"
          />
          <path
            d="M185.069 10.2246H159.299V16.5222H168.947V41.2368H176.012V16.5222H185.069V10.2246Z"
            fill="white"
          />
          <path
            d="M211.442 10.2246H189.914V41.2368H211.884V35.0312H196.979V27.7041H209.68V21.4065H196.979V16.5222H211.442V10.2246Z"
            fill="white"
          />
          <path
            d="M216.578 10.2246L227.185 25.8535L237.791 10.2246H246.377L232.076 31.9229V41.2368H222.012V31.8438L207.791 10.2246H216.578Z"
            fill="white"
          />
          <path
            d="M100.992 41.2368H86.458V34.9392H100.992V41.2368Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_2_studio">
            <rect width="41.2368" height="41.2368" fill="white" />
          </clipPath>
          <clipPath id="clip1_2_2_studio">
            <rect
              width="198"
              height="41"
              fill="white"
              transform="translate(48 0.381592)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}