import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

function formatRange(from: string, to: string) {
  const fromText = new Date(from + "-01").toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const toText =
    to === "Present"
      ? "Present"
      : new Date(to + "-01").toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        });
  return `${fromText} — ${toText}`;
}

export default function ExperiencePage() {
  return (
    <Container>
      <Section title="Work Experience">
        <div className="space-y-6">
          {profile.experience.map((e) => (
            <div
              key={`${e.from}-${e.role}`}
              className="rounded-lg border border-zinc-900 bg-zinc-950 p-5"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {e.role}
                  </h3>
                  <p className="text-sm text-zinc-400">{e.company}</p>
                </div>
                <p className="text-sm text-zinc-500">
                  {formatRange(e.from, e.to)}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-4">
          {profile.education.map((ed) => (
            <div
              key={ed.school + ed.program}
              className="rounded-lg border border-zinc-900 bg-zinc-950 p-5"
            >
              <h3 className="font-semibold text-zinc-100">{ed.school}</h3>
              <p className="text-sm text-zinc-400">{ed.location}</p>
              <p className="mt-2 text-sm text-zinc-300">{ed.program}</p>
              <p className="text-sm text-zinc-500">{ed.year}</p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
