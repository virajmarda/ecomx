import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful shopping assistant for an e-commerce website. Help users with product recommendations, shopping advice, and general inquiries about products, shipping, returns, and other shopping-related topics. Keep responses concise and friendly.'
        },
        {
          role: 'user',
          content: message
        }
      ],
    });

    return new Response(
      JSON.stringify({ message: completion.choices[0].message.content }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ 
        message: "Sorry, I'm having trouble connecting right now. Please try again later."
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}