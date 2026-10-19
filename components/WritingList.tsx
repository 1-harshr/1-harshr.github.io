"use client";

import { useEffect, useState } from "react";
import { fromRss2Json, liveFeedUrl, mediumProfile, type Post } from "@/lib/medium";

const day = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export function WritingList({ initial }: { initial: Post[] }) {
  const [posts, setPosts] = useState(initial);

  // Pick up posts published since the last deploy; keep the build-time list if this fails.
  useEffect(() => {
    if (!liveFeedUrl) return;
    let cancelled = false;
    fetch(liveFeedUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data.status === "ok" && data.items?.length) setPosts(fromRss2Json(data.items));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      {posts.length > 0 && (
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.link}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <h3>{post.title}</h3>
                <span className="when">{day(post.date)}</span>
                {post.excerpt && <p>{post.excerpt}</p>}
                {post.tags.length > 0 && <span className="tools">{post.tags.join(" · ")}</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
      {mediumProfile && (
        <p className="more">
          <a href={mediumProfile} target="_blank" rel="noopener noreferrer">
            All posts on Medium →
          </a>
        </p>
      )}
    </div>
  );
}
