import { PageHeader } from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketingCopyForm } from "./_components/marketing-copy-form"
import { SocialMediaForm } from "./_components/social-media-form"

export default function ContentGeneratorPage() {
  return (
    <>
      <PageHeader 
        title="Gerador de Conteúdo com IA"
        description="Gere textos de marketing e postagens de mídia social envolventes." 
      />
      <Tabs defaultValue="marketing-copy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="marketing-copy">Textos de Marketing</TabsTrigger>
          <TabsTrigger value="social-media">Postagens Sociais</TabsTrigger>
        </TabsList>
        <TabsContent value="marketing-copy">
          <MarketingCopyForm />
        </TabsContent>
        <TabsContent value="social-media">
          <SocialMediaForm />
        </TabsContent>
      </Tabs>
    </>
  )
}
