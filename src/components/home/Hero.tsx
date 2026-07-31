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
                Luxury Wedding & Celebration Cakes
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
          Creating Beautiful Moments,
          <br />
          <span className="not-italic text-gold">
            One Cake
          </span>{" "}
          at a Time
        </h1>

        <p className="mt-8 max-w-xl text-lg font-light leading-8 text-ink/80">
          Handcrafted bespoke cakes designed with timeless elegance.
          Every celebration deserves a centrepiece that's as memorable
          as the moment itself.
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