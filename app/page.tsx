import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Travel } from "@/components/Travel";
import { Poetry } from "@/components/Poetry";
import { Random } from "@/components/Random";
import { Contact } from "@/components/Contact";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <main className="wrap">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Stack />
      <Travel />
      <Poetry />
      <Random />
      <Contact />
      <footer>
        <span>
          {profile.firstName} {profile.lastName}, {new Date().getFullYear()}
        </span>
        <span>Made with Kotlin-level care</span>
      </footer>
    </main>
  );
}
