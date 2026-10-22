import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Flip to `true` once the destination pages exist. Until then every link
 * except in-page anchors (`#…`) and `/` renders inert: no href, so plain,
 * ctrl- and middle-clicks can't leave the page. Destinations stay in the data.
 */
export const PAGES_LIVE = false;

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

const isInPage = (href: string) => href === "/" || href.startsWith("#") || href.startsWith("/#");
const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

export function isLive(href: string) {
  return PAGES_LIVE || isInPage(href);
}

export function AppLink({ href, children, ...rest }: AppLinkProps) {
  if (!isLive(href)) {
    return (
      <a role="link" aria-disabled="true" tabIndex={0} {...rest}>
        {children}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
