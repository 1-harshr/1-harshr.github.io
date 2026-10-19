import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Travel } from "@/components/Travel";
import { Writing } from "@/components/Writing";
import { Poetry } from "@/components/Poetry";
import { Random } from "@/components/Random";
import { Contact } from "@/components/Contact";
import { about, contact, jobs, profile } from "@/content/site";

// Structured data so search engines can connect this page to Harsh's other profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${profile.firstName} ${profile.lastName}`,
  url: profile.url,
  image: `${profile.url}${profile.photo.src}`,
  description: profile.description,
  jobTitle: jobs[0].role,
  worksFor: { "@type": "Organization", name: jobs[0].company },
  alumniOf: { "@type": "CollegeOrUniversity", name: about.facts[0].value },
  email: `mailto:${contact.email}`,
  sameAs: contact.links.map((l) => l.href),
};

export default function Home() {
  return (
    <main className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="topbar">
        <Socials />
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Stack />
      <Travel />
      <Writing />
      <Poetry />
      <Random />
      <Contact />
      <footer>
        <span>
          {profile.firstName}, {new Date().getFullYear()}
        </span>
        <span>Made with ❤️</span>
      </footer>
    </main>
  );
}
