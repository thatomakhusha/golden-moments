"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#cakes", label: "Cakes" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gold/20 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex h-19.5 max-w-7xl items-center justify-between px-6 lg:px-10">

        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo/golden-moments-logo.png"
            alt="Golden Moments"
            width={420}
            height={160}
            priority
            className="h-36  w-auto object-contain md:h-40"
          />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                group
                relative
                text-[13px]
                font-light
                uppercase
                tracking-[0.24em]
                text-brown
                transition-all
                duration-300
                hover:text-gold
              "
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="/order"
          className="
            hidden
            rounded-full
            border
            border-gold
            px-6
            py-3
            text-[11px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-brown
            transition-all
            duration-300
            hover:bg-gold
            hover:text-white
            lg:block
          "
        >
          Order Now
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-brown lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gold/20 bg-cream lg:hidden">
          <div className="flex flex-col items-center gap-6 py-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  text-sm
                  font-light
                  uppercase
                  tracking-[0.22em]
                  text-brown
                  hover:text-gold
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/order"
              className="
                rounded-full
                border
                border-gold
                px-6
                py-3
                text-xs
                uppercase
                tracking-[0.2em]
                text-brown
                hover:bg-gold
                hover:text-white
              "
            >
              Order Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}