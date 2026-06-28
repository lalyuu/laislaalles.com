import Image from "next/image";

export default function About() {
  const competencias = [
    "Captação de vídeo",
    "Criação de conteúdo para redes sociais",
    "Desenvolvimento de artes digitais e impressas",
    "Design de interfaces digitais",
    "Edição de vídeos",
    "Motion Design",
  ];

  const habilidades = [
    "Colaboração",
    "Empatia",
    "Foco e concentração",
    "Paciência",
    "Planejamento e organização",
    "Proatividade",
    "Rápido aprendizado",
  ];

  return (
    <section id="sobre" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
          <Image src="/icons/User.svg" alt="" width={28} height={28} className="text-accent" />
          Sobre mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted leading-relaxed mb-6">
              Oi! Eu sou a Laísla Alles, formada em Design Gráfico, com 3 anos de experiência e apaixonada pelo meio audiovisual.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Sou impulsionada pelo anseio de trazer vida a ideias através do movimento e transformá-las em narrativas visuais envolventes, que impactam, conectam e comunicam.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Meu interesse pela área surgiu na adolescência, com a popularidade do YouTube, onde conheci mais sobre edição de vídeo e me encantei pelas possibilidades.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Atualmente, busco aprofundar meus conhecimentos na área com foco na especialização em Motion Design.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cta text-white rounded-full hover:bg-cta/90 transition-colors flex items-center gap-2"
              >
                <Image src="/icons/Download-File.svg" alt="" width={18} height={18} />
                Currículo
              </a>
              <a
                href="#contato"
                className="px-6 py-2 border border-border rounded-full text-foreground hover:bg-cta hover:text-white transition-colors flex items-center gap-2"
              >
                <Image src="/icons/Chat.svg" alt="" width={18} height={18} />
                Fale comigo!
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Image src="/icons/Target.svg" alt="" width={22} height={22} className="text-accent" />
                Competências
              </h3>
              <ul className="space-y-2">
                {competencias.map((item) => (
                  <li key={item} className="text-muted flex items-center gap-2">
                    <Image src="/icons/Pen-Tool.svg" alt="" width={14} height={14} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Image src="/icons/Notebook.svg" alt="" width={22} height={22} className="text-accent" />
                Habilidades pessoais
              </h3>
              <ul className="space-y-2">
                {habilidades.map((item) => (
                  <li key={item} className="text-muted flex items-center gap-2">
                    <Image src="/icons/Pen-Tool.svg" alt="" width={14} height={14} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
