import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ink px-5 pt-16 sm:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 gap-y-12 border-b border-cream/20 pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

        {/* Brand */}
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">

          <Image
            src="/images/logo/golden-moments-logo2.png"
            alt="Golden Moments"
            width={200}
            height={200}
            className="w-36 opacity-90 brightness-0 invert"
          />

          <p className="text-sm leading-[1.8] text-ivory/70">
            Luxury baked gift boxes & handmade treats,
            <br />
            baked fresh in Pretoria
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://wa.me/27796154201"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-cream/20
                text-cream
                transition-all duration-300
                hover:border-gold
                hover:text-gold
              "
            >
              <FaWhatsapp size={18} />
            </a>
          </div>

        </div>


        {/* Shop */}
        <div className="flex flex-col gap-3">

            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
                Explore
            </p>

            <Link
                href="/#creations"
                className="text-sm text-ivory/70 transition hover:text-gold"
            >
                Our Creations
            </Link>

            <Link
                href="/#treats"
                className="text-sm text-ivory/70 transition hover:text-gold"
            >
                Treats
            </Link>

            <Link
                href="/#about"
                className="text-sm text-ivory/70 transition hover:text-gold"
            >
                About
            </Link>

            <Link
                href="/#gallery"
                className="text-sm text-ivory/70 transition hover:text-gold"
            >
                Gallery
            </Link>
        </div>


        {/* Orders */}
        <div className="flex flex-col gap-3">

          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
            Start Your Order
          </p>

          <Link
            href="/order#how-it-works"
            className="text-sm text-ivory/70 transition hover:text-gold"
          >
            How It Works
          </Link>

          <Link
            href="/order"
            className="text-sm text-ivory/70 transition hover:text-gold"
          >
            Order Now
          </Link>

          <a
            href="https://wa.me/27796154201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ivory/70 transition hover:text-gold"
          >
            WhatsApp Us
          </a>

        </div>


        {/* Contact */}
        <div className="col-span-2 flex flex-col gap-3 md:col-span-1">

          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
            Get in Touch
          </p>

          <a
            href="tel:+27796154201"
            className="text-sm text-ivory/70 transition hover:text-gold"
          >
            +27 79 615 4201
          </a>

          <p className="text-sm text-ivory/70">
            Ga-Rankuwa, Pretoria, South Africa
          </p>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 py-6 text-center text-[11px] tracking-wide text-ivory/40 md:flex-row md:text-left">

        <p>
          © 2026 Golden Moments · All rights reserved
        </p>

        <p>
          Built by Makhusha Technologies
        </p>

      </div>

    </footer>
  );
};

export default Footer;