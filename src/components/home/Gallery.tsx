import Image from "next/image";

const images = [
  {
    src: "/images/GiftBoxes/SignatureBox.jpeg",
    alt: "Signature gift box",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/Treats/Cupcakes12.jpeg",
    alt: "Golden Moments cupcakes",
    className: "",
  },
  {
    src: "/images/Treats/Scones.jpeg",
    alt: "Freshly baked scones",
    className: "",
  },
  {
    src: "/images/GiftBoxes/GrandIndulgence2.jpeg",
    alt: "Grand indulgence box",
    className: "md:col-span-2",
  },
  {
    src: "/images/Treats/Redcakes.jpeg",
    alt: "Red cakes",
    className: "",
  },
  {
    src: "/images/GiftBoxes/IntimateBox.jpeg",
    alt: "Intimate gift box",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 lg:px-10">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <div className="mb-6 flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>Gallery</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-4xl text-brown lg:text-5xl">
            Moments made sweeter
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-ink/70">
            A glimpse of our handcrafted creations, made for gifting,
            celebrations, and everyday indulgence.
          </p>

        </div>


        {/* Gallery Grid */}
        <div className="grid gap-5 md:grid-cols-3 md:auto-rows-[220px]">

          {images.map((image) => (

            <div
              key={image.src}
              className={`
                group
                overflow-hidden
                border
                border-gold/20
                ${image.className}
              `}
            >

              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={900}
                className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    md:h-full
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}