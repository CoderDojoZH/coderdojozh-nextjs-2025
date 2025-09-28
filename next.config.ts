import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [["remark-gfm", { strict: true, throwOnError: true }]],
        rehypePlugins: [],
    },
});

const nextConfig: NextConfig = {
  async rewrites() {
    return [ { source: '/', destination: '/de' } ];
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
