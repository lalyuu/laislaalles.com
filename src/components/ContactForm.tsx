"use client";

import Image from "next/image";
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
      <div className="flex flex-col gap-1 mb-4">
        <p className="text-xl font-bold text-foreground flex items-center gap-2.5">
          <Image src="/icons/carta.svg" alt="" width={22} height={22} />
          Me envie uma mensagem!
        </p>
        <p className="text-muted text-sm">
          Preencha os dados abaixo e entrarei em contato o mais breve possível.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-muted font-medium pl-4">Nome completo</label>
          <input
            name="name"
            placeholder="Seu nome completo"
            required
            className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-muted font-medium pl-4">E-mail</label>
          <input
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="text-sm text-muted font-medium pl-4">Assunto</label>
        <input
          name="subject"
          placeholder="Sobre o que gostaria de falar?"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-muted font-medium pl-4">Mensagem</label>
        <textarea
          name="message"
          placeholder="Descreva sua dúvida ou proposta…"
          required
          rows={7}
          className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow resize-none"
        />
        <div className="text-right">
          <p className="text-muted/60 text-xs font-light">
            *Tempo de resposta aproximado: 24h
          </p>
        </div>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="group w-full px-6 py-3 border border-[rgba(133,156,224,0.25)] bg-[#191d2a] text-[#ebebeb] rounded-[50px] hover:bg-[#20263a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
      >
        {pending ? "Enviando..." : (
          <>
            Enviar mensagem
            <Image src="/icons/send.svg" alt="" width={14} height={15} className="send-icon" />
          </>
        )}
      </button>
      {state?.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}
    </form>
  );
}