import { Fragment } from "react";
import { poems } from "@/content/site";
import { Section } from "./Section";

export function Poetry() {
  if (poems.length === 0) return null;

  return (
    <Section id="poetry" title="~/poetry" lede="Things I write when the code compiles.">
      <div className="poems">
        {poems.map((poem, i) => (
          <figure className="poem" key={`${poem.title}-${i}`}>
            <blockquote>
              {poem.lines.map((line, j) => (
                <Fragment key={j}>
                  {line}
                  {j < poem.lines.length - 1 && <br />}
                </Fragment>
              ))}
            </blockquote>
            <figcaption>
              {poem.title}, {poem.year}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
