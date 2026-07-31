import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="scroll-mt-40 mt-20 px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logo/golden-moments-logo2.png"
            alt="Golden Moments logo"
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


          <h2 className="mb-4 font-display text-[2rem] leading-[1.1] text-brown">
            Crafted with passion, created for every sweet moment
          </h2>


          <p className="font-light leading-7 text-ink/80">
            Hi, I'm Esther — the baker behind Golden Moments. Based in
            Pretoria, I create handcrafted baked treats made with care,
            creativity, and attention to detail.
            <br />
            <br />
            From luxury gift boxes and freshly baked cupcakes to indulgent
            treats and homemade favourites, every creation is made from
            scratch using quality ingredients and a whole lot of love.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;