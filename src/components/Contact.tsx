import Image from "next/image";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contato" className="relative z-0 py-24 bg-background overflow-hidden
      before:content-['']
      before:absolute before:top-0 before:left-0 before:w-full before:h-px
      before:bg-gradient-to-r before:from-transparent before:via-[rgba(133,156,224,0.25)] before:to-transparent">
      <div
        className="absolute left-[-600px] bottom-[-600px] w-[1200px] h-[1200px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(46, 56, 107, 0.28) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-[-600px] top-[-600px] w-[1200px] h-[1200px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(46, 56, 107, 0.28) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Image src="/icons/Chat-Bubble.svg" alt="" width={28} height={28} className="text-accent" />
              Vamos criar juntos!
            </h2>
            <p className="text-muted">
              Se você chegou até aqui e acredita que meu trabalho pode contribuir com sua equipe, ficarei feliz em conversar!
              <br />
              No momento, procuro por vagas remotas em tempo integral, mas também estou aberta a oportunidades presenciais no RS.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
          <Reveal className="md:order-2 md:col-span-2" delay={120}>
            <div className="flex flex-col gap-6 md:pl-6 md:before:absolute md:before:left-0 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-gradient-to-b md:before:from-transparent md:before:via-[rgba(133,156,224,0.25)] md:before:to-transparent">
            <h4 className="text-[#ebebeb] text-2xl font-bold leading-6">
              Outras opções de contato:
            </h4>

            <div className="flex flex-col gap-2">
              <a
                href="https://api.whatsapp.com/send/?phone=555496971603&text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[rgba(133,156,224,0.4)] text-[#ebebeb] rounded-[16px] hover:bg-[#14171f] transition-colors flex items-center justify-between gap-6"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Image src="/icons/WhatsApp.svg" alt="" width={24} height={24} />
                  WhatsApp
                </span>
                <Image src="/icons/Redirect.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/laisla-alles/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[rgba(133,156,224,0.4)] text-[#ebebeb] rounded-[16px] hover:bg-[#14171f] transition-colors flex items-center justify-between gap-6"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Image src="/icons/LinkedIn.svg" alt="" width={24} height={24} />
                  LinkedIn
                </span>
                <Image src="/icons/Redirect.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="https://www.instagram.com/designlaisla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[rgba(133,156,224,0.4)] text-[#ebebeb] rounded-[16px] hover:bg-[#14171f] transition-colors flex items-center justify-between gap-6"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Image src="/icons/Instagram.svg" alt="" width={24} height={24} />
                  Instagram
                </span>
                <Image src="/icons/Redirect.svg" alt="" width={16} height={16} />
              </a>
            </div>
          </div>
          </Reveal>

          <Reveal className="-order-1 md:order-1 md:col-span-3" delay={0}>
            <div className="bg-[#14171f] p-8 rounded-2xl shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
