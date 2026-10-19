import { stack } from "@/content/site";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section id="stack" title="~/stack">
      <div className="stack">
        {stack.map((s) => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <p>{s.items}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
