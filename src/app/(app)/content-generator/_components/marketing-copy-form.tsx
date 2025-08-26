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
import { handleGenerateMarketingCopy } from "../actions"

const formSchema = z.object({
  clientData: z.string().min(10, { message: "Por favor, forneça mais detalhes sobre o cliente." }),
  industryTrends: z.string().min(10, { message: "Por favor, forneça mais detalhes sobre as tendências." }),
  platformBestPractices: z.string().min(10, { message: "Por favor, forneça mais detalhes sobre as práticas." }),
  tone: z.string({ required_error: "Por favor, selecione um tom." }),
  wordLimit: z.coerce.number().min(10).max(500),
  platform: z.string().min(2, { message: "Por favor, insira uma plataforma." }),
});

export function MarketingCopyForm() {
  const [generatedCopy, setGeneratedCopy] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientData: "",
      industryTrends: "",
      platformBestPractices: "",
      wordLimit: 100,
      platform: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true);
    setGeneratedCopy(null);

    const result = await handleGenerateMarketingCopy(values);

    if (result.success && result.data) {
      setGeneratedCopy(result.data.marketingCopy);
      toast({
        title: "Conteúdo Gerado!",
        description: "Seu texto de marketing foi criado com sucesso.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erro ao Gerar Conteúdo",
        description: result.error,
      });
    }
    setIsGenerating(false);
  }
  
  const copyToClipboard = () => {
    if (generatedCopy) {
      navigator.clipboard.writeText(generatedCopy);
      toast({
        title: "Copiado!",
        description: "O texto foi copiado para a área de transferência.",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Gerar Texto de Marketing</CardTitle>
          <CardDescription>Preencha os detalhes abaixo para gerar um texto de marketing otimizado.</CardDescription>
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
                      <Textarea placeholder="Descreva o cliente, produtos e público-alvo..." {...field} />
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
                name="platformBestPractices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Melhores Práticas da Plataforma</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Descreva as melhores práticas para a plataforma de marketing." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plataforma</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: E-mail, Google Ads, Blog" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tom</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um tom" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Profissional">Profissional</SelectItem>
                            <SelectItem value="Amigável">Amigável</SelectItem>
                            <SelectItem value="Humorístico">Humorístico</SelectItem>
                            <SelectItem value="Informativo">Informativo</SelectItem>
                            <SelectItem value="Urgente">Urgente</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
               </div>
              <FormField
                control={form.control}
                name="wordLimit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Limite de Palavras</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
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
                Gerar Texto
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Resultado</CardTitle>
            <CardDescription>O conteúdo gerado pela IA aparecerá aqui.</CardDescription>
          </div>
          {generatedCopy && (
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
              <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
            </div>
          )}
          {generatedCopy && (
            <Textarea
              readOnly
              value={generatedCopy}
              className="w-full h-96 text-base"
            />
          )}
          {!isGenerating && !generatedCopy && (
             <div className="flex items-center justify-center h-full text-muted-foreground text-center p-8">
               <p>Seu texto de marketing aparecerá aqui após a geração.</p>
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
