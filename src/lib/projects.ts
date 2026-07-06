export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  tagColors?: string[]
  image?: string
  date: string
  rawDate: string
}

export const TAG_COLOR_MAP: Record<string, string> = {
  "Motion Design": "#FF5FCF",
  "Motion": "#FF5FCF",
  "UX Motion": "#875EFF",
  "Branding": "#2E9EFF",
  "Design": "#2E9EFF",
  "UI/UX": "#875EFF",
}

export function getTagColor(tag: string, index: number): string {
  if (TAG_COLOR_MAP[tag]) return TAG_COLOR_MAP[tag]
  const fallbacks = ["#FF5FCF", "#875EFF", "#2E9EFF", "#F09020", "#50C878"]
  return fallbacks[index % fallbacks.length]
}

interface GitHubContentItem {
  name: string
  type: string
  download_url: string
}

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return {}

  const frontmatter = match[1]
  const result: Record<string, string> = {}

  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }

    result[key] = value
  }

  return result
}

function parseTags(tagsStr: string): string[] {
  return tagsStr
    .split('#')
    .map((t) => t.trim())
    .filter((t) => t.length > 0)
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function parseProject(content: string, filename: string): Project | null {
  const frontmatter = parseFrontmatter(content)
  if (!frontmatter.title) return null

  return {
    id: filename.replace('.mdx', ''),
    title: frontmatter.title,
    description: frontmatter.description || '',
    tags: parseTags(frontmatter.tags || ''),
    image: frontmatter.image || undefined,
    date: formatDate(frontmatter.date || ''),
    rawDate: frontmatter.date || '',
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/lalyuu/content-laislaalles.com/contents/projects',
      { next: { revalidate: 3600 } },
    )

    if (!response.ok) return []

    const files: GitHubContentItem[] = await response.json()

    const mdxFiles = files.filter(
      (f) => f.type === 'file' && f.name.endsWith('.mdx'),
    )

    const projects = await Promise.all(
      mdxFiles.map(async (file) => {
        try {
          const res = await fetch(file.download_url, {
            next: { revalidate: 3600 },
          })
          const content = await res.text()
          return parseProject(content, file.name)
        } catch {
          return null
        }
      }),
    )

    const validProjects = projects.filter(
      (p): p is Project => p !== null,
    )

    return validProjects.sort((a, b) => {
      return b.rawDate.localeCompare(a.rawDate)
    })
  } catch {
    return []
  }
}
