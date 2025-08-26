import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src="/LOGO CP HORIZONTAL.svg" 
        alt="CP Express Logo" 
        width={140} 
        height={40}
        priority
      />
    </div>
  );
}
