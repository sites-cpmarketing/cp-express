'use server'

import { generateMarketingCopy, type GenerateMarketingCopyInput } from '@/ai/flows/generate-marketing-copy'
import { generateSocialMediaPosts, type GenerateSocialMediaPostsInput } from '@/ai/flows/generate-social-media-posts'

export async function handleGenerateMarketingCopy(input: GenerateMarketingCopyInput) {
  try {
    const result = await generateMarketingCopy(input);
    return { success: true, data: result };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error generating marketing copy:', errorMessage);
    return { success: false, error: 'Falha ao gerar o texto de marketing. Por favor, tente novamente.' };
  }
}

export async function handleGenerateSocialMediaPosts(input: GenerateSocialMediaPostsInput) {
  try {
    const result = await generateSocialMediaPosts(input);
    return { success: true, data: result };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error generating social media post:', errorMessage);
    return { success: false, error: 'Falha ao gerar a postagem. Por favor, tente novamente.' };
  }
}
