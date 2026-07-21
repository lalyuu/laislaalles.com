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
    modalidade: "Presencial",
    logoSrc: "/assets/Macro-logo.png",
    descricao:
      "Criação de artes digitais e impressas para campanhas publicitárias. Desenvolvimento de identidades visuais, peças gráficas e materiais institucionais. Colaboração com a equipe de criação para garantir a consistência visual dos projetos.",
    conquistas: [
      "Liderou a migração da identidade visual de 3 marcas, resultando em um aumento de 30% no engajamento",
      "Implementou um sistema de templates que reduziu em 40% o tempo de produção de artes",
    ],
  },
  {
    id: 2,
    cargo: "Motion Designer",
    empresa: "Panamericana",
    inicio: "Janeiro 2022",
    saida: "Maio 2023",
    modalidade: "Remoto",
    logoSrc: "/assets/Panamericana-logo.png",
    descricao:
      "Produção de animações e motion graphics para redes sociais e campanhas digitais. Criação de vinhetas, GIFs animados e vídeos institucionais. Edição e pós-produção de conteúdo audiovisual.",
    conquistas: [
      "Produziu mais de 50 animações para campanhas que alcançaram 2M+ visualizações",
      "Desenvolveu um guia de motion design que padronizou a linguagem visual da equipe",
    ],
  },
]
