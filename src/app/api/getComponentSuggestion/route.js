import { NextResponse } from 'next/server';
import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
});

export async function POST(req) {
  try {
    const { formData } = await req.json();
    console.log(formData);

    const response = await openai.chat.completions.create({
      model: "meta-llama/llama-3.1-8b-instruct:free",
      messages: [{role: "user", content: `Generate a ${formData.componentType} using Tailwind CSS with ${formData.designSpecification} and ${formData.functionalReq}. The component should include ${formData.specificElement} and adhere to a ${formData.theme}.`}],
      max_tokens: 13100,
    });

    const componentSuggestion = response.choices[0].message.content;

    return NextResponse.json({ componentSuggestion });
  } catch (error) {
    console.error('Error in recipe suggestion API:', error);
    console.log("test", error)
    
    if (error && error.status === 429) {
      return NextResponse.json({ error: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
    }

    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
