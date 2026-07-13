import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Image src="/icons/Chat-Bubble.svg" alt="" width={28} height={28} className="text-accent" />
            Vamos criar juntos!
          </h2>
          <p className="text-muted max-w-2xl">
            Busco por vagas home office em período integral mas estou aberta a oportunidades presenciais na minha região (RS).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="md:order-2 flex flex-col gap-6">
            <h4 className="text-[#ebebeb] text-2xl font-bold leading-6">
              Outras opções de contato:
            </h4>

            <div className="flex flex-col gap-2">
              <a
                href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[rgba(133,156,224,0.4)] text-[#ebebeb] rounded-[16px] hover:opacity-80 transition-opacity flex items-center justify-between gap-6"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Image src="/icons/WhatsApp.svg" alt="" width={20} height={20} />
                  WhatsApp
                </span>
                <Image src="/icons/Redirect.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/laisla-alles/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[rgba(133,156,224,0.4)] text-[#ebebeb] rounded-[16px] hover:opacity-80 transition-opacity flex items-center justify-between gap-6"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Image src="/icons/LinkedIn.svg" alt="" width={20} height={20} />
                  LinkedIn
                </span>
                <Image src="/icons/Redirect.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="https://www.instagram.com/designlaisla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[rgba(133,156,224,0.4)] text-[#ebebeb] rounded-[16px] hover:opacity-80 transition-opacity flex items-center justify-between gap-6"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Image src="/icons/Instagram.svg" alt="" width={20} height={20} />
                  Instagram
                </span>
                <Image src="/icons/Redirect.svg" alt="" width={16} height={16} />
              </a>
            </div>
          </div>

          <div className="md:order-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
