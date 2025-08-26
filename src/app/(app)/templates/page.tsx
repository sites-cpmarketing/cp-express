import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const templates = [
  {
    title: "Lançamento de Produto",
    description: "Um modelo arrojado para anunciar novos produtos e gerar entusiasmo.",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "product launch"
  },
  {
    title: "Newsletter Semanal",
    description: "Mantenha seu público envolvido com um resumo de notícias e artigos.",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "newsletter design"
  },
  {
    title: "Promoção Especial",
    description: "Destaque ofertas e descontos por tempo limitado para impulsionar as vendas.",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "sale promotion"
  },
  {
    title: "Confirmação de Evento",
    description: "Um modelo limpo para confirmar o registro em webinars e eventos.",
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "event invitation"
  },
  {
    title: "Boas-vindas ao Cliente",
    description: "Cause uma ótima primeira impressão com um e-mail de boas-vindas acolhedor.",
    image: "https://picsum.photos/600/400?random=5",
    aiHint: "welcome email"
  },
  {
    title: "Recuperação de Carrinho",
    description: "Lembre os clientes sobre os itens que deixaram para trás.",
    image: "https://picsum.photos/600/400?random=6",
    aiHint: "shopping cart"
  }
];

export default function TemplatesPage() {
  return (
    <>
      <PageHeader 
        title="Modelos de E-mail"
        description="Modelos de e-mail pré-desenhados que se integram ao conteúdo de marketing gerado."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.title} className="flex flex-col">
            <CardHeader>
              <div className="aspect-[3/2] w-full overflow-hidden rounded-md">
                <Image 
                  src={template.image} 
                  alt={template.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  data-ai-hint={template.aiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline text-xl mb-2">{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Usar Modelo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
