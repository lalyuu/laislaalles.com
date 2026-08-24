"use client";

import Image from "next/image";
import { useActionState, useRef, useState } from "react";
import { sendContact } from "@/actions/send-contact";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const isError = !!state?.error;
  const isSuccess = !!state?.success;

  const handleFormInput = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  const inputTimers = useRef<Record<string, NodeJS.Timeout>>({});

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value.trim();
    const isEmpty = !value;

    if (inputTimers.current[e.target.name]) {
      clearTimeout(inputTimers.current[e.target.name]);
    }

    if (isEmpty) {
      setTouchedFields(prev => ({ ...prev, [e.target.name]: true }));
      setFieldErrors(prev => ({ ...prev, [e.target.name]: "" }));
    } else if (e.target.name === "email" && !isValidEmail(e.target.value)) {
      setTouchedFields(prev => ({ ...prev, [e.target.name]: true }));
      setFieldErrors(prev => ({ ...prev, [e.target.name]: "E-mail inválido" }));
    } else {
      setTouchedFields(prev => ({ ...prev, [e.target.name]: false }));
      setFieldErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const name = target.name;
    const value = target.value.trim();

    if (inputTimers.current[name]) {
      clearTimeout(inputTimers.current[name]);
    }

    if (!value) {
      setTouchedFields(prev => ({ ...prev, [name]: true }));
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    } else {
      setTouchedFields(prev => ({ ...prev, [name]: false }));
      setFieldErrors(prev => ({ ...prev, [name]: "" }));

      inputTimers.current[name] = setTimeout(() => {
        if (name === "email" && !isValidEmail(target.value)) {
          setTouchedFields(prev => ({ ...prev, [name]: true }));
          setFieldErrors(prev => ({ ...prev, [name]: "E-mail inválido" }));
        }
      }, 1000);
    }
  };

  const isLoading = pending;

  const buttonLabel = isLoading
    ? "Enviando..."
    : isError
    ? "Erro ao enviar"
    : "Enviar mensagem";

  const isFormDisabled = isLoading || isError || !isFormValid;

  const buttonClasses = `
    group w-full px-6 py-3 rounded-[50px] text-sm flex items-center justify-center gap-2 transition-all
    border outline-none
    focus-visible:ring-2 focus-visible:ring-[rgba(133,156,224,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#14171f]
    ${isFormDisabled && !isLoading && !isError
      ? "border-transparent bg-[#191d2a] text-[#4a5270bf] opacity-[55%] cursor-not-allowed"
      : !isLoading && !isError
      ? "border-[rgba(133,156,224,0.25)] bg-[#191d2a] text-[#ebebeb] hover:bg-[#20263a] active:bg-[#1e2438] active:scale-[0.98]"
      : isLoading
      ? "border-[rgba(133,156,224,0.25)] bg-[#191d2a] text-[#ebebeb] cursor-not-allowed"
      : "border-[rgba(133,156,224,0.25)] bg-[#191d2a] text-[#ebebeb] cursor-not-allowed"
    }
  `;

  return (
    <form ref={formRef} action={action} onInput={handleFormInput} className="flex flex-col gap-4 text-left">
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
          <label htmlFor="name" className="relative text-sm text-muted font-medium pl-4">
            {touchedFields.name && (
              <span className="absolute left-2 text-[#859ce0]">*</span>
            )}
            Nome completo
            {touchedFields.name && (
              <span className="text-[#859ce0]/50 text-xs font-light ml-2">
                (Campo obrigatório)
              </span>
            )}
          </label>
          <input
            name="name"
            placeholder="Seu nome completo"
            required
            onBlur={handleBlur}
            onInput={handleInput}
            className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="relative text-sm text-muted font-medium pl-4">
            {touchedFields.email && (
              <span className="absolute left-2 text-[#859ce0]">*</span>
            )}
            E-mail
            {touchedFields.email && (
              <span className="text-[#859ce0]/50 text-xs font-light ml-2">
                {fieldErrors.email === "E-mail inválido"
                  ? "(E-mail inválido)"
                  : "(Campo obrigatório)"}
              </span>
            )}
          </label>
          <input
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            onBlur={handleBlur}
            onInput={handleInput}
            className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="relative text-sm text-muted font-medium pl-4">
          {touchedFields.subject && (
            <span className="absolute left-2 text-[#859ce0]">*</span>
          )}
          Assunto
          {touchedFields.subject && (
            <span className="text-[#859ce0]/50 text-xs font-light ml-2">
              (Campo obrigatório)
            </span>
          )}
        </label>
        <input
          name="subject"
          placeholder="Sobre o que gostaria de falar?"
          required
          onBlur={handleBlur}
          onInput={handleInput}
          className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="relative text-sm text-muted font-medium pl-4">
          {touchedFields.message && (
            <span className="absolute left-2 text-[#859ce0]">*</span>
          )}
          Mensagem
          {touchedFields.message && (
            <span className="text-[#859ce0]/50 text-xs font-light ml-2">
              (Campo obrigatório)
            </span>
          )}
        </label>
        <textarea
          name="message"
          placeholder="Descreva sua dúvida ou proposta…"
          required
          rows={7}
          onBlur={handleBlur}
          onInput={handleInput}
          className="w-full px-4 py-3 rounded-xl bg-[#191d2a] text-foreground placeholder:text-muted/40 placeholder:font-light placeholder:text-sm outline-none focus:shadow-[inset_0_0_0_1px_rgba(133,156,224,0.3)] transition-shadow resize-none"
        />
        <div className="text-right">
          <p className="text-muted/60 text-xs font-light">
            *Tempo de resposta aproximado: 24h
          </p>
        </div>
      </div>
      {isSuccess ? (
        <div className="group w-full px-6 py-3 rounded-[50px] text-sm flex items-center justify-center gap-2 border border-[rgba(133,156,224,0.25)] bg-[#191d2a] text-[#ebebeb]">
          Mensagem enviada, obrigado!
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="send-icon">
            <g clipPath="url(#clip0_435_40)">
              <path d="M7.04478 0.060988C11.4956 -0.485546 15.4321 2.73708 15.9433 7.04744C16.464 11.4368 13.3342 15.4045 8.9378 15.9425C4.63208 16.4698 0.614474 13.3539 0.0649207 9.03931C-0.488901 4.67771 2.52884 0.614994 7.04478 0.060988ZM7.68077 1.00675C3.71118 1.18821 0.783075 4.5795 1.01037 8.42125C1.23552 12.2256 4.51897 15.1996 8.35304 15.001C12.1871 14.8025 15.1814 11.519 14.9893 7.66657C14.8004 3.87819 11.6173 0.827417 7.6797 1.00675H7.68077Z" fill="currentColor" />
              <path d="M5.19892 11.3972L3.53639 9.01999C3.43288 8.87161 3.57587 8.44784 3.73167 8.36991C3.95362 8.25996 4.27482 8.34536 4.43275 8.56525L6.21586 11.0567L11.6591 4.18551C11.7936 4.01578 12.1905 4.05315 12.326 4.15776C12.4808 4.27624 12.5597 4.65305 12.4114 4.84092L7.18371 11.4452C6.94362 11.7484 6.56373 11.9448 6.23614 11.9555C5.85412 11.9672 5.44115 11.7452 5.19785 11.3961L5.19892 11.3972Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_435_40">
                <rect width="16" height="16" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ) : (
        <button
          type="submit"
          disabled={isFormDisabled}
          className={buttonClasses}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#626c9c" strokeWidth="4" />
                <path className="opacity-75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10" fill="none" />
              </svg>
              Enviando...
            </>
          ) : isError ? (
            <span className="flex flex-col items-center gap-px">
              <span className="flex items-center gap-2">
                Ops! Ocorreu um erro.
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400">
                  <g clipPath="url(#clip0_437_44)">
                    <path d="M7.14971 0.0465007C11.5981 -0.437033 15.4889 2.84232 15.9536 7.14143C16.4306 11.5397 13.2368 15.4669 8.85039 15.9535C4.46394 16.4401 0.560749 13.2662 0.0558124 8.95778C-0.449125 4.64937 2.64865 0.539333 7.14971 0.0465007ZM7.68253 1.00737C3.71738 1.18714 0.786887 4.58118 1.01612 8.42155C1.24536 12.2619 4.5228 15.2003 8.35475 15.0019C12.1867 14.8036 15.176 11.5242 14.9902 7.68385C14.8043 3.84348 11.6291 0.830693 7.68253 1.00737Z" fill="currentColor" />
                    <path d="M11.3193 10.6191C11.4866 10.7834 11.5082 11.115 11.4401 11.2607C11.3719 11.4064 10.9197 11.5955 10.7865 11.4653L7.99846 8.70667L5.21356 11.4777C5.10204 11.5893 4.70243 11.4436 4.61569 11.332C4.51656 11.2049 4.47629 10.8392 4.6033 10.709L7.30456 7.99997L4.71172 5.41493C4.52896 5.23205 4.4639 4.96239 4.57852 4.73922C4.68075 4.53775 5.10824 4.41686 5.3003 4.60904L8.00156 7.30567L10.7059 4.60284C10.8298 4.48196 11.2016 4.51605 11.3255 4.61524C11.4494 4.71442 11.5578 5.12977 11.4463 5.24135L8.69856 8.00617L11.3162 10.6222L11.3193 10.6191Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_437_44">
                      <rect width="16" height="16" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-muted/40 text-xs">
                {state?.error || "Tente novamente em alguns segundos"}
              </span>
            </span>
          ) : (
            <>
              {buttonLabel}
              <svg width="14" height="15" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${!isFormDisabled ? "send-icon" : ""}`}>
                <path d="M2.28275 15.9156C1.58867 16.282 0.847735 16.0731 0.428945 15.6006C-0.0396319 15.0707 -0.150919 14.3014 0.2298 13.6534L3.54791 8.03258L0.2708 2.5178C-0.115775 1.86971 -0.0952754 1.11866 0.37623 0.56143C0.800877 0.0587091 1.57696 -0.183566 2.23296 0.161676L15.3678 7.05743C15.725 7.24519 15.9623 7.57226 15.9945 7.89025C16.0325 8.26577 15.8744 8.76547 15.5054 8.95929L2.28275 15.9186V15.9156ZM13.8449 7.47535L1.90496 1.19134C1.66482 1.06415 1.40124 1.05204 1.21967 1.1974C1.08788 1.3034 1.00002 1.67892 1.10838 1.86669L4.4587 7.51472L13.8449 7.47838V7.47535ZM1.9606 14.892L13.8419 8.6201L4.44406 8.58679L1.14938 14.1531C1.00588 14.4074 1.03809 14.7345 1.21674 14.895C1.39538 15.0555 1.66482 15.0646 1.95768 14.895L1.9606 14.892Z" fill="currentColor" />
              </svg>
            </>
          )}
        </button>
      )}
    </form>
  );
}