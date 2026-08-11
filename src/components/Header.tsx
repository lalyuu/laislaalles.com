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

const SOCIAL_LINKS = [
  {
    href: "https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0",
    src: "/icons/WhatsApp.svg",
    alt: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/designlaisla/",
    src: "/icons/Instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/laisla-alles/",
    src: "/icons/LinkedIn.svg",
    alt: "LinkedIn",
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const atBottom = window.scrollY + window.innerHeight >= documentHeight - 2;

      let current = "";
      if (atBottom) {
        const labeled = NAV_ITEMS.filter((item) => item.label);
        current = labeled[labeled.length - 1]?.href ?? "";
      } else {
        const trigger = window.scrollY + window.innerHeight * 0.5;
        for (const item of NAV_ITEMS) {
          const section = document.querySelector(item.href) as HTMLElement | null;
          if (!section) continue;
          if (section.offsetTop <= trigger) {
            current = item.href;
          }
        }
      }

      setActiveSection(current === "#hero" ? "" : current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-[#161a27]/80 backdrop-blur-md rounded-full shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#" onClick={handleNavClick}>
            <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-8 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-4">
            {NAV_ITEMS.filter((item) => item.label).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm transition-all duration-300 px-4 py-1.5 rounded-full border text-muted ${
                  activeSection === href
                    ? "bg-[rgba(133,156,224,0.08)] border-[rgba(133,156,224,0.5)] scale-105"
                    : "bg-[rgba(133,156,224,0.04)] border-[rgba(133,156,224,0.3)] hover:border-[rgba(133,156,224,0.5)] hover:scale-105"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-border">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                  <Image src={social.src} alt={social.alt} width={24} height={24} />
                </a>
              ))}
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

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:text-foreground transition-all duration-300 bg-[rgba(133,156,224,0.04)] border border-[rgba(133,156,224,0.3)] hover:border-[rgba(133,156,224,0.5)]"
          >
            <Image src="/icons/menu-h.svg" alt="" width={18} height={12} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[70] md:hidden"
          onClick={handleNavClick}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-0 z-[80] md:hidden flex flex-col bg-[#101318] transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button type="button" onClick={handleNavClick} aria-label="Fechar menu" className="inline-flex text-foreground">
            <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-8 w-auto" />
          </button>
          <button
            type="button"
            onClick={handleNavClick}
            aria-label="Fechar menu"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground transition-all duration-300 bg-[rgba(133,156,224,0.04)] border border-[rgba(133,156,224,0.3)]"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-6 mt-8 flex-1 overflow-y-auto">
          {NAV_ITEMS.filter((item) => item.label).map(({ href, label }, index) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`text-xl font-light py-3 border-b border-[rgba(133,156,224,0.15)] transition-colors flex items-center justify-between ${
                activeSection === href ? "text-accent" : "text-foreground"
              }`}
            >
              {label}
              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-muted/50">
                <path d="M3 8h10" />
                <path d="M8 3l5 5-5 5" />
              </svg>
            </a>
          ))}
        </nav>

        <div className="px-6 pb-10 pt-6 flex flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full text-muted hover:text-foreground transition-colors bg-[rgba(133,156,224,0.08)]"
              >
                <Image src={social.src} alt={social.alt} width={22} height={22} />
              </a>
            ))}
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-cta text-white text-sm rounded-full hover:bg-cta/90 transition-colors"
          >
            <Image src="/icons/Download.svg" alt="" width={16} height={16} />
            Currículo
          </a>
        </div>
      </div>
    </>
  );
}