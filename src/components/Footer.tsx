import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="flex flex-row items-center justify-between w-full gap-4 md:flex-col md:items-start md:justify-start md:w-auto">
            <img src="/assets/Logo.svg" alt="Laísla Alles" className="h-10 w-auto" />
            <p className="text-sm text-muted flex items-center gap-2">
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cta text-white text-sm rounded-full hover:bg-cta/90 transition-colors"
              >
                <Image src="/icons/Download.svg" alt="" width={16} height={16} />
                Currículo
              </a>
            </div>
            <p className="text-xs text-muted">
              100% criativo, 100% autêntico. 💙
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
