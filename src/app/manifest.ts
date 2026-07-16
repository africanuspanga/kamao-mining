import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KAMAO Mining Company Limited",
    short_name: "KAMAO Mining",
    description:
      "DRC-based mining company focused on developing and supplying minerals that support modern energy, infrastructure, technology and global industry.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1822",
    theme_color: "#0b1822",
    icons: [
      {
        src: "/Kamo-Favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/Kamo-Favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
