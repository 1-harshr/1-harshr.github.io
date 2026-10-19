// A plain-text summary of the site for AI assistants and LLM crawlers (https://llmstxt.org).
import { about, contact, jobs, profile, projects, stack } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const fullName = `${profile.firstName} ${profile.lastName}`;
  const body = [
    `# ${fullName}`,
    "",
    `> ${profile.description}`,
    "",
    `Based in ${profile.location}, India.`,
    "",
    ...about.paragraphs.flatMap((p) => [p, ""]),
    "## Work",
    "",
    ...jobs.map((j) => `- ${j.role} at ${j.company} (${j.when}): ${j.about}`),
    "",
    "## Projects",
    "",
    ...projects.map((p) => `- [${p.name}](${p.repo}) (${p.platforms}): ${p.description}`),
    "",
    "## Stack",
    "",
    ...stack.map((s) => `- ${s.group}: ${s.items}`),
    "",
    "## Contact",
    "",
    `- [Email](mailto:${contact.email})`,
    `- [Resume](${contact.resume})`,
    ...contact.links.map((l) => `- [${l.label}](${l.href})`),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
