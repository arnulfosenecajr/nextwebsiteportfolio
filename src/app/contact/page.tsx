import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Container>
      <Section title="Contact">
        <div className="rounded-lg border border-zinc-900 bg-zinc-950 p-5">
          <p className="text-zinc-300">
            Want to work together? Reach me through email or LinkedIn.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="text-zinc-300">
              <span className="text-zinc-500">Email: </span>
              <a className="hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Phone: </span>
              <a className="hover:underline" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">LinkedIn: </span>
              <a
                className="hover:underline"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {profile.linkedin}
              </a>
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-500">Location: </span>
              {profile.location}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
