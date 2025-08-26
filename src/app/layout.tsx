import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundEffects } from '@/components/background-effects';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'CP Express',
  description: 'Sua plataforma de marketing integrada.',
};

const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '900'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("antialiased flex flex-col min-h-screen font-sans", fontSans.variable)}>
        <BackgroundEffects />
        <div className="relative z-10 flex flex-col flex-1">
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
