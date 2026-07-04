import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-[#161a27]/80 backdrop-blur-md rounded-full shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#">
          <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6 px-8 py-2 shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] rounded-full">
          <a href="#sobre" className="text-sm text-muted hover:text-foreground transition-colors">
            Sobre mim
          </a>
          <a href="#projetos" className="text-sm text-muted hover:text-foreground transition-colors">
            Projetos
          </a>
          <a href="#experiencia" className="text-sm text-muted hover:text-foreground transition-colors">
            Experiência
          </a>
          <a href="#contato" className="text-sm text-muted hover:text-foreground transition-colors">
            Contato
          </a>
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
