"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";

const terms = [
  "Designer Gráfica.", 
  "Motion Designer.", 
  "Editora de Vídeos.",
];

const longestTerm = terms.reduce((a, b) => a.length > b.length ? a : b, "");

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const hasUserScrolled = useRef(false);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTerm = terms[currentTermIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentTerm.substring(0, currentText.length + 1);
        setCurrentText(nextText);

        if (nextText === currentTerm) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const nextText = currentText.substring(0, currentText.length - 1);
        setCurrentText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setCurrentTermIndex((prev) => (prev + 1) % terms.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTermIndex]);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Quando o texto está totalmente visível em repouso, os estilos inline de
    // opacity/transform são REMOVIDOS (não apenas setados para "1"/"translateY(0px)").
    // Uma vez que o JS aplica opacity/transform inline, o navegador promove o
    // elemento para sua própria camada de composição da GPU, e o texto passa a
    // renderizar com anti-aliasing em escala de cinza em vez de subpixel — ficando
    // perceptivelmente menos nítido/brilhante mesmo com opacity:1, e essa troca
    // persiste indefinidamente enquanto o inline style existir. Remover a
    // propriedade devolve o elemento ao fluxo normal de pintura do CSS.
    const setHeroVisualState = (el: HTMLDivElement, opacity: number, translateY: number) => {
      if (opacity >= 1 && translateY === 0) {
        el.style.removeProperty("opacity");
        el.style.removeProperty("transform");
        return;
      }
      el.style.opacity = String(opacity);
      el.style.transform = `translateY(-${translateY}px)`;
    };

    const applyScrollEffect = () => {
      if (!textRef.current) return;
      if (isMobile && !hasUserScrolled.current) return;

      textRef.current.style.transition = "none";

      const progress = Math.min(1, (window.scrollY / window.innerHeight) * 2);
      const translateY = progress * 60;

      if (isMobile) {
        const hero = document.getElementById("hero");
        const projects = document.getElementById("projetos");
        if (hero && projects) {
          const heroHeight = hero.getBoundingClientRect().height;
          if (heroHeight > 0) {
            const top = projects.getBoundingClientRect().top;
            // O scroll por toque tem inércia: mesmo depois que o dedo já soltou,
            // a página ainda desliza mais alguns pixels perto do topo. Como a
            // fórmula abaixo é bem íngreme nessa região, esse resquício de
            // inércia gera uma opacidade visivelmente abaixo de 100% por um
            // instante. Uma margem generosa evita esse "flash" perto do topo.
            const topRestThreshold = heroHeight * 0.08;
            if (window.scrollY <= topRestThreshold || top >= heroHeight - topRestThreshold) {
              setHeroVisualState(textRef.current, 1, 0);
            } else {
              const opacity = Math.min(1, Math.max(0, (top * 2) / heroHeight - 1));
              setHeroVisualState(textRef.current, opacity, translateY);
            }
            return;
          }
        }
      }

      setHeroVisualState(textRef.current, 1 - progress, translateY);
    };

    const markUserScrolled = () => {
      hasUserScrolled.current = true;
    };

    // Escrever no style a cada evento de "scroll" (que pode disparar dezenas de
    // vezes por frame) pode dessincronizar a camada de composição do elemento
    // do estado real do DOM. Agendar via requestAnimationFrame garante no
    // máximo uma escrita por frame, alinhada ao ciclo de repaint do navegador.
    let rafId: number | null = null;
    const scheduleApply = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        applyScrollEffect();
      });
    };

    applyScrollEffect();

    const onScroll = () => scheduleApply();
    window.addEventListener("scroll", onScroll, { passive: true });

    let settleTimeout: ReturnType<typeof setTimeout> | null = null;
    const onScrollSettled = () => scheduleApply();
    const onScrollDebounced = () => {
      if (settleTimeout !== null) clearTimeout(settleTimeout);
      settleTimeout = setTimeout(onScrollSettled, 150);
    };

    if (isMobile) {
      window.addEventListener("wheel", markUserScrolled, { passive: true });
      window.addEventListener("pointerdown", markUserScrolled, { passive: true });
      window.addEventListener("keydown", markUserScrolled);
      window.addEventListener("scrollend", onScrollSettled, { passive: true });
      window.addEventListener("scroll", onScrollDebounced, { passive: true });
    }

    // O toolbar do navegador mobile expande/recolhe durante o scroll, mudando a
    // altura real da viewport (100dvh) depois que o último evento de scroll já
    // disparou. Sem isso, a opacidade calculada com a geometria antiga fica
    // "presa" e não volta a 100% ao chegar no topo.
    window.addEventListener("resize", onScrollSettled);
    window.visualViewport?.addEventListener("resize", onScrollSettled);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (settleTimeout !== null) clearTimeout(settleTimeout);
      window.removeEventListener("wheel", markUserScrolled);
      window.removeEventListener("pointerdown", markUserScrolled);
      window.removeEventListener("keydown", markUserScrolled);
      window.removeEventListener("scrollend", onScrollSettled);
      window.removeEventListener("scroll", onScrollDebounced);
      window.removeEventListener("resize", onScrollSettled);
      window.visualViewport?.removeEventListener("resize", onScrollSettled);
    };
  }, []);

  return (
    <section id="hero" className="h-dvh sticky top-0 z-0 bg-background relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-[150%] opacity-[0.01] pointer-events-none"
        aria-hidden="true"
      >
        <Image 
          src="/icons/Logo-simbolos.svg" 
          alt="" 
          width={1480} 
          height={1237}
          className="w-full h-full object-cover"
        />
      </div>
      <div 
        className="absolute left-[-750px] w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(46, 56, 107, 0.3) 0%, transparent 70%)",
          zIndex: 1
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute right-[-750px] w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(46, 56, 107, 0.3) 0%, transparent 70%)",
          zIndex: 1
        }}
        aria-hidden="true"
      />
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center pt-20 opacity-100">
        <div className="max-w-6xl mx-auto px-6 text-left relative z-10">
            <Image src="/icons/Simbolos.svg" alt="" width={72} height={72} className="mb-6" />
          <h1 className="inline md:block text-[40px] md:text-6xl font-light text-white leading-[48px] md:leading-none md:mb-4">
            Oi, eu sou a{" "}
            <br className="md:hidden" />
            <span className="font-serif italic">Laísla Alles</span><span className="font-serif italic">,&nbsp;</span>
          </h1>
          <p className="inline md:block text-[40px] md:text-6xl font-light text-white leading-[48px] md:leading-none md:mb-8">
            sou{" "}
            <br className="md:hidden" />
            <span className="relative inline-block text-left max-w-full align-bottom">
              <span className="font-serif italic text-[#3366FF] invisible select-none" aria-hidden="true">
                {longestTerm}
              </span>
              <span className="absolute left-0 top-0 w-full whitespace-nowrap font-serif italic text-[#3366FF]">
                {currentText}
                <span className="animate-pulse font-thin scale-x-50 inline-block">|</span>
              </span>
            </span>
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl font-light mt-8 md:mt-0">
            E seja bem-vindo(a) ao meu portfólio!
          </p>
        </div>
        <div className="mt-24 animate-bounce">
          <Image src="/icons/Arrow-Down.svg" alt="" width={24} height={24} className="text-muted" />
        </div>
      </div>
    </section>
  );
}
