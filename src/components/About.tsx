"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const photoTarget = useRef({ x: 0, y: 0 });
  const photoCurrent = useRef({ x: 0, y: 0 });
  const photoRaf = useRef<number | null>(null);
  const photoEnabled = useRef(true);

  const competencias = [
    "Captação de vídeo",
    "Criação de conteúdo para redes sociais",
    "Desenvolvimento de artes digitais e impressas",
    "Design de interfaces digitais",
    "Edição de vídeos",
    "Motion Design",
  ];

  const habilidades = [
    "Colaboração",
    "Empatia",
    "Foco e concentração",
    "Paciência",
    "Planejamento e organização",
    "Proatividade",
    "Rápido aprendizado",
  ];

  const ferramentas = [
    { nome: "Photoshop", icone: "/icons/Photoshop.svg" },
    { nome: "Illustrator", icone: "/icons/Illustrator.svg" },
    { nome: "After Effects", icone: "/icons/After Effects.svg" },
    { nome: "Premiere", icone: "/icons/Premiere.svg" },
    { nome: "Bridge", icone: "/icons/Bridge.svg" },
    { nome: "CapCut", icone: "/icons/CapCut.svg" },
    { nome: "Figma", icone: "/icons/Figma.svg" },
    { nome: "Framer", icone: "/icons/Framer.svg" },
    { nome: "Notion", icone: "/icons/Notion.svg" },
  ];

  const [gradientTransform, setGradientTransform] = useState("translateY(-50%)");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.15;
    if (distance === 2) return 1.05;
    return 1;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      photoEnabled.current = false;
    }
    return () => {
      if (photoRaf.current != null) cancelAnimationFrame(photoRaf.current);
    };
  }, []);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = 1 - rect.bottom / (windowHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        const translateY = (clampedProgress - 0.5) * 200;

        setGradientTransform(`translateY(calc(-50% + ${translateY}px))`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-24 bg-background relative z-0 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-[rgba(133,156,224,0.15)] before:to-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgba(133,156,224,0.15)] after:to-transparent"
    >
      <div 
        className="absolute left-[-600px] w-[1200px] h-[1200px] rounded-full pointer-events-none z-0"
        style={{
          top: "50%",
          transform: gradientTransform,
          background: "radial-gradient(circle, rgba(46, 56, 107, 0.25) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute right-[-600px] w-[1200px] h-[1200px] rounded-full pointer-events-none z-0"
        style={{
          top: "50%",
          transform: gradientTransform,
          background: "radial-gradient(circle, rgba(46, 56, 107, 0.25) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-[124px]">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <img src="/icons/User.svg" alt="" width={28} height={28} className="text-accent" />
                Sobre mim
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-muted leading-relaxed mb-6">
                Oi! Eu sou a Laísla Alles, formada em Design Gráfico, com 3 anos de experiência e apaixonada pelo audiovisual.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Nem sempre eu soube que queria trabalhar com design, mas sempre gostei de criar. Foi na adolescência, acompanhando a popularidade do YouTube e assistindo a horas e horas de vídeos que descobri a edição e encontrei um universo de possibilidades.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Hoje, meu trabalho transita entre o design, o motion e o audiovisual, sempre buscando desenvolver projetos que despertem interesse, curiosidade e tragam aquele brilho nos olhos de quem vê.
              </p>
              <p className="text-muted leading-relaxed mb-12">
                No momento, busco aprofundar meus conhecimentos na área com foco na especialização em Motion Design, mas sempre curiosa para explorar novas formas de colocar minha criatividade em prática.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-cta text-white rounded-full hover:bg-cta/90 transition-colors flex items-center gap-2"
                >
                  <img src="/icons/Download.svg" alt="" width={18} height={18} />
                  Currículo
                </a>
                <a
                  href="#contato"
                  className="px-6 py-2 border border-border rounded-full text-foreground hover:bg-[#14171f] transition-colors flex items-center gap-2"
                >
                  <img src="/icons/Chat.svg" alt="" width={18} height={18} />
                  Fale comigo!
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div
              className="w-[405px] h-[535px]"
              onMouseMove={(e) => {
                if (!photoEnabled.current) return;
                const rect = e.currentTarget.getBoundingClientRect();
                photoTarget.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
                photoTarget.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
                if (photoRaf.current == null) {
                  const loop = () => {
                    const c = photoCurrent.current;
                    const t = photoTarget.current;
                    c.x += (t.x - c.x) * 0.04;
                    c.y += (t.y - c.y) * 0.04;
                    if (photoCardRef.current) {
                      photoCardRef.current.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
                    }
                    if (Math.abs(c.x - t.x) < 0.1 && Math.abs(c.y - t.y) < 0.1) {
                      photoRaf.current = null;
                      return;
                    }
                    photoRaf.current = requestAnimationFrame(loop);
                  };
                  photoRaf.current = requestAnimationFrame(loop);
                }
              }}
              onMouseLeave={() => {
                if (!photoEnabled.current) return;
                photoTarget.current.x = 0;
                photoTarget.current.y = 0;
              }}
            >
              <div
                ref={photoCardRef}
                className="flex items-center justify-center w-full h-full bg-accent/10 rounded-[24px] overflow-hidden outline outline-[0.5px] outline-offset-[4px] outline-[rgba(133,156,224,0.4)] will-change-transform"
              >
                <Image src="/assets/foto-perfil2.png" alt="Foto de perfil da Laísla Alles" width={640} height={800} quality={100} className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
            <Reveal>
              <h3 className="text-[32px] font-semibold text-foreground mb-2 flex items-center gap-2">
                <img src="/icons/Pen-Tool.svg" alt="" width={22} height={22} className="text-accent" />
                Ferramentas
              </h3>
            </Reveal>
            <Reveal delay={60}>
              <div className="p-4 bg-[rgba(133,156,224,0.08)] rounded-[24px] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
                <div 
                  className="flex flex-wrap gap-10 items-center justify-center"
                  onMouseMove={(e) => {
                    const container = e.currentTarget;
                    const icons = container.querySelectorAll<HTMLElement>("[data-icon]");
                    let closest = 0;
                    let minDist = Infinity;
                    icons.forEach((icon) => {
                      const rect = icon.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const dist = Math.abs(e.clientX - centerX);
                      if (dist < minDist) {
                        minDist = dist;
                        closest = parseInt(icon.dataset.icon || "0");
                      }
                    });
                    setHoveredIndex(closest);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {ferramentas.map((ferramenta, index) => (
                    <Reveal key={ferramenta.nome} delay={index * 60}>
                      <div 
                        className="flex flex-col items-center gap-1"
                        data-icon={index}
                        style={{
                          transform: `perspective(500px) scale(${getScale(index)})`,
                          transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          transformOrigin: "center bottom"
                        }}
                      >
                        <img src={ferramenta.icone} alt={ferramenta.nome} className="w-12 h-12 text-muted" />
                        <span className="text-xs text-muted">{ferramenta.nome}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 items-stretch">
          <div className="flex flex-col h-full">
            <Reveal>
              <h3 className="text-[32px] font-semibold text-foreground mb-2 flex items-center gap-2">
                <img src="/icons/Notebook.svg" alt="" width={22} height={22} className="text-accent" />
                Competências
              </h3>
            </Reveal>
            <Reveal className="flex-1" delay={40}>
              <div className="h-full py-5 px-8 bg-[rgba(133,156,224,0.08)] rounded-[24px] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
                <Reveal group>
                  <ul>
                    {competencias.map((item, i) => (
                      <li key={item} className="text-muted reveal-item" style={{ transitionDelay: `${i * 60}ms` }}>
                        <span className="mr-3 text-[13px] font-extralight tabular-nums text-muted/40">{String(i + 1).padStart(2, "0")}.</span>{item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col h-full">
            <Reveal>
              <h3 className="text-[32px] font-semibold text-foreground mb-2 flex items-center gap-2">
                <img src="/icons/Target.svg" alt="" width={22} height={22} className="text-accent" />
                Habilidades pessoais
              </h3>
            </Reveal>
            <Reveal className="flex-1" delay={40}>
              <div className="h-full py-5 px-8 bg-[rgba(133,156,224,0.08)] rounded-[24px] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
                <Reveal group>
                  <ul>
                    {habilidades.map((item, i) => (
                      <li key={item} className="text-muted reveal-item" style={{ transitionDelay: `${i * 60}ms` }}>
                        <span className="mr-3 text-[13px] font-extralight tabular-nums text-muted/40">{String(i + 1).padStart(2, "0")}.</span>{item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
