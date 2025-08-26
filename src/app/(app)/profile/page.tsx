

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const userEmail = user.email || "";

  return (
    <div className="flex justify-center items-start p-4 sm:p-6 lg:p-8 min-h-screen">
      <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
          <CardDescription>Atualize as informações do seu perfil e preferências.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              {/* Removido AvatarImage para não depender de um avatar_url que não existe */}
              <AvatarFallback>{userEmail?.[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <Button variant="outline" disabled>Alterar Foto</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Nome (use seu email)</Label>
            <Input id="name" defaultValue={userEmail} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user.email} disabled />
          </div>
          <Button disabled>Salvar Alterações</Button>
        </CardContent>
      </Card>
    </div>
  );
}
