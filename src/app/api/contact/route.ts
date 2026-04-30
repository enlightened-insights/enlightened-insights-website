import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/types/contact";
import { sendEmail } from "@/lib/gmail";
import { confirmationEmail, notificationEmail } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const { name, email, company, service, challenge } = parsed.data;

    await Promise.all([
      sendEmail({
        to: email,
        subject: `Thank you for reaching out — ${name.split(" ")[0]}, we'll be in touch`,
        html: confirmationEmail(name, service),
      }),
      sendEmail({
        to: process.env.GMAIL_NOTIFY_ADDRESS!,
        subject: `New contact form submission from ${name}`,
        html: notificationEmail({ name, email, company, service, challenge }),
      }),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
