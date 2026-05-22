import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, location, skills, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Cielo Verde <hello@mail.discovercieloverde.com>",
    to: "info@discovercieloverde.com",
    replyTo: email,
    subject: `Get involved — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Location: ${location || "—"}`,
      `Skills: ${skills || "—"}`,
      `Message: ${message || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
