import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundEffects } from '@/components/background-effects';
import { UserNav } from '@/components/layout/user-nav';
import { createClient } from '@/lib/supabase/server';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'CP Express',
  description: 'Sua plataforma de marketing integrada.',
};

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeadline = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("antialiased flex flex-col min-h-screen font-sans", fontSans.variable, fontHeadline.variable)}>
        <BackgroundEffects />
        <div className="relative z-10 flex flex-col flex-1">
          {user && (
            <header className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-end items-center">
              <UserNav user={user} />
            </header>
          )}
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
