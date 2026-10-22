"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useId, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { hero, nav, search, type NavItem } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink, isLive } from "@/components/ui/AppLink";
import { CtaLink } from "@/components/ui/Cta";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header
      className="container-page flex items-center"
      style={{ paddingTop: fl(54, 16), paddingBottom: fl(21, 12) }}
    >
      <AppLink href="/" aria-label="CIMAR — The Women's Hospital, home" className="shrink-0 rounded-md transition-opacity hover:opacity-80 active:opacity-70">
        <Logo eager label={false} className="block" />
      </AppLink>
      <SearchForm className="ml-[clamp(12px,1.273vw,22px)] max-xl:hidden" />
      <DesktopNav />
      <MobileMenu />
    </header>
  );
}

/* ------------------------------------------------------------------ search */

function SearchForm({ className = "", fullWidth = false }: { className?: string; fullWidth?: boolean }) {
  const id = useId();
  const live = isLive(search.action);
  return (
    <form
      role="search"
      action={live ? search.action : undefined}
      onSubmit={(e) => {
        if (!live) e.preventDefault();
      }}
      className={`flex shrink-0 items-center rounded-full bg-black/13 has-[input:focus-visible]:outline-3 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-accent ${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        width: fullWidth ? undefined : fl(362, 240),
        height: fl(44, 40),
        paddingInline: fl(4, 3),
        gap: fl(11, 8),
      }}
    >
      <button
        type="submit"
        aria-label="Search"
        aria-disabled={!live || undefined}
        className="grid aspect-square h-[calc(100%-2*clamp(3px,0.231vw,4px))] shrink-0 cursor-pointer place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-deep active:scale-95"
      >
        <Search className="size-[clamp(16px,1.1vw,19px)]" strokeWidth={2.5} aria-hidden />
      </button>
      <label htmlFor={id} className="sr-only">
        {search.label}
      </label>
      <input
        id={id}
        name="q"
        type="search"
        placeholder={search.placeholder}
        readOnly={!live}
        aria-disabled={!live || undefined}
        className="h-full min-w-0 flex-1 bg-transparent pr-4 text-[12px] text-black placeholder:text-black focus:outline-none"
      />
    </form>
  );
}

/* ------------------------------------------------------------- desktop nav */

function DesktopNav() {
  const [open, setOpen] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open === null) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Next keeps hidden routes mounted (Activity); don't come back to an open menu.
  useLayoutEffect(() => () => setOpen(null), []);

  return (
    <nav ref={navRef} aria-label="Main" className="ml-auto max-xl:hidden">
      <ul className="flex items-center" style={{ gap: fl(53, 24) }}>
        {nav.map((item, i) =>
          item.children ? (
            <NavDropdown key={item.label} item={item} index={i} open={open === i} setOpen={setOpen} />
          ) : (
            <li key={item.label}>
              <AppLink href={item.href} className="block rounded-md text-body text-black capitalize transition-colors hover:text-brand active:text-brand-deep">
                {item.label}
              </AppLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

type DropdownProps = {
  item: NavItem;
  index: number;
  open: boolean;
  setOpen: (fn: (current: number | null) => number | null) => void;
};

function NavDropdown({ item, index, open, setOpen }: DropdownProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const openedByHover = useRef(false);
  const menuId = `nav-menu-${index}`;

  const cancelClose = () => window.clearTimeout(closeTimer.current);
  useEffect(() => cancelClose, []);

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        if (!open) openedByHover.current = true;
        setOpen(() => index);
      }}
      onMouseLeave={() => {
        closeTimer.current = window.setTimeout(() => setOpen((c) => (c === index ? null : c)), 150);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(() => null);
          triggerRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen((c) => (c === index ? null : c));
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          // A click right after hover-open pins the menu instead of closing it.
          const pinned = openedByHover.current;
          openedByHover.current = false;
          setOpen((c) => (c === index && !pinned ? null : index));
        }}
        className={`flex cursor-pointer items-center gap-[5px] rounded-md text-body text-black capitalize transition-colors hover:text-brand active:text-brand-deep ${open ? "text-brand" : ""}`}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={`size-[1.2em] translate-y-[0.15em] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      <div id={menuId} hidden={!open} className="absolute top-full left-1/2 z-30 -translate-x-1/2 pt-3">
        <ul className="animate-menu-in min-w-[15rem] rounded-2xl bg-white p-2 shadow-[0_18px_40px_-12px_rgba(37,43,97,0.35)] ring-1 ring-black/5">
          {item.children!.map((child) => (
            <li key={child.label}>
              <AppLink
                href={child.href}
                onClick={() => setOpen(() => null)}
                className="block cursor-pointer rounded-xl px-4 py-2.5 text-[17px] text-ink transition-colors hover:bg-cream hover:text-brand active:bg-cream/70"
              >
                {child.label}
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------- mobile menu */

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const root = document.documentElement;
    if (!dialog) return;
    if (open) {
      const scrollbar = window.innerWidth - root.clientWidth;
      root.style.overflow = "hidden";
      if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;
      if (!dialog.open) dialog.showModal();
      closeRef.current?.focus();
      wasOpen.current = true;
    } else {
      if (dialog.open) dialog.close();
      root.style.overflow = "";
      root.style.paddingRight = "";
      if (wasOpen.current) buttonRef.current?.focus();
      wasOpen.current = false;
    }
  }, [open]);

  // Close if the viewport grows into the desktop layout, so the scroll lock can't stick.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 80rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(
    () => () => {
      setOpen(false);
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    },
    [],
  );

  // In-page anchors navigate within the page, so close the menu behind them.
  const onLinkClick = (e: MouseEvent<HTMLElement>) => {
    const a = (e.target as HTMLElement).closest("a[href]");
    if (a?.getAttribute("href")?.startsWith("#")) setOpen(false);
  };

  return (
    <div className="ml-auto xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="grid size-12 cursor-pointer place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-deep active:scale-95"
      >
        <Menu aria-hidden className="size-6" />
      </button>
      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        onCancel={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        onClick={(e) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (e.target === dialogRef.current) setOpen(false);
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-cream p-0 text-ink backdrop:bg-navy/40"
      >
        <div className="container-page flex min-h-full flex-col pt-4 pb-10" onClick={onLinkClick}>
          <div className="flex items-center justify-between">
            <AppLink href="/" aria-label="CIMAR — The Women's Hospital, home" onClick={() => setOpen(false)} className="rounded-md transition-opacity hover:opacity-80 active:opacity-70">
              <Logo label={false} className="block w-[150px]" />
            </AppLink>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-12 cursor-pointer place-items-center rounded-full bg-navy text-white transition-colors hover:bg-navy-deep active:scale-95"
            >
              <X aria-hidden className="size-6" />
            </button>
          </div>

          <SearchForm fullWidth className="mt-6" />

          <nav aria-label="Mobile" className="mt-8">
            <ul className="divide-y divide-ink/10">
              {nav.map((item) => (
                <li key={item.label} className="py-4">
                  {item.children ? (
                    <>
                      <p className="text-[22px] font-semibold capitalize">{item.label}</p>
                      <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <AppLink
                              href={child.href}
                              className="block cursor-pointer rounded-lg py-2 text-[17px] text-ink/80 transition-colors hover:text-brand active:text-brand-deep"
                            >
                              {child.label}
                            </AppLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <AppLink href={item.href} className="block cursor-pointer rounded-lg text-[22px] font-semibold capitalize transition-colors hover:text-brand">
                      {item.label}
                    </AppLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8">
            <CtaLink href={hero.cta.href} label={hero.cta.label} />
          </div>
        </div>
      </dialog>
    </div>
  );
}
