import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link className="font-semibold text-zinc-100" href="/">
            Arnulfo Seneca Jr.
          </Link>
          <nav className="flex items-center gap-4 text-sm text-zinc-300">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
