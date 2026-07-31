import Image from "next/image";

const luxuryBoxes = [
  {
    title: "Signature Box",
    price: "From R450",
    description:
      "A beautifully curated gift box featuring a bento cake and 8 handcrafted cupcakes, perfect for birthdays, celebrations, and special moments.",
    image: "/images/GiftBoxes/SignatureBox.jpeg",
  },
  {
    title: "Intimate Box",
    price: "From R250",
    description:
      "A smaller luxury treat box featuring a bento cake and 2 handcrafted cupcakes, made for thoughtful gifting and intimate celebrations.",
    image: "/images/GiftBoxes/IntimateBox.jpeg",
  },
];

const indulgenceBoxes = [
  {
    title: "Grand Indulgence",
    price: "R300",
    description:
      "A generous assortment of freshly baked treats, thoughtfully prepared for sharing and creating memorable moments.",
    image: "/images/GiftBoxes/GrandIndulgence.jpeg",
  },
  {
    title: "Petite Indulgence",
    price: "R160",
    description:
      "A petite selection of assorted baked treats, perfect for smaller gatherings, gifts, or simply enjoying something sweet.",
    image: "/images/GiftBoxes/PetiteIndulgence.jpeg",
  },
];

function BoxItem({
  title,
  price,
  description,
  image,
  reverse = false,
}: {
  title: string;
  price: string;
  description: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`
        grid items-center gap-12 lg:grid-cols-2
        ${reverse ? "lg:[&>div:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={700}
          height={800}
          className="h-auto w-full max-w-lg object-contain"
        />
      </div>

      {/* Text */}
      <div className="max-w-md">
        <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold">
          Gift Box
        </p>

        <h3 className="font-display text-4xl leading-tight text-brown">
          {title}
        </h3>

        <p className="mt-5 font-light leading-8 text-ink/70">
          {description}
        </p>

        <p className="mt-6 font-display text-2xl text-brown">
          {price}
        </p>
      </div>
    </div>
  );
}

export default function GiftBoxes() {
  return (
    <section id="creations" className="px-6 py-24 lg:px-10">

      {/* Header */}
      <div className="mx-auto mb-20 max-w-3xl text-center">

        <div className="mb-6 flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-8 bg-gold" />
          <span>Our Creations</span>
          <span className="h-px w-8 bg-gold" />
        </div>

        <h2 className="font-display text-4xl leading-tight text-brown lg:text-5xl">
          Thoughtfully crafted gifts
        </h2>

        <p className="mt-6 font-light leading-8 text-ink/70">
          Beautifully prepared baked creations designed for gifting,
          celebrating, and making every occasion memorable.
        </p>

      </div>


      {/* Luxury Gift Boxes */}
      <div className="mx-auto max-w-6xl">

        <h3 className="mb-14 text-center font-display text-3xl text-brown">
          Luxury Gift Boxes
        </h3>

        <div className="space-y-24">

          {luxuryBoxes.map((box, index) => (
            <BoxItem
              key={box.title}
              {...box}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </div>


      {/* Indulgence Boxes */}
      <div className="mx-auto mt-32 max-w-6xl">

        <h3 className="mb-14 text-center font-display text-3xl text-brown">
          Indulgence Boxes
        </h3>

        <div className="space-y-24">

          {indulgenceBoxes.map((box, index) => (
            <BoxItem
              key={box.title}
              {...box}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </div>

    </section>
  );
}