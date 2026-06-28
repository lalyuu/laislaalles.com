import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <Image src="/icons/WhatsApp.svg" alt="WhatsApp" width={20} height={20} />
          </a>
          <a href="https://www.linkedin.com/in/laisla-alles/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <Image src="/icons/LinkedIn.svg" alt="LinkedIn" width={20} height={20} />
          </a>
          <a href="https://www.instagram.com/designlaisla/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <Image src="/icons/Instagram.svg" alt="Instagram" width={20} height={20} />
          </a>
        </div>
        <p className="text-sm text-muted">
          ©2026 | Laísla Alles
        </p>
        <p className="text-xs text-muted mt-1">
          100% criativo, 100% autêntico.
        </p>
      </div>
    </footer>
  );
}
