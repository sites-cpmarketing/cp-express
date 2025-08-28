import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { UserNav } from '@/components/user-nav';
import { Logo } from '@/components/logo';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <UserNav user={user} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
