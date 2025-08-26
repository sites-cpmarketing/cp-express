import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-white", className)}>
      <Rocket className="h-6 w-6 text-primary" />
      <span className="text-lg">CP Express</span>
    </div>
  );
}
