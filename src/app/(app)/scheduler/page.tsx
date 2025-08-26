import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, MoreHorizontal, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const scheduledPosts = [
  { platform: "Facebook", content: "Confira nossa nova linha de produtos de verão! ☀️ #verao #novidades", scheduledAt: "25 de Jul, 09:00", status: "Agendado" },
  { platform: "Instagram", content: "Foto do nosso novo produto X com um design incrível. O que acharam?...", scheduledAt: "25 de Jul, 12:00", status: "Agendado" },
  { platform: "LinkedIn", content: "Estamos animados em anunciar nossa parceria com a Empresa Y para inovar...", scheduledAt: "26 de Jul, 10:00", status: "Agendado" },
  { platform: "Twitter", content: "Lançamento relâmpago! 20% de desconto nas próximas 24 horas. Use o código...", scheduledAt: "24 de Jul, 18:00", status: "Publicado" },
  { platform: "Facebook", content: "Nosso CEO falará no evento de Marketing Digital na próxima semana. Inscreva-se!", scheduledAt: "23 de Jul, 15:00", status: "Publicado" },
  { platform: "Instagram", content: "Nos bastidores da nossa sessão de fotos de hoje! 📸 #makingof", scheduledAt: "28 de Jul, 14:00", status: "Rascunho" },
];

function PlatformIcon({ platform }: { platform: string }) {
  const props = { className: "h-5 w-5" };
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <Instagram {...props} />
    case 'facebook':
      return <Facebook {...props} />
    case 'linkedin':
      return <Linkedin {...props} />
    case 'twitter':
      return <Twitter {...props} />
    default:
      return null;
  }
}

export default function SchedulerPage() {
  return (
    <>
      <PageHeader 
        title="Agendador de Postagens" 
        description="Planeje e agende postagens de mídia social em várias plataformas."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Agendar Postagem
          </Button>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle>Suas Postagens</CardTitle>
          <CardDescription>
            Uma lista de todas as postagens agendadas, publicadas e em rascunho.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Plataforma</TableHead>
                <TableHead>Conteúdo</TableHead>
                <TableHead className="w-[180px]">Data Agendada</TableHead>
                <TableHead className="w-[120px] text-center">Status</TableHead>
                <TableHead className="w-[50px]">
                  <span className="sr-only">Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduledPosts.map((post, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <PlatformIcon platform={post.platform} />
                  </TableCell>
                  <TableCell className="font-medium truncate max-w-sm">{post.content}</TableCell>
                  <TableCell>{post.scheduledAt}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={post.status === "Agendado" ? "secondary" : post.status === "Publicado" ? "default" : "outline"}>
                      {post.status}
                    </Badge>
                  </TableCell>
                   <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Duplicar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
