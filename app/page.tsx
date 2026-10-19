import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { ThemeToggle } from "@/components/ThemeToggle";
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
