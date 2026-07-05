import Image from "next/image";
import { getProjects } from "@/lib/projects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projetos" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Image src="/icons/Frame.svg" alt="" width={28} height={28} className="text-accent" />
          Projetos
        </h2>
        <p className="text-muted mb-12 max-w-2xl">
          Entenda como eu penso, crio e desenvolvo soluções usando a criatividade.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group shadow-[inset_0_0_0_0.5px_rgba(133,156,224,0.3)] rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              {project.image && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm mb-4">{project.description}</p>
              <time className="text-xs text-muted">{project.date}</time>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border border-border rounded-full text-foreground hover:bg-cta hover:text-white transition-colors">
            Ver mais
          </button>
        </div>
      </div>
    </section>
  );
}
