
import type { MDXComponents } from "mdx/types";

// Optional: map markdown elements to custom components later.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
