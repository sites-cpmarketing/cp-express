// The directive tells the Next.js runtime that it should be run on the server.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating marketing copy.
 *
 * generateMarketingCopy - A function that generates marketing copy based on input data.
 * GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  clientData: z
    .string()
    .describe('Information about the client, their products, and target audience.'),
  industryTrends: z
    .string()
    .describe('Current trends in the client’s industry.'),
  platformBestPractices: z
    .string()
    .describe(
      'Best practices for the marketing platform where the copy will be used.'
    ),
  tone: z
    .string()
    .default('Professional')
    .describe('The desired tone of the marketing copy (e.g., professional, friendly, humorous).'),
  wordLimit: z
    .number()
    .default(100)
    .describe('The maximum number of words for the generated copy.'),
  platform: z
    .string()
    .describe('The platform for which the copy is intended, e.g. Facebook, X, LinkedIn.')
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  marketingCopy: z.string().describe('The generated marketing copy.'),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(
  input: GenerateMarketingCopyInput
): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const generateMarketingCopyPrompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter. Generate engaging marketing copy for the following, adhering to the specified platform best practices and industry trends.

Client Data: {{{clientData}}}
Industry Trends: {{{industryTrends}}}
Platform Best Practices: {{{platformBestPractices}}}
Platform: {{{platform}}}
Tone: {{{tone}}}
Word Limit: {{{wordLimit}}}

Copy:`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await generateMarketingCopyPrompt(input);
    return output!;
  }
);
