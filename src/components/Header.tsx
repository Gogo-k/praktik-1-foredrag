"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Positivitet",
    href: "/positivitet",
  },
  {
    label: "Kommunikation",
    href: "/kommunikation",
  },
  {
    label: "Udbytte",
    href: "/udbytte",
  },
  {
    label: "Få det hele",
    href: "/fa-det-hele",
  },
  {
    label: "Om Carsten",
    href: "/om-carsten",
  },
  {
    label: "Referencer",
    href: "/referencer",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--color-primary)] shadow-xs">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/*LOGO*/}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            onClick={() => setIsOpen(false)}
          />
          <span
            className="ml-2 font-semibold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Firma foredrag
          </span>
        </Link>

        {/*Desktop nav*/}
        <nav className="hidden md:flex gap-6">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-md hover:text-[var(--color-hover)] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/*Mobile menu button*/}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/*Mobile nav*/}
      {isOpen && (
        <div className="md:hidden bg-[var(--foreground)] shadow-lg absolute top-16 left-0 w-full">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--background)] hover:text-[var(--color-primary)] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
