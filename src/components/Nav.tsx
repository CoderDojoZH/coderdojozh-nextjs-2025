"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import siteConfig from "@/config/site";
import { useState } from "react";

function getLang(pathname: string | null): "de" | "en" {
  if (!pathname) return "de";
  if (pathname === "/") return "de"; // root rewrites to /de
  return pathname.startsWith("/en") ? "en" : "de";
}

export default function Nav() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const [open, setOpen] = useState(false);

  const brand = lang === "en"
    ? siteConfig.title.replace("Zürich", "Zurich")
    : siteConfig.title;

  const base = `/${lang}`;
  // Match Jekyll nav: Join Us, Material, About, Contact
  const links = [
    { href: `${base}/join-us`, label: lang === "en" ? "Join Us" : "Mitmachen" },
    { href: `${base}/learning-materials`, label: lang === "en" ? "Material" : "Lernmaterial" },
    { href: `${base}/about`, label: lang === "en" ? "About" : "Über uns" },
    { href: `${base}/contact`, label: lang === "en" ? "Contact" : "Kontakt" },
  ];

  const isActive = (href: string) => pathname === href;
  const otherLang = lang === "en" ? "de" : "en";
  const otherHref = pathname ? pathname.replace(/^\/(en|de)/, `/${otherLang}`) : `/${otherLang}`;

  const linkClass = (href?: string) => `${href && isActive(href) ? "font-semibold underline" : ""} text-zinc-800 hover:text-zinc-900 hover:underline underline-offset-4`;

  // Map href to Jekyll .page-link variant classes used for colored buttons
  const pageVariant = (href: string) => {
    if (/\/join-us$/.test(href)) return "join-us";
    if (/\/learning-materials$/.test(href)) return "material";
    if (/\/about$/.test(href)) return "about";
    if (/\/contact$/.test(href)) return "contact";
    return "";
  };

  const toggleLabel = lang === "en" ? "Toggle navigation" : "Navigation umschalten";

  return (
    <nav className="site-nav max-w-5xl mx-auto px-4 py-4">
      <div className="flex items-center gap-6">
        <Link href={base} className="site-logo flex items-center gap-3 font-semibold text-lg text-zinc-900">
          {siteConfig.coderDojo.headerLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={siteConfig.coderDojo.headerLogo} alt={brand} className="h-8 w-auto" />
          ) : null}
          <span>{brand}</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="ml-auto md:hidden p-2 text-zinc-700 hover:text-zinc-900"
          aria-label={toggleLabel}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 18 15" width="22" height="18" aria-hidden="true">
            <path fill="currentColor" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
          </svg>
        </button>

        {/* Desktop nav */}
        <ul className="ml-auto hidden md:flex flex-wrap gap-5 text-sm items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`${linkClass(l.href)} page-link ${pageVariant(l.href)}`}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={otherHref} className={linkClass()}>
              {otherLang}
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile nav */}
      {open && (
        <ul className="mt-3 md:hidden flex flex-col gap-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`${linkClass(l.href)} page-link ${pageVariant(l.href)}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={otherHref} className={linkClass()} onClick={() => setOpen(false)}>
              {otherLang}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
