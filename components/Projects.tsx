import { projects } from "@/content/site";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="~/projects" lede="A few things I’m proud of.">
      <div>
        <ul className="work">
          {projects.map((p) => (
            <li key={p.name} className={p.featured ? "feature" : undefined}>
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                <h3>{p.name}</h3>
                <span className="plat">{p.platforms}</span>
                <p>{p.description}</p>
                {p.tools && <span className="tools">{p.tools}</span>}
              </a>
            </li>
          ))}
        </ul>
        <p className="more">
          More experiments on{" "}
          <a href="https://github.com/1-harshr" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
