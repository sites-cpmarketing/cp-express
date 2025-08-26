'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(prevState: any, formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      message: error.message || 'Ocorreu um erro durante o login.',
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirm-password') as string

  if (password !== confirmPassword) {
    return {
      message: 'As senhas não correspondem.',
    }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    return {
      message: error.message || 'Ocorreu um erro durante o cadastro.',
    }
  }

  revalidatePath('/login')
  redirect('/auth/confirm')
}

export async function updateUser(formData: FormData) {
  const supabase = createClient();

  const name = formData.get('name') as string;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return redirect('/login');
  }

  const { error } = await supabase.auth.updateUser({
    data: {
      full_name: name,
    }
  });

  if (error) {
    console.error('Error updating user:', error);
    return redirect('/profile?error=Could not update user');
  }

  revalidatePath('/profile');
  redirect('/profile')
}
