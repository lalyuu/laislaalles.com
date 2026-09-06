import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">

          {/* Mobile */}
          <div className="flex flex-col md:hidden w-full">
            <div className="flex items-center justify-between">
              <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-10 w-auto" />
              <div className="flex items-center gap-3">
                <a href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                  <Image src="/icons/WhatsApp.svg" alt="WhatsApp" width={26} height={26} />
                </a>
                <a href="https://www.instagram.com/designlaisla/" target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                  <Image src="/icons/Instagram.svg" alt="Instagram" width={26} height={26} />
                </a>
                <a href="https://www.linkedin.com/in/laisla-alles/" target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                  <Image src="/icons/LinkedIn.svg" alt="LinkedIn" width={26} height={26} />
                </a>
              </div>
            </div>
            <div className="relative mt-8 mb-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(133,156,224,0.35)] to-transparent"></div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-muted">
                Feito de ideias, curiosidade e criatividade. 💙
              </p>
              <p className="text-sm text-muted">
                © 2026 | Laísla Alles
              </p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 w-full">
            <div className="flex flex-col items-start">
              <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-10 w-auto" />
              <p className="text-sm text-muted flex items-center gap-2 mt-4">
                <span>© 2026</span>
                <span>|</span>
                <span>Laísla Alles</span>
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 pr-4 border-r border-border">
                  <a href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                    <Image src="/icons/WhatsApp.svg" alt="WhatsApp" width={24} height={24} />
                  </a>
                  <a href="https://www.instagram.com/designlaisla/" target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                    <Image src="/icons/Instagram.svg" alt="Instagram" width={24} height={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/laisla-alles/" target="_blank" rel="noopener noreferrer" className="inline-flex text-muted hover:text-foreground transition-all duration-300 hover:scale-105">
                    <Image src="/icons/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
                  </a>
                </div>

                <a
                  href="/assets/Curriculo_Laisla_dos_Santos_Alles.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cta text-white text-sm rounded-full hover:bg-cta/90 transition-colors"
                >
                  <Image src="/icons/Download.svg" alt="" width={16} height={16} />
                  Currículo
                </a>
              </div>
              <p className="text-sm text-muted">
                Feito de ideias, curiosidade e criatividade. 💙
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
