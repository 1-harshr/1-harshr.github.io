import { about } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="~/about">
      <div className="about-body">
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
        <div className="facts">
          {about.facts.map((f) => (
            <span key={f.label}>
              <b>{f.label}</b> {f.value}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
