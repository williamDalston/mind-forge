import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mind Forge — Will Alston",
    short_name: "Mind Forge",
    description:
      "Daily intellectual training app by Will Alston. Sharper thinking through structured reflection.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1815",
    theme_color: "#1a1815",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
