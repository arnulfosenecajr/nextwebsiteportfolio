import { Container } from "./Container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="hover:text-zinc-200" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="hover:text-zinc-200"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
