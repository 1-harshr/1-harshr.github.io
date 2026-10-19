import Image from "next/image";
import { profile } from "@/content/site";

const nav = ["work", "projects", "about", "travel", "poetry", "random", "contact"];

export function Hero() {
  return (
    <header className="hero">
      <h1>
        <span>{profile.firstName}</span>
        <span>{profile.lastName}</span>
      </h1>
      <figure>
        <Image
          src={profile.photo.src}
          alt={profile.photo.alt}
          width={1600}
          height={2133}
          priority
          sizes="(min-width: 880px) 45vw, 100vw"
        />
      </figure>
      <p className="tagline">
        {profile.tagline} <em>{profile.taglineAside}</em>
      </p>
      <nav aria-label="Sections">
        {nav.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}/
          </a>
        ))}
      </nav>
    </header>
  );
}
