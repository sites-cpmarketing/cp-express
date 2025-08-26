import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { UserNav } from '@/components/layout/user-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarNav />
      </Sidebar>
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b px-4 md:justify-end">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <PanelLeft className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-72">
                  <SidebarNav />
                </SheetContent>
              </Sheet>
            </div>
          <UserNav />
        </header>
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
