import { feedUrl, parseFeed, type Post } from "@/lib/medium";
import { Section } from "./Section";
import { WritingList } from "./WritingList";

// Runs during `next build`, so the page ships with posts even if the live refresh fails.
async function buildTimePosts(): Promise<Post[]> {
  if (!feedUrl) return [];
  try {
    const res = await fetch(feedUrl);
    return res.ok ? parseFeed(await res.text()) : [];
  } catch {
    return [];
  }
}

export async function Writing() {
  const posts = await buildTimePosts();

  return (
    <Section id="writing" title="~/writing" lede="Stories from the road, mostly. Straight from Medium.">
      <WritingList initial={posts} />
    </Section>
  );
}
