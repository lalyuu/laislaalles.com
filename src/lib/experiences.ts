export interface Experience {
  id: number
  cargo: string
  empresa: string
  inicio: string
  saida: string
  modalidade: string
  logoSrc: string
  descricao: string
  conquistas: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    cargo: "Designer Gráfica",
    empresa: "Macro Publicidade",
    inicio: "Junho 2023",
    saida: "Presente",
    modalidade: "Híbrido",
    logoSrc: "/assets/Macro-logo.png",
    descricao:
      "Atuo na criação de conteúdos visuais e audiovisuais para fortalecer a comunicação da marca em diferentes canais. Entre minhas atividades estão a criação de artes para redes sociais, produção de materiais gráficos, captação e edição de vídeos e desenvolvimento de animações, garantindo consistência visual e qualidade em todas as entregas.",
    conquistas: [
      "Desenvolvi uma estrutura de planejamento no Notion que centralizou todos os conteúdos da marca, trazendo mais organização e agilidade para a equipe.",
      "Produzi edições mais dinâmicas, utilizando cortes, animações e recursos visuais para tornar os vídeos mais atrativos e aumentar a retenção do público.",
    ],
  },
  {
    id: 2,
    cargo: "Designer Gráfica",
    empresa: "PanAmericana Cadernos",
    inicio: "CLT 2021 / Freelancer 2021",
    saida: "2023",
    modalidade: "Presencial",
    logoSrc: "/assets/Panamericana-logo.png",
    descricao:
      "Meu pequeno primeiro passo na área criativa e o início da construção da base para minha atuação como designer. Atuei na criação de artes para redes sociais e materiais impressos.",
    conquistas: [
      "Ajustei o visual das artes para redes sociais seguindo a identidade visual da marca, reforçando a mesma e mantendo as publicações padronizadas.",
      "Organizei os conteúdos das redes sociais para que a linguagem estivesse mais alinhada ao segmento da empresa e às expectativas do público.",
    ],
  },
]
