"use client";

import { useActionState } from "react";
import { sendContact } from "@/actions/send-contact";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, null);

  if (state?.success) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-green-400 font-medium">
          Mensagem enviada com sucesso!
        </p>
        <p className="text-muted mt-2">
          Obrigada pelo contato, responderei em breve.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Nome completo"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#1c2235] text-foreground placeholder:text-muted outline-none shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.6)] transition-shadow"
        />
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#1c2235] text-foreground placeholder:text-muted outline-none shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.6)] transition-shadow"
        />
      </div>
      <input
        name="subject"
        placeholder="Assunto"
        required
        className="w-full px-4 py-3 rounded-xl bg-[#1c2235] text-foreground placeholder:text-muted outline-none shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.6)] transition-shadow"
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        required
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-[#1c2235] text-foreground placeholder:text-muted outline-none shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.6)] transition-shadow resize-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="self-start px-6 py-3 bg-cta text-white rounded-full hover:bg-cta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {pending ? "Enviando..." : "Enviar mensagem"}
      </button>
      {state?.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}
    </form>
  );
}
