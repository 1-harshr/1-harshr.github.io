import { random } from "@/content/site";
import { Section } from "./Section";

export function Random() {
  return (
    <Section id="random" title="~/random">
      <ul className="random">
        {random.map((r) => (
          <li key={r.label}>
            <span>{r.label}</span>
            {r.value}
          </li>
        ))}
      </ul>
    </Section>
  );
}
