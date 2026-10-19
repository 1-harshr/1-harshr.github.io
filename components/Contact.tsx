import { contact } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">{contact.heading}</h2>
      <a className="mail" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <ul className="links">
        <li className="resume">
          <a href={contact.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        {contact.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
