"use client";

import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    details: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    const message = `
Hello Golden Moments,

I would like to place an order.

Name:
${formData.name}

WhatsApp Number:
${formData.phone}

Category:
${formData.category}

Collection Date:
${formData.date}

Order Details:
${formData.details}
    `;

    const whatsappURL = `https://wa.me/27768881684?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-ivory px-6 py-24 lg:px-10">

      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <div className="mb-6 flex items-center justify-center gap-4 text-[12px] uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold" />
            <span>Place Your Order</span>
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-display text-4xl text-brown lg:text-5xl">
            Tell us what you’re imagining
          </h2>

          <p className="mt-6 font-light leading-8 text-ink/70">
            Share your order details and we’ll continue the conversation
            with you on WhatsApp.
          </p>

        </div>


        {/* Form */}
        <div className="space-y-6 bg-white p-8 border border-gold/20 lg:p-12">


          <div>
            <label className="mb-2 block text-sm text-brown">
              Name
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
              placeholder="Your name"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm text-brown">
              WhatsApp Number
            </label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
              placeholder="+27..."
            />
          </div>


          <div>
            <label className="mb-2 block text-sm text-brown">
              What would you like to order?
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
            >
              <option value="">
                Select category
              </option>

              <option>
                Luxury Gift Box
              </option>

              <option>
                Indulgence Box
              </option>

              <option>
                Cupcakes
              </option>

              <option>
                Red Cakes
              </option>

              <option>
                Scones
              </option>

              <option>
                Custom Request
              </option>

            </select>
          </div>


          <div>
            <label className="mb-2 block text-sm text-brown">
              Collection Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm text-brown">
              Tell us more
            </label>

            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
              placeholder="Flavours, colours, quantity, theme, special requests..."
            />
          </div>


          <button
            onClick={sendToWhatsApp}
            className="
              w-full
              rounded-full
              bg-gold
              py-4
              text-xs
              uppercase
              tracking-[0.25em]
              text-white
              transition
              hover:opacity-90
            "
          >
            Send Order Request
          </button>


        </div>

      </div>

    </section>
  );
}