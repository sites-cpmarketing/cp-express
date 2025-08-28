import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
