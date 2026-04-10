import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <Container>
      <div className="py-12">
        <p className="text-sm text-zinc-400">{profile.location}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-100">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-300">{profile.title}</p>
        <p className="mt-4 max-w-2xl text-zinc-300">{profile.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white"
          >
            View Projects
          </Link>
          <Link
            href="/experience"
            className="rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Work Experience
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <Section title="Skills">
        <div className="flex flex-col gap-5">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Core
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.core.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              PHP Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.phpFrameworks.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              CMS
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.cms.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              eCommerce
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.ecommerce.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Featured Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {profile.projects.slice(0, 4).map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-900 bg-zinc-950 p-5 hover:bg-zinc-900/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-zinc-100">{p.name}</h3>
                <span className="text-xs text-zinc-400">Visit ↗</span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>
    </Container>
  );
}
