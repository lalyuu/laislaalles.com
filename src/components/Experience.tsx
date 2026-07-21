"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/lib/experiences";

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
        <p className="text-muted mb-12">
          Ao longo dos últimos 3 anos, venho construindo minha trajetória como
          Designer, Motion Designer e entusiasta do audiovisual.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 items-start">
          <div className="md:col-span-3 flex flex-col gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`relative bg-[rgba(133,156,224,0.08)] rounded-[24px] p-5 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300 cursor-pointer ${
                  activeId === exp.id
                    ? "bg-[rgba(133,156,224,0.14)] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.55)]"
                    : "hover:bg-[rgba(133,156,224,0.11)]"
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
            ))}
          </div>

          <div className="md:col-span-5 relative md:pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-[rgba(133,156,224,0.15)] before:to-transparent">
            {activeExp && (
              <div className="relative bg-[rgba(133,156,224,0.08)] rounded-[24px] p-8 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300">
                {activeExp.saida === "Presente" && (
                  <span className="absolute top-5 right-5 text-[13px] font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Image src="/icons/Arrow-Right-Simple.svg" alt="" width={6} height={6} className="text-accent animate-point-right" />
                    Atual
                  </span>
                )}
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
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {activeExp.cargo}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
                      <span className="text-base text-muted">
                        {activeExp.empresa}
                      </span>
                      <span className="text-sm text-muted/60 flex items-center gap-1.5">
                        <Image src="/icons/Calendar.svg" alt="" width={14} height={14} className="opacity-60" />
                        {activeExp.inicio} — {activeExp.saida}
                      </span>
                      <span className="text-sm text-muted/60 flex items-center gap-1.5">
                        <Image src="/icons/Pin.svg" alt="" width={14} height={14} className="opacity-60" />
                        {activeExp.modalidade}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {activeExp.descricao}
                    </p>
                    {activeExp.conquistas && (
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                          Principais conquistas
                        </h4>
                        <div className="relative after:content-[''] after:absolute after:left-0 after:w-[15px] after:bottom-0 after:h-[30px] after:bg-[#141820]">
                          <div className="absolute left-[7px] top-[10px] bottom-0 w-px bg-[rgba(133,156,224,0.2)]" />
                          <div className="relative z-10 flex flex-col gap-5">
                            {activeExp.conquistas.map((item, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-[14px] h-[14px] mt-[3px] rounded-full border-[1.5px] border-[rgba(133,156,224,0.3)] bg-[#0a0c0f] shadow-[inset_0_0_0_10px_rgba(133,156,224,0.08)] flex-shrink-0" />
                                <p className="text-sm text-muted leading-relaxed flex-1">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
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
