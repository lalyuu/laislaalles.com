"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences, type Experience } from "@/lib/experiences";
import Reveal from "./Reveal";

function ExpandedCard({ exp, active }: { exp: Experience; active: boolean }) {
  return (
    <div className={`relative z-10 [grid-area:1/1] bg-[#14171f] rounded-[24px] p-8 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300 ${active ? "animate-content-swap" : "invisible"}`}>
      {exp.saida === "Presente" && (
        <span className="absolute top-5 right-5 text-[13px] font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Image src="/icons/Arrow-Right-Simple.svg" alt="" width={6} height={6} className="text-accent animate-point-right" />
          Atual
        </span>
      )}
      <div className="flex items-start gap-6">
        <div className={`w-[88px] h-[88px] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] ${exp.logoSrc ? "relative overflow-hidden" : "bg-gradient-to-br from-accent/20 to-accent/5"}`}>
          {exp.logoSrc ? (
            <Image
              src={exp.logoSrc}
              alt={`Logo ${exp.empresa}`}
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
          <h3 className="text-2xl font-semibold text-foreground mb-1">
            {exp.cargo}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
            <span className="text-sm text-muted">
              {exp.empresa}
            </span>
            <span className="text-sm text-muted/60 flex items-center gap-1.5">
              <Image src="/icons/Calendar.svg" alt="" width={14} height={14} className="opacity-60" />
              {exp.inicio} — {exp.saida}
            </span>
            <span className="text-sm text-muted/60 flex items-center gap-1.5">
              <Image src="/icons/Pin.svg" alt="" width={14} height={14} className="opacity-60" />
              {exp.modalidade}
            </span>
          </div>
          <p className="text-muted leading-relaxed">
            {exp.descricao}
          </p>
          {exp.conquistas && (
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-[10px] py-1.5 px-3 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.35)] mb-4">
                <Image src="/icons/Trofeu.svg" alt="" width={14} height={14} />
                <span className="text-sm text-foreground">Principais conquistas:</span>
              </div>
              <div className="flex flex-col gap-5">
                {exp.conquistas.map((item, i) => (
                  <div key={i} className="flex items-stretch gap-3">
                    <div className="w-[2px] rounded-full bg-[rgba(133,156,224,0.4)] flex-shrink-0" />
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {(() => {
                        const colonIndex = item.indexOf(':')
                        if (colonIndex === -1) return item
                        return (
                          <>
                            <span className="font-semibold text-foreground">{item.slice(0, colonIndex + 1)}</span>
                            {item.slice(colonIndex + 1)}
                          </>
                        )
                      })()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(experiences[0].id);

  return (
    <section id="experiencia" className="relative z-0 py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
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
        </Reveal>
        <Reveal delay={60}>
          <p className="text-muted mb-12">
            Ao longo dos últimos 3 anos, venho aprendendo, experimentando e evoluindo entre o design, o motion e o audiovisual.
            Cada projeto é uma oportunidade de descobrir novas formas de criar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 items-start">
          <div className="md:col-span-3 flex flex-col gap-4">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 60}>
                <div
                  onClick={() => setActiveId(exp.id)}
                  className={`relative bg-[#14171f] rounded-[20px] p-5 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300 cursor-pointer ${
                    activeId === exp.id
                      ? "bg-[#14171f] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.55)]"
                      : "hover:bg-[#1a1e2e]"
                  }`}
                >
                {exp.saida === "Presente" && (
                  <span className="absolute top-3 right-3 text-[11px] font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Image src="/icons/Arrow-Right-Simple.svg" alt="" width={6} height={6} className="text-accent animate-point-right" />
                    Atual
                  </span>
                )}
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
                    <p className="text-sm text-muted truncate">{exp.empresa}</p>
                    <p className="text-sm text-muted/60">
                      {exp.inicio} — {exp.saida}
                    </p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-5 relative md:pl-12">
            <Reveal className="absolute left-0 top-0 bottom-0 w-px" delay={80}>
              <div className="w-px h-full bg-gradient-to-b from-transparent via-[rgba(133,156,224,0.25)] to-transparent" />
            </Reveal>
            <div
              className="absolute right-[-450px] top-[-300px] w-[900px] h-[900px] rounded-full pointer-events-none z-0"
              style={{ background: "radial-gradient(circle, rgba(46, 56, 107, 0.24) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="absolute left-[-850px] bottom-[-200px] w-[800px] h-[800px] rounded-full pointer-events-none z-0"
              style={{ background: "radial-gradient(circle, rgba(46, 56, 107, 0.20) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <Reveal delay={80}>
              <div className="grid">
                {experiences.map((exp) => (
                  <ExpandedCard key={`${exp.id}-${exp.id === activeId}`} exp={exp} active={exp.id === activeId} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
