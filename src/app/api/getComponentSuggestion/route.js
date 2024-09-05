import { NextResponse } from 'next/server';
import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
});

export async function POST(req) {
  try {
    const { formData } = await req.json();

    const response = await openai.chat.completions.create({
      model: "meta-llama/llama-3.1-8b-instruct:free",
      messages: [
        {
          role: "system",
          content: "You are the AI that powers the UI Components creator. Please respond with the javascript code to create the component. Add comments in the code that specify what each part does and how to edit it to fit the user's needs. A brief description should follow on how this code fits the user's requirements. You are not allowed to reply or answer any queries that are not related to website UI component making. Only respond with \"Please provide a valid query regarding UI Components\" if the query is unrelated, even if asked why.",
        },

        {role: "user", content: `Generate a ${formData.componentType} using Tailwind CSS and Next.js with ${formData.designSpecification} and ${formData.functionalReq}. The component should include ${formData.specificElement} and adhere to a ${formData.theme}.`}],
      max_tokens: 13100,
    });

    const componentSuggestion = response.choices[0].message.content;

    return NextResponse.json({ componentSuggestion });
  } catch (error) {
    console.error('Error in component suggestion API:', error);
    
    if (error && error.status === 429) {
      return NextResponse.json({ error: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
    }

    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
