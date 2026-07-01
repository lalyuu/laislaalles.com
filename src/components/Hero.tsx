"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const terms = ["Designer Gráfica.", "Motion Designer.", "Editora de Vídeos.","Apaixonada por Jogos.", "Apaixonada por Terror.", "Apaixonada por Gatos."];

export default function Hero() {
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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
          Oi, eu sou a <span className="font-serif italic">Laísla Alles</span><span className="font-serif italic">,</span>
        </h1>
        <p className="text-4xl md:text-6xl font-light text-white mb-8">
          sou <span className="font-serif italic text-[#3366FF]">{currentText}</span><span className="font-serif italic text-[#3366FF] animate-pulse font-thin scale-x-50 inline-block">|</span>
        </p>
        <p className="text-lg md:text-xl text-white max-w-2xl font-light">
          E seja bem-vindo(a) ao meu portfólio!
        </p>
      </div>
      <div className="mt-16 animate-bounce">
        <Image src="/icons/Arrow-Down.svg" alt="" width={32} height={32} className="text-muted" />
      </div>
    </section>
  );
}
