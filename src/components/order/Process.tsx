export default function Process() {
  const steps = [
    {
      number: "I",
      title: "Choose Your Treats",
      description:
        "Browse our handcrafted creations and select the treats you'd like to order.",
    },
    {
      number: "II",
      title: "Place Your Order",
      description:
        "Submit your order details with your preferred collection date and any special requests.",
    },
    {
      number: "III",
      title: "Confirm Your Booking",
      description:
        "Orders must be placed at least 3 days in advance. A 50% non-refundable deposit is required to secure your order.",
    },
    {
      number: "IV",
      title: "Collection",
      description:
        "The remaining balance is paid the day before collection. Orders are collected from our studio.",
    },
  ];

  return (
    <section className="bg-ivory px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <div className="mb-6 flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>How It Works</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-4xl text-brown lg:text-5xl">
            From order to collection
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-ink/70">
            Every creation is carefully prepared from the moment you place
            your order until it is ready for collection.
          </p>

        </div>


        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center"
            >

              <span className="font-display text-4xl italic text-gold">
                {step.number}
              </span>

              <h3 className="mt-6 font-display text-2xl text-brown">
                {step.title}
              </h3>

              <p className="mt-4 font-light leading-7 text-ink/70">
                {step.description}
              </p>

            </div>
          ))}

        </div>


        {/* Order Information */}
        <div className="mx-auto mt-20 max-w-3xl border border-gold/20 bg-white p-8 text-center">

          <h3 className="font-display text-2xl text-brown">
            Important Information
          </h3>

          <div className="mt-6 space-y-3 text-sm font-light leading-7 text-ink/70">

            <p>
              Orders must be placed at least 3 days before collection.
            </p>

            <p>
              A 50% non-refundable deposit is required to confirm your order.
            </p>

            <p>
              The remaining balance must be paid the day before collection.
            </p>

            <p>
              Collection only — no deliveries available.
            </p>

            <p>
              619 Seamoge St, Zone 1, Ga-Rankuwa, 0208
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}