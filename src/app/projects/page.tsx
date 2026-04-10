import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <Container>
      <Section title="Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {profile.projects.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-900 bg-zinc-950 p-5 hover:bg-zinc-900/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-zinc-100">{p.name}</h3>
                <span className="text-xs text-zinc-400">Live ↗</span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="mt-3 text-xs text-zinc-500">{p.url}</p>
            </a>
          ))}
        </div>
      </Section>
    </Container>
  );
}
