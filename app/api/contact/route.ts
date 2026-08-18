import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();

  if (!body.name || !body.email || !body.service || !body.message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  const backendRes = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: body.name,
      email: body.email,
      company: body.company,
      subject: body.service,
      message: body.message,
    }),
  });

  if (!backendRes.ok) {
    return NextResponse.json(
      { error: "Échec de l'envoi du message." },
      { status: backendRes.status }
    );
  }

  return NextResponse.json({ ok: true });
}