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

  const ferramentas = [
    { nome: "Photoshop", icone: "/icons/Photoshop.svg" },
    { nome: "Illustrator", icone: "/icons/Illustrator.svg" },
    { nome: "After Effects", icone: "/icons/After Effects.svg" },
    { nome: "Premiere", icone: "/icons/Premiere.svg" },
    { nome: "Bridge", icone: "/icons/Bridge.svg" },
    { nome: "CapCut", icone: "/icons/CapCut.svg" },
    { nome: "Figma", icone: "/icons/Figma.svg" },
    { nome: "Framer", icone: "/icons/Framer.svg" },
    { nome: "Notion", icone: "/icons/Notion.svg" },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-[124px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Image src="/icons/User.svg" alt="" width={28} height={28} className="text-accent" />
              Sobre mim
            </h2>

            <p className="text-muted leading-relaxed mb-6">
              Oi! Eu sou a Laísla Alles, formada em Design Gráfico, com 3 anos de experiência e apaixonada pelo meio audiovisual.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Sou impulsionada pelo anseio de trazer vida a ideias através do movimento e transformá-las em narrativas visuais envolventes, que impactam, conectam e comunicam.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Meu interesse pela área surgiu na adolescência, com a popularidade do YouTube, onde conheci mais sobre edição de vídeo e me encantei pelas possibilidades.
            </p>
            <p className="text-muted leading-relaxed mb-12">
              Atualmente, busco aprofundar meus conhecimentos na área com foco na especialização em Motion Design.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cta text-white rounded-full hover:bg-cta/90 transition-colors flex items-center gap-2"
              >
                <Image src="/icons/Download.svg" alt="" width={18} height={18} />
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

          <div className="flex items-center justify-center w-[405px] h-[535px] bg-accent/10 rounded-2xl overflow-hidden shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
            <Image src="/assets/Foto-perfil.jpg" alt="Foto de perfil da Laísla Alles" width={640} height={800} quality={100} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-[32px] font-semibold text-foreground mb-6 flex items-center gap-2">
            <Image src="/icons/Pen-Tool.svg" alt="" width={22} height={22} className="text-accent" />
            Ferramentas
          </h3>
          <div className="p-4 bg-[rgba(133,156,224,0.08)] rounded-[24px] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)]">
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {ferramentas.map((ferramenta) => (
                <div key={ferramenta.nome} className="flex flex-col items-center gap-1">
                  <Image src={ferramenta.icone} alt={ferramenta.nome} width={48} height={48} className="text-muted" />
                  <span className="text-xs text-muted">{ferramenta.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 items-stretch">
          <div className="py-8 px-10 bg-[rgba(133,156,224,0.08)] rounded-[24px] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] h-full">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Image src="/icons/Notebook.svg" alt="" width={22} height={22} className="text-accent" />
              Competências
            </h3>
            <ul>
              {competencias.map((item) => (
                <li key={item} className="text-muted">
                  <span className="mr-3">•</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-8 px-10 bg-[rgba(133,156,224,0.08)] rounded-[24px] shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] h-full">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Image src="/icons/Target.svg" alt="" width={22} height={22} className="text-accent" />
              Habilidades pessoais
            </h3>
            <ul>
              {habilidades.map((item) => (
                <li key={item} className="text-muted">
                  <span className="mr-3">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
