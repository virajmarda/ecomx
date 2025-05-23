import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful and knowledgeable shopping assistant for an e-commerce website called Xcom. Your role is to help customers with their shopping queries, provide product recommendations, and assist with general questions about shopping, orders, shipping, returns, and our policies.

Key information about Xcom:
- We offer products in categories like Electronics, Fashion, Home & Kitchen, Beauty, Sports, and Books
- We provide free shipping on orders over $50
- We have a 30-day return policy
- We ship internationally
- We accept major credit cards, PayPal, and various digital payment methods

Please provide helpful, concise responses. If you're not sure about specific product details or prices, you can provide general guidance and suggest browsing the relevant category on our website.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}