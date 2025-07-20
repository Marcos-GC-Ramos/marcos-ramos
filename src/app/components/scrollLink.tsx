"use client";

import { useCallback } from "react";

interface ScrollLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollLink({ href, className, children }: ScrollLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [href]
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
