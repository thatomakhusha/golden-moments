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
                Create something special
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
          Let&apos;s design your
          <br />
          <span className="not-italic text-gold">
            golden moment
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg font-light leading-8 text-ink/80">
          Tell us what you&apos;re imagining, and we&apos;ll help bring your
          perfect baked creation to life.
        </p>
      </div>
    </section>
  );
}