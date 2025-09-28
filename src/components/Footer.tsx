"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import siteConfig from "@/config/site";

function getLang(pathname: string | null): "de" | "en" {
  if (!pathname) return "de";
  if (pathname === "/") return "de";
  return pathname.startsWith("/en") ? "en" : "de";
}

export default function Footer() {
  const pathname = usePathname();
  const lang = getLang(pathname);

  const placeAndTime = siteConfig.placeAndTime[lang];

  return (
    <footer className="mt-12 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          {siteConfig.coderDojo.footerLogo ? (
            <p className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siteConfig.coderDojo.footerLogo} alt="CoderDojo" className="h-10 w-auto inline" />
            </p>
          ) : null}
        </div>
        <div className="text-sm text-zinc-600" dangerouslySetInnerHTML={{ __html: placeAndTime }} />
        <div className="flex items-center gap-4 justify-start md:justify-end text-sm">
          {siteConfig.social.twitter && (
            <Link
              href={`https://twitter.com/${siteConfig.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </Link>
          )}
          {siteConfig.social.github && (
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
