"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Wand2, Loader2, Clipboard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { handleGenerateSocialMediaPosts } from "../actions"

const formSchema = z.object({
  clientData: z.string().min(10, { message: "Por favor, forneça mais detalhes sobre o cliente." }),
  industryTrends: z.string().min(10, { message: "Por favor, forneça mais detalhes sobre as tendências." }),
  platform: z.enum(['Facebook', 'Twitter', 'LinkedIn', 'Instagram']),
  objective: z.string().min(5, { message: "Por favor, descreva o objetivo." }),
  keywords: z.string().min(3, { message: "Por favor, insira pelo menos uma palavra-chave." }),
});

export function SocialMediaForm() {
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientData: "",
      industryTrends: "",
      objective: "",
      keywords: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true);
    setGeneratedPost(null);

    const result = await handleGenerateSocialMediaPosts(values);

    if (result.success && result.data) {
      setGeneratedPost(result.data.post);
      toast({
        title: "Postagem Gerada!",
        description: "Sua postagem de mídia social foi criada com sucesso.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erro ao Gerar Postagem",
        description: result.error,
      });
    }
    setIsGenerating(false);
  }

  const copyToClipboard = () => {
    if (generatedPost) {
      navigator.clipboard.writeText(generatedPost);
      toast({
        title: "Copiado!",
        description: "A postagem foi copiada para a área de transferência.",
      });
    }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Gerar Postagem de Mídia Social</CardTitle>
          <CardDescription>Preencha os detalhes abaixo para criar uma postagem cativante.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="clientData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dados do Cliente</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Descreva o cliente, marca e público-alvo..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industryTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tendências do Setor</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Quais são as tendências atuais no setor do cliente?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plataforma</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma plataforma" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Twitter">Twitter</SelectItem>
                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="objective"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objetivo da Postagem</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Aumentar o engajamento, direcionar tráfego" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Palavras-chave</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: marketing digital, inovação, tecnologia" {...field} />
                    </FormControl>
                    <FormDescription>Separe as palavras-chave por vírgula.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isGenerating} className="w-full">
                {isGenerating ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Gerar Postagem
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Resultado</CardTitle>
            <CardDescription>A postagem gerada pela IA aparecerá aqui.</CardDescription>
          </div>
          {generatedPost && (
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              <Clipboard className="h-4 w-4" />
            </Button>
          )}
        </CardHeader>
        <CardContent>
        {isGenerating && (
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
            </div>
          )}
          {generatedPost && (
            <Textarea
              readOnly
              value={generatedPost}
              className="w-full h-96 text-base"
            />
          )}
          {!isGenerating && !generatedPost && (
             <div className="flex items-center justify-center h-full text-muted-foreground text-center p-8">
               <p>Sua postagem aparecerá aqui após a geração.</p>
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
