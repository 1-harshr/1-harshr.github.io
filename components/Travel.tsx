import Image from "next/image";
import { travel } from "@/content/site";
import { Section } from "./Section";

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 18l6-8 4 5 3-3 5 6H3z" />
      <circle cx="16" cy="7" r="2" />
    </svg>
  );
}

export function Travel() {
  return (
    <Section id="travel" title="~/travel" lede="Places I’ve walked to, mostly uphill." split={false}>
      <div className="gallery">
        {travel.map((t, i) => (
          <figure className="tile" key={`${t.place}-${i}`}>
            {t.src ? (
              <div className="photo" style={{ aspectRatio: t.ratio }}>
                <Image
                  src={t.src}
                  alt={`${t.place}, ${t.year}`}
                  fill
                  sizes="(min-width: 880px) 33vw, 50vw"
                />
              </div>
            ) : (
              <div className="ph" style={{ aspectRatio: t.ratio }} role="img" aria-label="Photo coming soon">
                <PlaceholderIcon />
              </div>
            )}
            <figcaption>
              <b>{t.place}</b>, {t.year}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
