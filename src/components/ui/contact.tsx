"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeozqyaw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        setShowModal(true); // Show modal on success
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {!showModal && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-pink-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full border border-pink-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="e.g. Priya Sharma"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pink-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full border border-pink-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-pink-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full border border-pink-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Tell us about your gifting idea or inquiry..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-md transition cursor-pointer hover:cursor-pointer"
            >
              Send Message
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-600 text-center font-medium">Oops! Something went wrong. Please try again.</p>
          )}
        </form>
      )}

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-md mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-pink-800 mb-4">Thank you! 💌</h3>
            <p>Your message has been sent successfully. We&apos;ll be in touch soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md cursor-pointer hover:cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
