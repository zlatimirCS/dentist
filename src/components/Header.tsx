"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon, CloseIcon, MenuIcon, PhoneIcon, PinIcon, ToothIcon } from "./Icons";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-[12px] tracking-wide md:px-8">
          <p className="flex min-w-0 items-center gap-2 text-white/85">
            <PinIcon className="size-3.5 shrink-0 opacity-80" />
            <span className="truncate">1234 Dental Way, Suite 100 · Mon–Fri 8AM–5PM</span>
          </p>
          <a
            href="tel:+11234567890"
            className="flex shrink-0 items-center gap-2 text-white/90 transition hover:text-white"
          >
            <PhoneIcon className="size-3.5" />
            (123) 456-7890
          </a>
        </div>
      </div>

      <div className="border-b border-line/70 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-4">
          <Link href="#home" className="group flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-full bg-ice text-teal transition group-hover:bg-teal group-hover:text-white">
              <ToothIcon className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-semibold tracking-[0.04em] text-navy uppercase md:text-base">
                Bright Smiles
              </span>
              <span className="block text-[10px] tracking-[0.22em] text-muted uppercase">
                Dental Care
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 transition hover:text-teal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-dark sm:inline-flex"
            >
              Book an appointment
              <ArrowIcon className="size-4" />
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md border border-line text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-line bg-surface lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base text-navy transition hover:bg-ice-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-teal px-4 py-3 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Book an appointment
              <ArrowIcon className="size-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
