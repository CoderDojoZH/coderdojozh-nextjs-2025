import type {NextConfig} from "next";
import createMDX from "@next/mdx";

const commitHash = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [["remark-gfm", {strict: true, throwOnError: true}]],
        rehypePlugins: [],
    },
});

const nextConfig: NextConfig = {
    async rewrites() {
        return [{source: '/', destination: '/de'}];
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    compress: process.env.NODE_ENV === 'production' ? true : false,
    devIndicators: {
        position: 'bottom-right',
    },
    distDir: 'build',
    env: {
        "APP_GIT_SHA": commitHash
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },
    // generateBuildId: async () => {
    //     // You can, for example, get the latest git commit hash here
    //     return 'my-build-id'
    // },
    experimental: {
        // Compiles MDX files using Rust compiler
        // https://nextjs.org/docs/app/api-reference/config/next-config-js/mdxRs
        mdxRs: true,
    },
    generateEtags: true,
    // build specific
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: false,
};

export default withMDX(nextConfig);



