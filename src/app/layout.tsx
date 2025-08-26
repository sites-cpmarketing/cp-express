import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundEffects } from '@/components/background-effects';
import { UserNav } from '@/components/layout/user-nav';
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'CP Express',
  description: 'Sua plataforma de marketing integrada.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased flex flex-col min-h-screen font-sans">
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
