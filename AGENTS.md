<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Regras do Projeto
- **NÃO** realizar nenhum commit ou push sem solicitação direta do usuário.
- Executar `npm run lint` e `npm run build` **apenas quando houver commit e push**, garantindo que não há erros antes de enviar ao repositório.

# Portfolio - Laísla Alles

## Contexto
- **Projeto**: Portfólio pessoal da Laísla Alles, Designer Gráfica e Motion Designer
- **URL original (Framer)**: https://laislaalles.framer.ai/
- **Stack atual**: React com Next.js, TypeScript, Tailwind CSS
- **Objetivo**: Migrar o conteúdo do Framer para o Next.js

## Conteúdo do Portfolio
O site original contém as seguintes seções:
1. **Hero/Início**: Apresentação "Oi, eu sou a Laísla Alles, sou Designer Gráfica"
2. **Projetos**: Lista de projetos de Motion Design e Branding
3. **Sobre mim**: Biografia e competências
4. **Experiência Profissional**: Histórico de trabalho
5. **Contato**: WhatsApp, LinkedIn, Instagram, Currículo

## Seções a implementar
- Header com navegação (Sobre mim, Projetos, Experiência, Contato, Currículo)
- Hero section
- Grid de projetos
- Seção "Sobre mim" com habilidades e competências
- Timeline de experiência profissional
- Footer com contato e links sociais
