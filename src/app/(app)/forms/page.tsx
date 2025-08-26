
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const forms = [
  { name: "Formulário de Contato Principal", leads: 1254, conversionRate: "15%", status: "Ativo" },
  { name: "Inscrição para Webinar", leads: 876, conversionRate: "45%", status: "Ativo" },
  { name: "Download de Ebook", leads: 2310, conversionRate: "22%", status: "Ativo" },
  { name: "Campanha de Fim de Ano (2023)", leads: 450, conversionRate: "12%", status: "Arquivado" },
];

export default function FormsPage() {
  return (
    <>
      <PageHeader 
        title="Base de Leads" 
        description="Gerencie seus formulários e leads capturados."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Criar Novo Formulário
          </Button>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle>Seus Formulários</CardTitle>
          <CardDescription>
            Uma lista de todos os formulários de captura de leads em sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Formulário</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Leads</TableHead>
                <TableHead className="text-right">Taxa de Conversão</TableHead>
                <TableHead>
                  <span className="sr-only">Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.name}>
                  <TableCell className="font-medium">{form.name}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={form.status === "Ativo" ? "default" : "outline"}>
                      {form.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">{form.leads}</TableCell>
                  <TableCell className="text-right">{form.conversionRate}</TableCell>
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
                        <DropdownMenuItem>Visualizar</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                         <DropdownMenuItem>Ver Leads</DropdownMenuItem>
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
