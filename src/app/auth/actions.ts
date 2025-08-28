
"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function login(formData: unknown) {
  const supabase = createClient();

  const validatedData = loginSchema.safeParse(formData);
  if (!validatedData.data) {
    return { error: "Dados inválidos." };
  }

  const { email, password } = validatedData.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    if (error.message.includes("Invalid login credentials")) {
        return { error: "Credenciais de login inválidas. Verifique seu e-mail e senha." };
    }
    return { error: "Ocorreu um erro ao fazer login. Tente novamente." };
  }

  revalidatePath("/", "layout");
  redirect("/");
}


export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/login');
}
