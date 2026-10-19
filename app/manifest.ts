import type { MetadataRoute } from "next";
import { profile } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const fullName = `${profile.firstName} ${profile.lastName}`;
  return {
    name: fullName,
    short_name: profile.firstName,
    description: profile.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
