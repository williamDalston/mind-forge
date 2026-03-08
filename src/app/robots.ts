import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/callback", "/api/"],
    },
    sitemap: "https://willalston.space/sitemap.xml",
  };
}
