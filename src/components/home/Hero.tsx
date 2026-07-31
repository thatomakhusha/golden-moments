import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 py-20 text-center">
      
      {/* Hero Frame */}
      <div className="pointer-events-none absolute inset-6 border border-gold/30 lg:inset-8" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">

        <div className="mb-6 flex items-center justify-center gap-4 text-[13px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>
                Handcrafted With Love
            </span>
            <span className="h-px w-8 bg-gold" />
        </div>

        <h1
          className="
            font-display
            text-[42px]
            italic
            leading-[1.1]
            text-brown
            lg:text-[68px]
          "
        >
          Sweet moments,
          <br />
          <span className="not-italic text-gold">
            beautifully created
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg font-light leading-8 text-ink/80">
          From luxury gift boxes to freshly baked treats,
          every order is made with care and attention to detail.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/order"
            className="
              rounded-full
              bg-gold
              px-8
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-white
              transition
              hover:opacity-90
            "
          >
            Order a Cake
          </Link>

          <Link
            href="/#gallery"
            className="
              rounded-full
              border
              border-brown
              px-8
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-brown
              transition
              hover:bg-brown
              hover:text-white
            "
          >
            View Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}