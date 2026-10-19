import { jobs } from "@/content/site";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" title="~/work" lede="Where I’ve shipped.">
      <ol className="work jobs">
        {jobs.map((job) => (
          <li key={job.company} className="row">
            <h3>{job.company}</h3>
            <span className="plat">{job.when}</span>
            <p>{job.role}</p>
            <span className="tools">{job.about}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
