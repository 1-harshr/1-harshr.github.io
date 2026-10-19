// Medium posts for the writing section. Medium's RSS feed has no CORS headers,
// so the build reads it directly and the browser refreshes it through rss2json.

import { contact } from "@/content/site";

export type Post = {
  title: string;
  link: string;
  /** ISO date the post was published. */
  date: string;
  excerpt: string;
  tags: string[];
};

const MAX_POSTS = 5;

const profile = contact.links.find((l) => l.label === "Medium")?.href ?? "";
const handle = profile.match(/medium\.com\/(@[^/?#]+)/)?.[1];

export const mediumProfile = profile;
export const feedUrl = handle ? `https://medium.com/feed/${handle}` : null;
export const liveFeedUrl = feedUrl
  ? `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`
  : null;

const decode = (s: string) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

function excerpt(html: string) {
  const body = html.replace(/<figure[\s\S]*?<\/figure>/g, "").replace(/<h[1-6][\s\S]*?<\/h[1-6]>/g, "");
  const text = decode(body.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  return text.length > 180 ? `${text.slice(0, 180).replace(/\s+\S*$/, "")}…` : text;
}

// Medium tags its links with ?source=rss-…; drop it for clean URLs.
const cleanLink = (url: string) => url.split("?")[0];

const cdata = (s: string) => s.replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1").trim();

function tag(xml: string, name: string) {
  const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  return m ? cdata(m[1]) : "";
}

/** Parses Medium's RSS XML (used at build time). */
export function parseFeed(xml: string): Post[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  return items.slice(0, MAX_POSTS).map((item) => ({
    title: decode(tag(item, "title")),
    link: cleanLink(tag(item, "link")),
    date: new Date(tag(item, "pubDate")).toISOString(),
    excerpt: excerpt(tag(item, "content:encoded")),
    tags: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => cdata(m[1])),
  }));
}

type Rss2JsonItem = { title: string; link: string; pubDate: string; content: string; categories: string[] };

/** Maps rss2json's response (used live in the browser). */
export function fromRss2Json(items: Rss2JsonItem[]): Post[] {
  return items.slice(0, MAX_POSTS).map((item) => ({
    title: item.title,
    link: cleanLink(item.link),
    // rss2json returns "YYYY-MM-DD HH:MM:SS" in UTC.
    date: new Date(`${item.pubDate.replace(" ", "T")}Z`).toISOString(),
    excerpt: excerpt(item.content),
    tags: item.categories,
  }));
}
