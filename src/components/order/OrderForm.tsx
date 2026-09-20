"use client";

import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    flavour: "",
    filling: "",
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

Flavour:
${formData.flavour}

Filling:
${formData.filling}

Collection Date:
${formData.date}

Additional Details:
${formData.details}
    `;

    const whatsappURL = `https://wa.me/27796154201?text=${encodeURIComponent(
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
        <div className="space-y-6 border border-gold/20 bg-white p-8 lg:p-12">

          {/* Name */}
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

          {/* WhatsApp Number */}
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

          {/* Category */}
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
              <option value="">Select category</option>
              <option value="Luxury Gift Box">Luxury Gift Box</option>
              <option value="Indulgence Box">Indulgence Box</option>
              <option value="Cupcakes">Cupcakes</option>
              <option value="Red Cakes">Red Cakes</option>
              <option value="Scones">Scones</option>
              <option value="Custom Request">Custom Request</option>
            </select>
          </div>

          {/* Flavour */}
          <div>
            <label className="mb-2 block text-sm text-brown">
              Flavour
            </label>

            <select
              name="flavour"
              value={formData.flavour}
              onChange={handleChange}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
            >
              <option value="">Select flavour</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Red Velvet">Red Velvet</option>
            </select>
          </div>

          {/* Filling */}
          <div>
            <label className="mb-2 block text-sm text-brown">
              Filling
            </label>

            <select
              name="filling"
              value={formData.filling}
              onChange={handleChange}
              className="w-full border border-gold/20 px-4 py-3 outline-none focus:border-gold"
            >
              <option value="">Select filling</option>
              <option value="Caramel">Caramel</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Mixed Berry Sauce">
                Mixed Berry Sauce
              </option>
            </select>
          </div>

          {/* Collection Date */}
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

          {/* Additional Details */}
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
              placeholder="Colours, quantity, theme, special requests..."
            />
          </div>

          {/* Submit */}
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