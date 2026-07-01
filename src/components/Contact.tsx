import Image from "next/image";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
          <Image src="/icons/Chat-Bubble.svg" alt="" width={28} height={28} className="text-accent" />
          Vamos criar juntos!
        </h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto">
          Busco por vagas home office em período integral mas estou aberta a oportunidades presenciais na minha região (RS).
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#24cb71] text-white rounded-full hover:bg-[#20b565] transition-colors flex items-center gap-2"
          >
            <Image src="/icons/WhatsApp.svg" alt="" width={20} height={20} />
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/laisla-alles/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0066cc] text-white rounded-full hover:bg-[#0055aa] transition-colors flex items-center gap-2"
          >
            <Image src="/icons/LinkedIn.svg" alt="" width={20} height={20} />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/designlaisla/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#e1306c] text-white rounded-full hover:bg-[#c92860] transition-colors flex items-center gap-2"
          >
            <Image src="/icons/Instagram.svg" alt="" width={20} height={20} />
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-foreground rounded-full hover:bg-cta hover:text-white transition-colors flex items-center gap-2"
          >
            <Image src="/icons/Download.svg" alt="" width={20} height={20} />
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
}
