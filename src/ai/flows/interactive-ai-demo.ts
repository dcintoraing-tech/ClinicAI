'use server';

/**
 * @fileOverview This file defines a Genkit flow for an interactive AI demo that simulates AI-driven decision-making in a clinical setting.
 *
 * - interactiveAIDemo - A function that processes user input and returns the AI's simulated reasoning and recommendation.
 * - InteractiveAIDemoInput - The input type for the interactiveAIDemo function.
 * - InteractiveAIDemoOutput - The return type for the interactiveAIDemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveAIDemoInputSchema = z.object({
  symptoms: z
    .string()
    .describe("The patient's symptoms as described by the user."),
  medicalHistory: z
    .string()
    .describe('Relevant medical history of the patient.'),
  diagnosticTests: z
    .string()
    .describe('Results from recent diagnostic tests, if any.'),
});
export type InteractiveAIDemoInput = z.infer<typeof InteractiveAIDemoInputSchema>;

const InteractiveAIDemoOutputSchema = z.object({
  reasoning: z
    .string()
    .describe('The AI’s reasoning process based on the input data.'),
  recommendation: z
    .string()
    .describe('The AI’s recommendation for next steps or treatment.'),
});
export type InteractiveAIDemoOutput = z.infer<typeof InteractiveAIDemoOutputSchema>;

export async function interactiveAIDemo(input: InteractiveAIDemoInput): Promise<InteractiveAIDemoOutput> {
  return interactiveAIDemoFlow(input);
}

const interactiveAIDemoPrompt = ai.definePrompt({
  name: 'interactiveAIDemoPrompt',
  input: {schema: InteractiveAIDemoInputSchema},
  output: {schema: InteractiveAIDemoOutputSchema},
  prompt: `You are an AI assistant within ClinicAI, designed to simulate clinical decision-making.

Based on the following patient information, provide a detailed reasoning process and a recommendation for next steps.

Symptoms: {{{symptoms}}}
Medical History: {{{medicalHistory}}}
Diagnostic Tests: {{{diagnosticTests}}}

Reasoning:
Recommendation: `,
});

const interactiveAIDemoFlow = ai.defineFlow(
  {
    name: 'interactiveAIDemoFlow',
    inputSchema: InteractiveAIDemoInputSchema,
    outputSchema: InteractiveAIDemoOutputSchema,
  },
  async input => {
    const {output} = await interactiveAIDemoPrompt(input);
    return output!;
  }
);
