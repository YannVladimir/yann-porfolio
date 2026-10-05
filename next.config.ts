import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — generates plain HTML/CSS/JS in the `out/` folder
  // Compatible with shared hosting (Namecheap cPanel, etc.)
  output: "export",

  // Required for static export when using next/image
  images: {
    unoptimized: true,
  },

  // Trailing slash so links work correctly on shared hosts
  trailingSlash: true,
};

export default nextConfig;
