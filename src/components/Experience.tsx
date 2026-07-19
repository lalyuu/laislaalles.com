"use client";

import { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    cargo: "Designer Gráfica",
    empresa: "Macro Publicidade",
    inicio: "Junho 2023",
    saida: "Atualmente",
    modalidade: "Presencial",
    logoSrc: "/assets/Macro-logo.png",
    descricao:
      "Criação de artes digitais e impressas para campanhas publicitárias. Desenvolvimento de identidades visuais, peças gráficas e materiais institucionais. Colaboração com a equipe de criação para garantir a consistência visual dos projetos.",
  },
  {
    id: 2,
    cargo: "Motion Designer",
    empresa: "Panamericana",
    inicio: "Janeiro 2022",
    saida: "Maio 2023",
    modalidade: "Remoto",
    logoSrc: "/assets/Panamericana-logo.png",
    descricao:
      "Produção de animações e motion graphics para redes sociais e campanhas digitais. Criação de vinhetas, GIFs animados e vídeos institucionais. Edição e pós-produção de conteúdo audiovisual.",
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(experiences[0].id);

  const activeExp = experiences.find((exp) => exp.id === activeId);

  return (
    <section id="experiencia" className="relative z-0 py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Image
            src="/icons/Experience.svg"
            alt=""
            width={28}
            height={28}
            className="text-accent"
          />
          Experiência Profissional
        </h2>
        <p className="text-muted mb-12 max-w-2xl">
          Ao longo dos últimos 3 anos, venho construindo minha trajetória como
          Designer, Motion Designer e entusiasta do audiovisual.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 items-start">
          <div className="md:col-span-3 flex flex-col gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`bg-[rgba(133,156,224,0.08)] rounded-[24px] p-5 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300 cursor-pointer ${
                  activeId === exp.id
                    ? "bg-[rgba(133,156,224,0.14)] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.55)]"
                    : "hover:bg-[rgba(133,156,224,0.11)]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] ${exp.logoSrc ? "relative overflow-hidden" : "bg-gradient-to-br from-accent/20 to-accent/5"}`}>
                    {exp.logoSrc ? (
                      <Image
                        src={exp.logoSrc}
                        alt={`Logo ${exp.empresa}`}
                        fill
                        sizes="112px"
                        quality={100}
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="/icons/User.svg"
                        alt=""
                        width={26}
                        height={26}
                        className="text-accent opacity-60"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground truncate">
                      {exp.cargo}
                    </h3>
                    <p className="text-sm text-cta truncate">{exp.empresa}</p>
                    <p className="text-sm text-muted/70">
                      {exp.inicio} — {exp.saida}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-5 relative md:pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-[rgba(133,156,224,0.15)] before:to-transparent">
            {activeExp && (
              <div className="bg-[rgba(133,156,224,0.08)] rounded-[24px] p-8 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`w-[88px] h-[88px] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] ${activeExp.logoSrc ? "relative overflow-hidden" : "bg-gradient-to-br from-accent/20 to-accent/5"}`}>
                    {activeExp.logoSrc ? (
                      <Image
                        src={activeExp.logoSrc}
                        alt={`Logo ${activeExp.empresa}`}
                        fill
                        sizes="176px"
                        quality={100}
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="/icons/User.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="text-accent opacity-60"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {activeExp.cargo}
                      </h3>
                      <span className="text-base text-cta">
                        {activeExp.empresa}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
                      <span className="text-sm text-muted">
                        {activeExp.inicio} — {activeExp.saida}
                      </span>
                      <span className="text-xs text-muted/50">|</span>
                      <span className="text-sm text-muted">
                        {activeExp.modalidade}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {activeExp.descricao}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
