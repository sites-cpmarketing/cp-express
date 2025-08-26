import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/ui/sidebar'
import { UserNav } from '@/components/layout/user-nav'
import { Toaster } from '@/components/ui/toaster'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 pl-0 md:pl-16">
        <header className="p-4 flex justify-end items-center">
            <UserNav user={user} />
        </header>
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
        <Toaster />
      </main>
    </div>
  )
}
