
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
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
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Button variant="outline">Alterar Foto</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" defaultValue="Usuário" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="usuario@cpexpress.com" disabled />
          </div>
          <Button>Salvar Alterações</Button>
        </CardContent>
      </Card>
    </div>
  );
}
