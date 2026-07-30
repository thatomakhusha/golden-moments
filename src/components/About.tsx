import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="scroll-mt-40 mt-20 px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <div className="flex justify-center">
          <Image
                src="/images/logo/golden-moments-logo2.png"
                alt="Golden Moments Cake"
                width={700}
                height={850}
                className="h-auto w-full max-w-xl object-contain"
                priority
            />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-4 text-[13px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>Our Story</span>
          </div>

          <h2 className="mb-4 font-display text-[2rem] leading-[1.1] text-brown lg:text-[2rem]">
            A studio built on patience, craft, and quiet obsession with detail
          </h2>

          <p className="leading-6 font-light text-ink/80">
            Hi, I'm Esther — the baker behind Golden Moments Cakes. Based in
            Pretoria, I specialise in custom cakes and freshly baked treats for
            every occasion.
            <br />
            <br />
            Every order is made from scratch using the finest ingredients and a
            whole lot of love. Whether it's a birthday cake, a wedding
            masterpiece, or a box of freshly baked scones, I put the same care,
            passion, and attention into every single creation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;