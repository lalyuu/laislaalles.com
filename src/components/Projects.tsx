import Image from "next/image";
import Link from "next/link";
import { getProjects, getTagColor } from "@/lib/projects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projetos" className="relative z-10 bg-background -mt-screen py-24 rounded-t-[48px] overflow-hidden
      before:content-['']
      before:absolute before:top-0 before:left-0 before:w-full before:h-px
      before:bg-gradient-to-r before:from-transparent before:via-[rgba(133,156,224,0.15)] before:to-transparent">
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
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative rounded-2xl overflow-hidden bg-[#859ce024] hover:shadow-lg transition-all block"
            >
              {project.image && (
                <div className="relative w-full h-[200px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-[rgba(133,156,224,0.17)]" style={{ color: "rgba(184, 197, 224, 0.6)" }}>
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: getTagColor(tag, i) }}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-base mb-3 line-clamp-2">{project.description}</p>
                <time className="text-sm" style={{ color: "rgba(184, 197, 224, 0.48)" }}>{project.date}</time>
              </div>
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-2xl border border-[rgba(133,156,224,0.3)]">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground flex items-center gap-0.5">
                  Em breve
                  <span className="inline-block" style={{ animation: "dot-wave 1.4s ease-in-out 0s infinite" }}>.</span>
                  <span className="inline-block" style={{ animation: "dot-wave 1.4s ease-in-out 0.15s infinite" }}>.</span>
                  <span className="inline-block" style={{ animation: "dot-wave 1.4s ease-in-out 0.3s infinite" }}>.</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
