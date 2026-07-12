"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#hero", label: "" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-[#161a27]/80 backdrop-blur-md rounded-full shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#">
          <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-4">
          {NAV_ITEMS.filter((item) => item.label).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors px-4 py-1.5 rounded-full bg-[#1c2235] ${
                activeSection === href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-border">
            <a href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              <Image src="/icons/WhatsApp.svg" alt="WhatsApp" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/designlaisla/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              <Image src="/icons/Instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://www.linkedin.com/in/laisla-alles/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              <Image src="/icons/LinkedIn.svg" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-cta text-white text-sm rounded-full hover:bg-cta/90 transition-colors"
          >
            <Image src="/icons/Download.svg" alt="" width={16} height={16} />
            Currículo
          </a>
        </div>
      </div>
    </header>
  );
}
