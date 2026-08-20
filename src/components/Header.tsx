"use client";

import Image from "next/image";
import { useState, useEffect, type JSX } from "react";

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

const NAV_ICONS: Record<string, JSX.Element> = {
  "#projetos": (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 3.81 0 C 4.651 0 5.333 0.682 5.333 1.524 L 5.333 2.057 L 10.666 2.057 L 10.666 1.524 C 10.666 0.682 11.349 0 12.19 0 L 14.476 0 C 15.318 0 16 0.682 16 1.524 L 16 3.81 C 16 4.591 15.409 5.246 14.632 5.325 L 14.476 5.333 L 13.943 5.333 L 13.943 10.666 L 14.476 10.666 C 15.318 10.666 16 11.349 16 12.19 L 16 14.476 C 16 15.257 15.409 15.912 14.632 15.992 L 14.476 16 L 12.19 16 L 12.035 15.992 C 11.316 15.918 10.749 15.35 10.675 14.632 L 10.666 14.476 L 10.666 13.714 L 5.333 13.714 L 5.333 14.476 C 5.333 15.257 4.742 15.912 3.965 15.992 L 3.81 16 L 1.523 16 L 1.368 15.992 C 0.65 15.918 0.082 15.35 0.008 14.632 L 0 14.476 L 0 12.19 C 0 11.349 0.682 10.667 1.524 10.666 L 2.286 10.666 L 2.286 5.333 L 1.524 5.333 L 1.368 5.325 C 0.65 5.251 0.082 4.683 0.008 3.965 L 0 3.81 L 0 1.523 C 0 0.682 0.682 0 1.524 0 Z M 1.523 11.734 C 1.271 11.734 1.067 11.938 1.067 12.19 L 1.067 14.476 C 1.067 14.729 1.271 14.933 1.523 14.933 L 3.809 14.933 C 4.062 14.933 4.266 14.728 4.266 14.476 L 4.266 12.19 C 4.266 11.938 4.062 11.734 3.809 11.734 Z M 12.19 11.734 C 11.938 11.734 11.733 11.938 11.733 12.19 L 11.733 14.476 C 11.733 14.729 11.938 14.933 12.19 14.933 L 14.476 14.933 C 14.728 14.933 14.932 14.728 14.932 14.476 L 14.932 12.19 C 14.932 11.938 14.728 11.734 14.476 11.734 Z M 5.333 3.81 C 5.333 4.591 4.742 5.246 3.965 5.325 L 3.81 5.333 L 3.276 5.333 L 3.276 10.666 L 3.81 10.666 C 4.651 10.667 5.333 11.349 5.333 12.19 L 5.333 12.724 L 10.666 12.724 L 10.666 12.19 C 10.666 11.349 11.349 10.666 12.19 10.666 L 12.952 10.666 L 12.952 5.333 L 12.19 5.333 L 12.035 5.325 C 11.316 5.251 10.748 4.683 10.675 3.965 L 10.666 3.81 L 10.666 3.048 L 5.333 3.048 Z M 1.524 1.067 C 1.271 1.067 1.067 1.271 1.067 1.523 L 1.067 3.809 C 1.067 4.062 1.271 4.266 1.524 4.266 L 3.81 4.266 C 4.062 4.266 4.266 4.062 4.266 3.809 L 4.266 1.523 C 4.266 1.271 4.062 1.067 3.81 1.067 Z M 12.19 1.067 C 11.938 1.067 11.734 1.271 11.734 1.523 L 11.734 3.809 C 11.734 4.062 11.938 4.266 12.19 4.266 L 14.476 4.266 C 14.728 4.266 14.932 4.062 14.932 3.809 L 14.932 1.523 C 14.932 1.271 14.728 1.067 14.476 1.067 Z" fill="currentColor" />
    </svg>
  ),
  "#sobre": (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10.52 3.993 C 10.893 4.447 11.12 4.984 11.189 5.59 C 11.281 6.414 11.102 7.157 10.655 7.805 C 10.067 8.658 9.151 9.168 8.142 9.21 C 8.094 9.21 8.049 9.21 8.004 9.21 C 7.175 9.21 6.399 8.906 5.805 8.345 C 5.089 7.667 4.739 6.787 4.79 5.805 C 4.841 4.877 5.256 4.071 5.993 3.477 C 7.055 2.62 8.545 2.531 9.697 3.253 C 10.001 3.441 10.27 3.683 10.523 3.99 Z M 9.867 7.052 C 10.246 6.396 10.246 5.581 9.867 4.927 C 9.461 4.232 8.771 3.838 7.999 3.838 C 7.84 3.838 7.676 3.853 7.509 3.889 C 7.169 3.966 6.849 4.137 6.566 4.39 C 6.109 4.799 5.856 5.357 5.847 5.96 C 5.841 6.563 6.079 7.13 6.527 7.554 C 6.843 7.855 7.199 8.034 7.614 8.103 C 7.855 8.142 8.118 8.169 8.416 8.094 L 8.816 7.993 C 9.27 7.787 9.631 7.467 9.87 7.052 Z M 16 4.134 L 16 11.866 C 16 14.147 14.147 16 11.866 16 L 4.134 16 C 1.853 16 0 14.147 0 11.866 L 0 4.134 C 0 1.853 1.853 0 4.134 0 L 11.866 0 C 14.147 0 16 1.853 16 4.134 Z M 4.134 14.899 L 11.866 14.899 C 12.06 14.899 12.248 14.878 12.431 14.842 L 12.431 14.776 L 12.392 14.409 C 12.257 13.547 11.869 12.753 11.258 12.078 C 10.452 11.195 9.285 10.667 8.136 10.667 L 7.864 10.667 C 6.721 10.667 5.56 11.189 4.754 12.066 C 4.134 12.741 3.734 13.577 3.602 14.457 L 3.549 14.839 C 3.737 14.875 3.934 14.896 4.134 14.896 Z M 14.902 11.866 L 14.902 4.134 C 14.902 2.462 13.544 1.104 11.872 1.104 L 4.14 1.104 C 2.468 1.104 1.11 2.462 1.11 4.134 L 1.11 11.866 C 1.11 12.95 1.686 13.902 2.543 14.436 L 2.561 14.254 C 2.713 13.275 3.11 12.389 3.749 11.604 L 4.092 11.228 L 4.483 10.867 C 4.751 10.616 5.22 10.341 5.539 10.18 C 6.073 9.909 6.587 9.741 7.106 9.661 C 7.697 9.571 8.336 9.571 8.903 9.661 C 10.043 9.843 11.171 10.443 11.995 11.305 C 12.747 12.096 13.248 13.096 13.433 14.165 C 13.448 14.251 13.454 14.344 13.466 14.433 C 14.323 13.899 14.896 12.95 14.896 11.866 Z" fill="currentColor" />
    </svg>
  ),
  "#experiencia": (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M 13.645 4.22 C 13.645 4.016 13.507 3.963 13.362 3.963 L 12.612 3.969 C 12.297 3.969 11.99 3.8 11.999 3.442 C 12.002 3.247 12.205 2.975 12.417 2.972 L 13.436 2.96 C 14.01 2.954 14.634 3.413 14.634 4.051 L 14.646 11.237 L 15.891 14.344 L 15.971 14.628 C 16.145 15.267 15.503 15.991 14.988 15.991 L 1.011 16 C 0.708 16 0.254 15.645 0.125 15.311 C -0.102 14.956 0.022 14.575 0.169 14.205 L 1.353 11.234 L 1.361 4.051 C 1.361 3.531 1.832 3.061 2.309 2.993 C 2.736 2.934 3.116 2.963 3.534 2.972 C 3.717 2.975 3.888 3.132 3.961 3.277 C 4.038 3.427 4.011 3.682 3.87 3.788 L 3.637 3.963 L 2.592 3.972 C 2.513 3.972 2.351 3.995 2.351 4.137 L 2.351 10.828 L 4.839 10.828 C 5.112 10.828 5.339 11.047 5.342 11.313 C 5.342 11.556 5.145 11.819 4.853 11.819 L 2.195 11.834 L 1.32 14.037 L 0.993 14.829 C 1.017 14.9 1.099 15.001 1.197 15.001 L 14.843 15.001 C 14.94 14.968 15.014 14.856 14.979 14.773 L 13.807 11.834 L 11.128 11.828 C 10.866 11.828 10.659 11.577 10.657 11.349 C 10.654 11.106 10.848 10.834 11.128 10.834 L 13.648 10.834 L 13.648 4.226 Z" fill="currentColor" />
        <path d="M 7.473 8.569 C 7.305 8.569 7.172 8.675 7.055 8.755 L 6.363 9.207 C 5.989 9.453 5.53 9.385 5.2 9.086 C 5.011 8.912 4.897 8.649 4.882 8.379 C 4.864 8.054 4.835 7.72 4.891 7.398 L 4.955 7.031 C 5 6.777 5.247 6.375 5.453 6.206 C 5.58 6.106 5.689 6.023 5.789 5.907 C 5.583 5.065 5.515 4.234 5.636 3.382 C 5.809 2.135 6.504 1.15 7.414 0.322 C 7.711 0.05 8.065 -0.124 8.403 0.109 C 9.051 0.553 9.543 1.156 9.943 1.836 C 10.629 3.007 10.656 4.476 10.343 5.789 C 10.317 5.905 10.361 5.996 10.461 6.058 C 10.8 6.259 11.133 6.774 11.183 7.141 C 11.25 7.655 11.259 8.155 11.174 8.66 C 11.147 8.805 11.015 8.971 10.915 9.068 C 10.603 9.379 10.137 9.462 9.76 9.213 L 8.774 8.569 L 7.476 8.569 Z M 9.563 7.892 L 10.22 8.32 C 10.226 7.714 10.343 7.185 9.893 6.871 C 9.816 6.818 9.713 6.744 9.628 6.715 C 9.322 6.602 9.189 6.313 9.269 5.996 C 9.44 5.316 9.59 4.518 9.513 3.829 L 9.478 3.507 C 9.363 2.764 9.024 2.09 8.512 1.561 L 8.065 1.097 C 7.856 1.31 7.661 1.481 7.473 1.703 C 7.022 2.229 6.716 2.883 6.613 3.572 C 6.492 4.364 6.645 5.254 6.837 6.026 C 6.913 6.33 6.793 6.591 6.489 6.709 C 6.186 6.827 5.901 7.114 5.877 7.466 C 5.856 7.764 5.865 8.036 5.877 8.338 L 6.648 7.821 C 6.816 7.708 7.002 7.578 7.225 7.578 L 8.918 7.578 C 9.154 7.578 9.375 7.767 9.566 7.895 Z M 8.094 14.222 C 7.85 14.255 7.661 14.062 7.523 13.891 L 7.249 13.554 L 7.055 13.294 L 6.725 12.759 C 6.466 12.339 6.289 11.851 6.295 11.345 L 6.345 10.996 C 6.398 10.627 6.681 10.236 6.975 10.003 C 7.8 9.358 8.96 9.583 9.534 10.44 C 9.972 11.097 9.84 11.86 9.487 12.552 C 9.319 12.88 9.148 13.193 8.913 13.477 L 8.527 13.947 C 8.421 14.074 8.303 14.19 8.097 14.219 Z M 8.047 12.942 L 8.297 12.614 C 8.533 12.303 8.724 11.954 8.798 11.564 C 8.877 11.141 8.606 10.751 8.182 10.662 C 7.758 10.573 7.314 10.91 7.305 11.366 C 7.299 11.585 7.358 11.836 7.461 12.025 C 7.588 12.259 7.717 12.481 7.867 12.691 L 8.05 12.942 Z" fill="currentColor" />
        <path d="M 8.312 4.652 C 8.162 4.744 7.997 4.75 7.823 4.72 C 7.496 4.666 7.246 4.396 7.217 4.064 C 7.184 3.718 7.396 3.422 7.694 3.304 C 8.026 3.171 8.371 3.304 8.583 3.606 C 8.83 3.955 8.686 4.428 8.312 4.655 Z" fill="currentColor" />
      </g>
    </svg>
  ),
  "#contato": (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 14.01 15.476 C 14.01 15.673 13.88 15.829 13.736 15.932 C 13.566 16.053 13.319 16.006 13.16 15.847 L 10.317 13.003 L 7.333 12.973 C 6.636 12.968 6.124 12.32 6.027 11.663 L 6.033 6.332 C 6.033 5.693 6.768 5.016 7.383 5.013 L 14.292 5.005 C 14.671 5.005 14.992 5.046 15.321 5.24 C 15.68 5.478 15.921 5.849 16 6.291 L 16 11.655 C 15.903 12.326 15.438 12.815 14.789 12.979 L 14.01 12.997 Z M 13.01 12.488 C 13.01 12.19 13.26 11.999 13.524 11.996 L 14.595 11.981 C 14.768 11.981 15 11.743 15 11.537 L 15 6.406 C 15 6.232 14.75 6.005 14.58 6.005 L 7.456 6.005 C 7.288 6.005 7.03 6.229 7.03 6.397 L 7.03 11.513 C 7.027 11.722 7.236 11.984 7.45 11.984 L 10.493 11.993 C 10.655 11.993 10.793 12.07 10.902 12.182 L 12.998 14.278 Z" fill="currentColor" />
      <path d="M 2.578 6.997 C 2.737 7 2.972 7.215 2.975 7.38 L 2.996 9.255 L 4.14 8.125 C 4.295 7.972 4.519 7.937 4.692 8.034 C 4.831 8.125 4.942 8.243 4.972 8.39 C 4.998 8.525 4.954 8.717 4.839 8.831 L 2.843 10.833 C 2.678 10.963 2.523 11.028 2.308 10.945 C 2.19 10.895 1.99 10.73 1.99 10.524 L 1.982 7.987 C 1.702 7.966 1.441 8.028 1.179 7.96 C 0.562 7.801 0.006 7.274 0.006 6.6 L 0 1.307 C 0 0.689 0.764 0 1.308 0 L 8.647 0 C 8.908 0 9.202 0.168 9.391 0.309 C 9.714 0.553 9.949 0.93 9.958 1.339 C 9.973 2.108 9.979 2.85 9.952 3.603 C 9.943 3.845 9.632 3.992 9.452 3.986 C 9.238 3.977 8.985 3.786 8.985 3.533 L 8.964 1.416 C 8.964 1.122 8.662 0.986 8.403 0.986 L 1.391 0.986 C 1.232 1.03 0.994 1.239 0.994 1.41 L 0.988 6.382 C 0.988 6.644 1.132 6.965 1.42 6.971 L 2.578 6.992 Z" fill="currentColor" />
    </svg>
  ),
};

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
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <header className="bg-[#161a27]/80 backdrop-blur-md rounded-full shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
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
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:text-foreground transition-all duration-300 bg-[rgba(133,156,224,0.04)] border border-[rgba(133,156,224,0.3)] hover:border-[rgba(133,156,224,0.5)]"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              ) : (
                <Image src="/icons/menu-h.svg" alt="" width={18} height={12} />
              )}
            </button>
          </div>
        </header>

      </div>

      <div
        className={`fixed top-[84px] left-1/2 -translate-x-1/2 z-[80] md:hidden w-[90%] max-w-6xl bg-[#161a27]/80 backdrop-blur-md rounded-3xl shadow-[0_16px_64px_rgba(0,0,0,0.6),inset_0_0_0_0.5px_rgba(133,156,224,0.3)] transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <nav className="flex flex-col gap-2 px-4 py-6">
          {NAV_ITEMS.filter((item) => item.label).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className={`text-base transition-all duration-300 px-4 py-3 rounded-full border text-muted text-center flex items-center justify-center gap-2 ${
                activeSection === href
                  ? "bg-[rgba(133,156,224,0.08)] border-[rgba(133,156,224,0.5)]"
                  : "bg-[rgba(133,156,224,0.04)] border-[rgba(133,156,224,0.3)] hover:border-[rgba(133,156,224,0.5)]"
              }`}
            >
              {NAV_ICONS[href]}
              {label}
            </a>
          ))}
        </nav>

        <div className="px-4 pb-3 pt-2 border-t border-[rgba(133,156,224,0.15)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 text-muted hover:text-foreground transition-colors"
                >
                  <Image src={social.src} alt={social.alt} width={26} height={26} />
                </a>
              ))}
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cta text-white text-sm rounded-full hover:bg-cta/90 transition-colors"
            >
              <Image src="/icons/Download.svg" alt="" width={14} height={14} />
              Currículo
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[70] md:hidden"
          onClick={handleNavClick}
          aria-hidden="true"
        />
      )}
    </>
  );
}