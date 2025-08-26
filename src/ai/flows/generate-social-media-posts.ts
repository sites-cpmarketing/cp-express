// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview AI-powered social media post generator.
 *
 * - generateSocialMediaPosts - Generates engaging social media posts based on input data.
 * - GenerateSocialMediaPostsInput - The input type for the generateSocialMediaPosts function.
 * - GenerateSocialMediaPostsOutput - The return type for the generateSocialMediaPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSocialMediaPostsInputSchema = z.object({
  clientData: z
    .string()
    .describe('Information about the client, their brand, and target audience.'),
  industryTrends: z
    .string()
    .describe('Current trends in the client industry.'),
  platform: z
    .enum(['Facebook', 'Twitter', 'LinkedIn', 'Instagram'])
    .describe('The social media platform for which to generate the post.'),
  objective: z
    .string()
    .describe('The objective of the social media post (e.g., increase brand awareness, drive traffic to website).'),
  keywords: z.string().describe('Relevant keywords to include in the post.'),
});

export type GenerateSocialMediaPostsInput = z.infer<typeof GenerateSocialMediaPostsInputSchema>;

const GenerateSocialMediaPostsOutputSchema = z.object({
  post: z.string().describe('The generated social media post.'),
});

export type GenerateSocialMediaPostsOutput = z.infer<typeof GenerateSocialMediaPostsOutputSchema>;

export async function generateSocialMediaPosts(
  input: GenerateSocialMediaPostsInput
): Promise<GenerateSocialMediaPostsOutput> {
  return generateSocialMediaPostsFlow(input);
}

const generateSocialMediaPostsPrompt = ai.definePrompt({
  name: 'generateSocialMediaPostsPrompt',
  input: {schema: GenerateSocialMediaPostsInputSchema},
  output: {schema: GenerateSocialMediaPostsOutputSchema},
  prompt: `You are a social media expert.

  Your job is to create engaging social media posts for the following platform: {{{platform}}}.
  The goal of the social media post is to: {{{objective}}}.
  In addition, make sure to include these keywords: {{{keywords}}}.

  Here is some information about the client, their brand, and target audience:
  {{{clientData}}}

  Consider these industry trends:
  {{{industryTrends}}}

  Please create a social media post that is likely to be engaging and effective for this platform.
  Make it short and punchy, and include a call to action.
  Ensure the post is within the character limit, if applicable, for the specified platform.
  `,
});

const generateSocialMediaPostsFlow = ai.defineFlow(
  {
    name: 'generateSocialMediaPostsFlow',
    inputSchema: GenerateSocialMediaPostsInputSchema,
    outputSchema: GenerateSocialMediaPostsOutputSchema,
  },
  async input => {
    const {output} = await generateSocialMediaPostsPrompt(input);
    return output!;
  }
);
