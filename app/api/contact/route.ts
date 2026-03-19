import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Check env vars
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP_USER or SMTP_PASS environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: subject || `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0C2D48; color: #E8F8F0; border-radius: 12px;">
          <h2 style="color: #F0D840; margin-bottom: 24px;">New Contact Form Message</h2>
          <p><strong style="color: #6ECB63;">Name:</strong> ${name}</p>
          <p><strong style="color: #6ECB63;">Email:</strong> <a href="mailto:${email}" style="color: #3498DB;">${email}</a></p>
          <p><strong style="color: #6ECB63;">Subject:</strong> ${subject || "N/A"}</p>
          <hr style="border: 1px solid #2A6888; margin: 16px 0;" />
          <p><strong style="color: #6ECB63;">Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          <hr style="border: 1px solid #2A6888; margin: 16px 0;" />
          <p style="font-size: 12px; color: #88C8B8;">Sent from dhayalan-dev.vercel.app contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to send: ${errorMessage}` },
      { status: 500 }
    );
  }
}
