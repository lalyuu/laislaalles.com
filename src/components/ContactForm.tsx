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
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold text-foreground">
          Me envie uma mensagem!
        </p>
        <p className="text-muted text-sm">
          Preencha os dados abaixo e entrarei em contato o mais breve possível.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Seu nome completo"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#859ce0]/8 text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(184,197,224,0.8)] transition-shadow"
        />
        <input
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#859ce0]/8 text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(184,197,224,0.8)] transition-shadow"
        />
      </div>
      <input
        name="subject"
        placeholder="Sobre o que gostaria de falar?"
        required
        className="w-full px-4 py-3 rounded-xl bg-[#859ce0]/8 text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(184,197,224,0.8)] transition-shadow"
      />
      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          placeholder="Descreva sua dúvida ou proposta…"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-[#859ce0]/8 text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(184,197,224,0.8)] transition-shadow resize-none"
        />
        <div className="text-right">
          <p className="text-muted/60 text-sm font-light">
            *Tempo de resposta aproximado: 24h
          </p>
        </div>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full h-10 px-4 bg-[#ebebeb] text-[#0a0c0f] rounded-[50px] hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
      >
        {pending ? "Enviando..." : (
          <>
            Enviar mensagem
            <svg viewBox="0 0 16 16" width={16} height={16} fill="currentColor" className="shrink-0">
              <path d="M 11.669 0 C 13.982 0 15.855 1.875 15.855 4.185 L 15.855 11.815 C 15.855 14.125 13.982 16 11.669 16 L 4.041 16 C 1.728 16 -0.145 14.125 -0.145 11.815 L -0.145 4.185 C -0.145 1.875 1.728 0 4.041 0 Z M 4.041 1.169 C 2.376 1.169 1.025 2.519 1.025 4.185 L 1.025 11.815 C 1.025 13.481 2.376 14.831 4.041 14.831 L 11.669 14.831 C 13.334 14.831 14.685 13.481 14.685 11.815 L 14.685 4.185 C 14.685 2.519 13.334 1.169 11.669 1.169 Z M 7.883 5 C 8.135 4.748 8.544 4.748 8.796 5 L 11.341 7.545 C 11.364 7.568 11.385 7.592 11.404 7.618 C 11.413 7.631 11.422 7.643 11.43 7.656 C 11.433 7.66 11.435 7.665 11.438 7.67 L 11.444 7.679 C 11.447 7.684 11.45 7.69 11.453 7.696 C 11.457 7.702 11.46 7.708 11.462 7.713 L 11.467 7.724 L 11.473 7.736 L 11.497 7.798 C 11.518 7.862 11.53 7.93 11.53 8 C 11.53 8.094 11.509 8.183 11.473 8.264 C 11.471 8.268 11.47 8.271 11.468 8.275 C 11.466 8.279 11.464 8.284 11.461 8.288 C 11.459 8.292 11.456 8.298 11.453 8.304 C 11.45 8.309 11.446 8.316 11.444 8.319 C 11.443 8.321 11.44 8.327 11.438 8.331 C 11.436 8.334 11.433 8.338 11.432 8.341 C 11.428 8.347 11.424 8.353 11.42 8.359 C 11.419 8.36 11.419 8.361 11.418 8.361 C 11.418 8.362 11.417 8.363 11.416 8.364 C 11.413 8.369 11.409 8.375 11.405 8.381 L 11.402 8.384 L 11.373 8.42 C 11.363 8.432 11.352 8.444 11.341 8.455 L 8.796 11 C 8.544 11.252 8.135 11.252 7.883 11 C 7.632 10.749 7.632 10.341 7.883 10.089 L 9.328 8.645 L 4.826 8.645 C 4.469 8.644 4.181 8.355 4.181 8 C 4.181 7.645 4.469 7.356 4.826 7.356 L 9.328 7.356 L 7.883 5.911 C 7.632 5.659 7.632 5.251 7.883 5 Z" />
            </svg>
          </>
        )}
      </button>
      {state?.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}
    </form>
  );
}
