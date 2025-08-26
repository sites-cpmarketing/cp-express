
import { UserNav } from '@/components/layout/user-nav';
import { HomeClient } from '@/components/home-client';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }
  
  return (
    <div className="flex flex-col min-h-screen relative">
       <header className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-end items-center">
            <UserNav user={user} />
       </header>
      <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
        <HomeClient />
      </main>
    </div>
  );
};
