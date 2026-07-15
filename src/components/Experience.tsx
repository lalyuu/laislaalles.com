import Image from "next/image";

export default function Experience() {
  return (
    <section id="experiencia" className="relative z-0 py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Image src="/icons/Experience.svg" alt="" width={28} height={28} className="text-accent" />
          Experiência Profissional
        </h2>
        <p className="text-muted mb-12 max-w-2xl">
          Ao longo dos últimos 3 anos, venho construindo minha trajetória como Designer, Motion Designer e entusiasta do audiovisual.
        </p>

        <div className="border-l-2 border-cta pl-8 py-4">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-xl font-semibold text-foreground">
              Designer Gráfica
            </h3>
            <span className="text-sm text-cta">Macro Publicidade</span>
            <span className="text-sm text-muted">|</span>
            <span className="text-sm text-muted">Junho 2023 - Atualmente</span>
            <span className="text-sm text-muted">|</span>
            <span className="text-sm text-muted">Presencial</span>
          </div>
          <p className="text-muted leading-relaxed break-words">
            descriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescriçãodescrição descrição descrição.
          </p>
        </div>
      </div>
    </section>
  );
}
