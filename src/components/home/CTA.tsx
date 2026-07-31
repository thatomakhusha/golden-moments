import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-brown px-6 py-24 mt-5">

      <div className="flex flex-col items-center justify-center text-center">

        <p className="font-display text-[2.5rem] italic leading-tight text-white lg:text-[3rem]">
          Ready to create something special?
        </p>

        <p className="mt-5 max-w-xl font-light leading-8 text-ivory/80">
          Choose your favourite treats and share your ideas with us.
          We'll help bring your perfect creation to life.
        </p>

        <Link
          href="/order"
          className="
            mt-8
            rounded-full
            border
            border-white
            px-8
            py-4
            text-[11px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-brown
          "
        >
          Start Your Order
        </Link>

      </div>

    </section>
  );
};

export default CTA;