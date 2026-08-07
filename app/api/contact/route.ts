import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();

  if (!body.name || !body.email || !body.service || !body.message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  // TODO: brancher un envoi d'email / CRM réel (ex: Resend, HubSpot).
  console.log("Nouvelle demande de contact AZELIE:", body);

  return NextResponse.json({ ok: true });
}
