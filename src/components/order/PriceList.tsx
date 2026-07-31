import Image from "next/image";

const priceLists = [
  {
    src: "/images/PriceList/pricelist-1.jpeg",
    alt: "Golden Moments price list page one",
  },
  {
    src: "/images/PriceList/pricelist-2.jpeg",
    alt: "Golden Moments price list page two",
  },
];

export default function PriceList() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <div className="mb-6 flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>Our Menu</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-4xl text-brown lg:text-5xl">
            Explore our creations
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-ink/70">
            View our latest pricing and available baked creations before
            placing your order.
          </p>

        </div>


        {/* Price List Images */}
        <div className="grid gap-8 md:grid-cols-2">

          {priceLists.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden border border-gold/20 bg-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={1200}
                className="
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}