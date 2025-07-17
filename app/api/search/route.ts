import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  if (!q) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
  }
  try {
    const perplexicaRes = await fetch("http://localhost:3000/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatModel: { provider: "openai", name: "gpt-4o-mini" },
        embeddingModel: { provider: "openai", name: "text-embedding-3-large" },
        optimizationMode: "speed",
        focusMode: "webSearch",
        query: q
      })
    });
    if (!perplexicaRes.ok) {
      const errText = await perplexicaRes.text();
      return NextResponse.json({ error: "Perplexica error", details: errText }, { status: 500 });
    }
    const data = await perplexicaRes.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch from Perplexica" }, { status: 500 });
  }
}

