import Image from "next/image";

const treats = [
  {
    title: "Cupcakes",
    description:
      "Beautifully decorated cupcakes made for everyday celebrations and special moments.",
    price: "6 from R140 · 12 from R260",
    image: "/images/Treats/Cupcakes12.jpeg",
  },
  {
    title: "Red Cakes",
    description:
      "Soft, freshly baked red cakes prepared with care and finished beautifully.",
    price: "6 from R130 · 12 from R240",
    image: "/images/Treats/Redcakes.jpeg",
  },
  {
    title: "Scones",
    description:
      "Freshly baked scones perfect for sharing, gifting, or enjoying with your favourite tea.",
    price: "5L from R250 · 10L from R400 · 20L from R750",
    image: "/images/Treats/Scones.jpeg",
  },
];

export default function Treats() {
  return (
    <section className="bg-ivory px-6 py-24 lg:px-10 " id="treats">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <div className="mb-6 flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>Our Treats</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-4xl text-brown lg:text-5xl">
            Freshly baked favourites
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-ink/70">
            From delicate cupcakes to homemade scones, every treat is
            handcrafted with the same attention to detail.
          </p>

        </div>


        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {treats.map((treat) => (

            <div
              key={treat.title}
              className="group overflow-hidden border border-gold/20 bg-white"
            >

              <div className="overflow-hidden">

                <Image
                  src={treat.image}
                  alt={treat.title}
                  width={500}
                  height={500}
                  className="
                    aspect-square
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>


              <div className="p-8">

                <h3 className="font-display text-3xl text-brown">
                  {treat.title}
                </h3>

                <p className="mt-4 font-light leading-7 text-ink/70">
                  {treat.description}
                </p>

                <p className="mt-5 text-sm tracking-wide text-gold">
                  {treat.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}