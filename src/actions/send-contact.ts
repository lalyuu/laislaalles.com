"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(prevState: unknown, formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    return { error: "Todos os campos são obrigatórios." };
  }

  if (name.length > 60) {
    return { error: "Nome deve ter no máximo 60 caracteres." };
  }

  if (email.length > 254) {
    return { error: "E-mail deve ter no máximo 254 caracteres." };
  }

  if (subject.length > 80) {
    return { error: "Assunto deve ter no máximo 80 caracteres." };
  }

  if (message.length > 800) {
    return { error: "Mensagem deve ter no máximo 800 caracteres." };
  }

  if (!email.includes("@")) {
    return { error: "Email inválido." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "laislaalles@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch {
    return { error: "Erro ao enviar. Tente novamente." };
  }
}
