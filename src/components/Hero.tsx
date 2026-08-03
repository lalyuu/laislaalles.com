"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const terms = [
  "Designer Gráfica.", 
  "Motion Designer.", 
  "Editora de Vídeos.",
];

const longestTerm = terms.reduce((a, b) => a.length > b.length ? a : b, "");

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, (window.scrollY / window.innerHeight) * 2);
      if (textRef.current) {
        textRef.current.style.transform = `translateY(-${progress * 60}px)`;
        textRef.current.style.opacity = String(1 - progress);
      }
    };

    const raf = window.requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="hero" className="h-screen sticky top-0 z-0 bg-background relative overflow-hidden">
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
        className="absolute left-[-600px] w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(46, 56, 107, 0.3) 0%, transparent 70%)",
          zIndex: 1
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute right-[-600px] w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(46, 56, 107, 0.3) 0%, transparent 70%)",
          zIndex: 1
        }}
        aria-hidden="true"
      />
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center pt-20 opacity-0">
        <div className="max-w-6xl mx-auto px-6 text-left relative z-10">
            <Image src="/icons/Simbolos.svg" alt="" width={72} height={72} className="mb-6" />
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Oi, eu sou a <span className="font-serif italic">Laísla Alles</span><span className="font-serif italic">,</span>
          </h1>
          <p className="text-4xl md:text-6xl font-light text-white mb-8">
            sou{" "}
            <span className="relative inline-block text-left">
              <span className="font-serif italic text-[#3366FF] invisible" aria-hidden="true">
                {longestTerm}
              </span>
              <span className="absolute left-0 top-0 whitespace-nowrap font-serif italic text-[#3366FF]">
                {currentText}
                <span className="animate-pulse font-thin scale-x-50 inline-block">|</span>
              </span>
            </span>
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl font-light">
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
