"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // Assuming this component is styled for luxury
// Original import for ContactForm - ensure this file exists and is styled
import ContactForm from "@/components/ui/contact";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Header from "@/components/ui/header"; // Assuming this component is styled separately

// Unified Luxury Color Palette
const luxuryColors = {
  primary: 'text-stone-800', // Deep, rich dark grey/brown for main text and accents
  secondary: 'text-rose-900', // Deep rose/burgundy for headings and key elements
  accent: 'text-amber-600', // A subtle gold/amber for highlights and special text (e.g., star icons)
  backgroundLight: 'bg-stone-50', // Very light, warm off-white for main background
  backgroundMid: 'bg-neutral-100', // Slightly darker neutral for alternating sections
  border: 'border-stone-300', // Soft, muted border color for inputs and cards
  textDark: 'text-gray-700', // Standard body text color
  textLight: 'text-white', // White for hero text and dark backgrounds
  buttonBg: 'bg-rose-800', // Rich rose for primary buttons
  buttonHover: 'hover:bg-rose-900', // Darker rose on hover
  focusRing: 'focus:ring-rose-500', // Focus ring color for inputs
  modalBg: 'bg-white', // Modal background (used in ContactForm)
  modalBorder: 'border-stone-200', // Modal border (used in ContactForm)
  gradientFrom: 'from-stone-900/70', // Consistent gradient definition
  gradientVia: 'via-rose-900/60',
  gradientTo: 'to-purple-900/50',
};

// Define navLinks here so it's accessible in the footer
  const navLinks = [
    { name: "Products", href: "#top-picks" },
    { name: "Process", href: "#process" },
    { name: "Collections", href: "#collections" },
    { name: "Why Choose Us", href: "#whyus" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
  ];

// Product data with more descriptive and luxury-oriented placeholder text
const products = [
  { title: "Grandeur Collection", image: "/images/grand.jpg", tag: "Hampers" , description: "A curated selection of luxurious, hand-poured resin art pieces that elevate every celebration."},
  { title: "Timeless Memories", image: "/images/scrapbook.jpg", tag: "Scrapbooks" , description: "Crafted to last a lifetime—unique keepsakes that capture love, laughter, and legacy."},
  { title: "Artisan Resin Creations", image: "/images/resin.jpg", tag: "Resin Arts", description: "Where creativity meets craftsmanship—bespoke resin gifts that tell your story beautifully."},
];

// --- Main TreasureHampersPage Component ---
// This is the main page component that renders the entire website layout
export default function TreasureHampersPage() {

  return (
    // Main container with a sophisticated background and text color
    <div className={`min-h-screen ${luxuryColors.backgroundLight} ${luxuryColors.textDark} font-inter overflow-x-hidden`}>
      {/* Header - Assuming it's styled for luxury within its own component */}
      <Header />

      {/* Hero Section with refined background and animations */}
      <section
        className="relative text-center min-h-[90vh] flex flex-col justify-center items-center px-4"
        id="firstSection"
        style={{
          backgroundImage: `url('/images/heroImage.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect for luxury
        }}
      >
        {/* Subtle gradient overlay for depth and text readability */}
        <div className={`absolute inset-0 bg-gradient-to-r ${luxuryColors.gradientFrom} ${luxuryColors.gradientVia} ${luxuryColors.gradientTo} backdrop-brightness-75`} />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-30 text-white max-w-5xl px-4" // Increased z-index
        >
          {/* Main heading with a luxury serif font */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight font-playfair-display drop-shadow-lg">
            The Treasure Hampers
          </h1>
          {/* Subtitle with a clean sans-serif font and subtle animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="text-xl md:text-3xl lg:text-4xl font-light tracking-wide opacity-90 drop-shadow-md"
          >
            Crafting bespoke emotions, one exquisite hamper at a time...
          </motion.p>
        </motion.div>
        {/* Refined scroll indicator animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
          className="absolute bottom-10 text-white text-xl opacity-80 animate-pulse-subtle z-30" // Increased z-index
        >
          &#x2193; Discover Our Collections
        </motion.div>
      </section>

      {/* Top Picks with enhanced card styling */}
      <section id="top-picks" className={`py-28 ${luxuryColors.backgroundMid}`}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center ${luxuryColors.secondary} mb-16 font-playfair-display`}>
          Our Curated Selections
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ title, image, tag , description}, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: idx * 0.18, ease: "easeOut" }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} // More pronounced, softer shadow
              className="rounded-2xl overflow-hidden"
            >
              <Card className={`bg-white/95 backdrop-blur-sm border-2 ${luxuryColors.border} shadow-xl rounded-2xl overflow-hidden`}>
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={image}
                      alt={title}
                      width={600}
                      height={450} // Slightly taller for better aspect
                      className="w-full h-72 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    <span className={`absolute top-5 left-5 ${luxuryColors.buttonBg} ${luxuryColors.textLight} text-sm px-5 py-2 rounded-full font-semibold tracking-wide uppercase`}>
                      {tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className={`text-2xl font-semibold ${luxuryColors.primary} mb-3 font-playfair-display`}>{title}</h3>
                    <p className={`text-gray-600 text-base leading-relaxed`}>{description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process Section with refined visuals */}
      <section id="process" className={`relative py-28 ${luxuryColors.backgroundLight} overflow-hidden`}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center ${luxuryColors.secondary} mb-20 relative z-10 font-playfair-display`}>
          Our Meticulous Creative Journey
        </h2>

        {/* More subtle and ethereal background elements */}
        <div className="absolute -top-20 left-0 w-96 h-96 bg-rose-100 rounded-full opacity-15 blur-3xl animate-blob z-0"></div>
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-100 rounded-full opacity-10 blur-3xl animate-blob animation-delay-2000 z-0"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 z-10">
          {[
            { title: "Plan", desc: "Collaborate on your unique vision and bespoke requirements.", icon: "💡" },
            { title: "Design", desc: "Craft exquisite concepts and detailed plans with precision.", icon: "📐" },
            { title: "Create", desc: "Handcraft each piece with meticulous attention and passion.", icon: "✨" },
            { title: "Deliver", desc: "Present your exquisite hamper with utmost care and elegance.", icon: "💖" },
          ].map(({ title, desc, icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className={`group ${luxuryColors.backgroundMid} hover:bg-white p-9 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${luxuryColors.border} relative`}
            >
              <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <h3 className={`text-2xl font-bold ${luxuryColors.primary} mb-4 group-hover:scale-105 transition-transform font-playfair-display`}>
                {title}
              </h3>
              <p className={`text-gray-700 leading-relaxed text-base`}>{desc}</p>

              {/* Connector line for desktop view */}
              {idx !== 3 && (
                <div className="hidden md:block absolute top-1/2 right-[-35px] transform -translate-y-1/2 z-20">
                  <div className={`w-14 h-1.5 ${luxuryColors.border} rounded-full`}></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Grid - Explore More */}
      <section
        id="collections"
        className={`py-28 bg-gradient-to-r from-rose-50 via-stone-50 to-purple-50 relative overflow-hidden`}
      >
        {/* Optional decorative background blobs - refined colors */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-100 opacity-15 rounded-full blur-3xl z-0 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-110 h-110 bg-purple-100 opacity-10 rounded-full blur-3xl z-0 animate-blob animation-delay-3000"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-center ${luxuryColors.secondary} mb-16 font-playfair-display`}>Explore Our Exquisite Collections</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6">
            {[
              { title: "Resin Artistry", image: "/images/watch.jpg" },
              { title: "Heirloom Scrapbooks", image: "/images/scrap.jpeg" },
              { title: "Grand Hampers", image: "/images/hamp.jpg" },
              { title: "Elegant Floral Bouquets", image: "/images/bouquet.png" },
              { title: "Signature Gift Wrapping", image: "/images/packaging.jpg" },
              { title: "Bespoke Creations", image: "/images/bespoke.jpg" },
            ].map(({ title, image }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="rounded-2xl"
              >
                <Card className={`rounded-2xl border-2 ${luxuryColors.border} hover:scale-[1.01] hover:shadow-2xl transition-transform duration-300 bg-white/95`}>
                  <CardContent className="p-0">
                    <Image
                      src={image}
                      alt={title}
                      width={600}
                      height={450} // Consistent height
                      className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <div className="p-6">
                      <h2 className={`text-xl font-semibold ${luxuryColors.primary} font-playfair-display`}>{title}</h2>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Refined buttons and gradient */}
      <motion.section
        id='basedinudaipur'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`bg-gradient-to-r from-rose-900 via-purple-900 to-rose-900 ${luxuryColors.textLight} py-24 text-center`}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-5 font-playfair-display">Based in Indore & Udaipur</h3>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">Connect with us to curate your perfect, personalized gift experience.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a
              href="https://www.instagram.com/the_treasure_hampers/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-10 py-4 font-medium ${luxuryColors.buttonBg} ${luxuryColors.buttonHover} ${luxuryColors.textLight} shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
            >
              Visit Instagram
            </a>
            <a
              href="https://wa.me/919000000000" // Placeholder number
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-10 py-4 font-medium border-2 border-white text-white bg-transparent shadow-lg hover:bg-white hover:text-rose-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
            >
              Chat on WhatsApp
            </a>
          </div>
      </motion.section>

      {/* Why Choose Us Section - Enhanced styling */}
      <section
        id="whyus"
        className={`py-28 px-4 sm:px-8 ${luxuryColors.backgroundLight} relative text-center overflow-hidden`}
      >
        {/* Background Decorative Blobs - More subtle */}
        <div className="absolute -top-40 -left-40 w-100 h-100 bg-rose-100 opacity-20 rounded-full blur-[120px] z-0 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-purple-100 opacity-15 rounded-full blur-[120px] z-0 animate-blob animation-delay-1500"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-extrabold ${luxuryColors.secondary} mb-10 leading-tight font-playfair-display`}>
            Why Choose The Treasure Hampers?
          </h2>
          <p className={`text-gray-700 text-lg md:text-xl mb-14 max-w-3xl mx-auto`}>
            At <span className={`font-semibold ${luxuryColors.secondary}`}>The Treasure Hampers</span>, every creation is designed with unparalleled passion, wrapped in timeless elegance, and crafted for truly unforgettable moments.
          </p>

          <ul className="text-left text-gray-700 space-y-7 text-base md:text-lg max-w-xl mx-auto">
            {[
              ["🎁", "Exclusively handmade with premium, ethically sourced materials."],
              ["🎨", "Fully customizable to perfectly match your unique theme and vision."],
              ["🚚", "Reliable and secure delivery services available across India."],
              ["💖", "Meticulously packed to ensure pristine condition and heartfelt presentation."],
            ].map(([icon, text], index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className={`bg-white border-2 ${luxuryColors.border} rounded-xl px-7 py-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4`}
              >
                <span className={`text-3xl ${luxuryColors.accent}`}>{icon}</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials Section - Refined cards and layout */}
      <section id='testimonials' className={`relative py-28 ${luxuryColors.backgroundMid} overflow-hidden`}>
        {/* Background elements */}
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-rose-200 opacity-20 rounded-full blur-3xl z-0 animate-blob"></div>
        <div className="absolute right-0 bottom-0 w-100 h-100 bg-purple-200 opacity-15 rounded-full blur-3xl z-0 animate-blob animation-delay-2500"></div>

        <h2 className={`text-4xl md:text-5xl font-bold text-center ${luxuryColors.secondary} mb-16 relative z-10 font-playfair-display`} style={{ marginTop: '1rem', paddingBottom: '1rem' }}>Hear From Our Esteemed Clients</h2>
        <div className="grid md:grid-cols-2 gap-12 px-6 max-w-6xl mx-auto relative z-10">
          {[
            { text: "The hamper was an absolute masterpiece! It far exceeded all my expectations and brought immense joy. Truly exceptional.", name: "— Chirag, Udaipur" },
            { text: "The personalized scrapbook was incredibly touching. It beautifully encapsulated our cherished memories, making it a timeless keepsake.", name: "— Radika, Indore" },
            { text: "Every detail was perfect. The quality and craftsmanship are unparalleled. Highly recommend for truly special gifts.", name: "— Krishna, Indore" },
            { text: "Their custom resin products are stunning. The attention to detail and artistic flair truly make them unique works of art.", name: "— Nisha, Udaipur" }
          ].map(({ text, name }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.18, ease: "easeOut" }}
              className={`bg-white p-9 rounded-2xl shadow-xl border-2 ${luxuryColors.border} flex flex-col justify-between`}
            >
              <p className={`text-gray-700 italic text-lg leading-relaxed`}>&ldquo;{text}&rdquo;</p>
              <p className={`text-right ${luxuryColors.primary} font-semibold mt-7 text-base`}>{name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Refined accordion style */}
      <section id="faq" className={`py-28 bg-gradient-to-r from-rose-50 via-stone-50 to-purple-50`}>
        <div>
          <h2 className={`text-4xl md:text-5xl font-bold text-center ${luxuryColors.secondary} mb-16 font-playfair-display`}>Frequently Asked Questions</h2>
          <div className="space-y-7 px-6 max-w-3xl mx-auto relative z-10">
            {[
              {
                q: "How can I place an order?",
                a: (
                  <>
                    You can easily place your order by connecting with us directly on Instagram or WhatsApp.
                    <br />
                    <br />
                    <a
                      href="https://www.instagram.com/the_treasure_hampers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className={`inline-flex items-center gap-2 ${luxuryColors.secondary} hover:underline transition transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500 rounded`}
                    >
                      <Instagram size={20} /> Instagram
                    </a>
                    <br />
                    <br />
                    <a
                      href="https://wa.me/918305777807"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className={`inline-flex items-center gap-2 text-green-700 hover:underline transition transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500 rounded`}
                    >
                      <BsWhatsapp size={20} /> WhatsApp
                    </a>
                  </>
                ),
              },
              {
                q: "Do you offer delivery services nationwide?",
                a: "Indeed! We proudly offer delivery across India. Delivery timelines and associated charges may vary based on your location, but rest assured, your exquisite hamper will arrive safely and beautifully presented.",
              },
              {
                q: "Is it possible to request bespoke customizations?",
                a: "Absolutely! A significant portion of our creations are meticulously personalized to align perfectly with your unique preferences and thematic requirements.",
              },
              {
                q: "What is the typical preparation time for an order?",
                a: "Most orders are prepared within 7 working days, though this can vary depending on the intricacy of customization. We will provide a precise timeline upon order confirmation.",
              },
              {
                q: "May I view examples of your previous work?",
                a: "Certainly! We invite you to explore our Instagram page, where we regularly showcase our latest collections of hampers, scrapbooks, and custom-designed gifts.",
              },
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`bg-white rounded-xl p-6 shadow-md border-2 ${luxuryColors.border} cursor-pointer`}
              >
                <summary className={`font-semibold text-lg ${luxuryColors.primary} cursor-pointer hover:text-rose-900 transition-colors`}>{faq.q}</summary>
                <div className={`text-gray-700 mt-4 text-base leading-relaxed`}>{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-28 ${luxuryColors.backgroundMid} px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${luxuryColors.secondary} mb-10 font-playfair-display`}>Connect With Us</h2>
          <p className={`text-gray-700 text-lg md:text-xl mb-14 max-w-xl mx-auto`}>
            Have a query or wish to commission a custom creation? Reach out, and we will be delighted to assist you.
          </p>
          {/* ContactForm is imported from "@/components/ui/contact" */}
          <ContactForm />
        </div>
      </section>


      {/* Footer - Refined appearance */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`bg-neutral-800 ${luxuryColors.textLight} text-center text-sm py-16 relative overflow-hidden`} // Darker background, more padding
      >
        {/* Subtle background pattern/texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("/images/footer.png")` }}></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12 px-6"> {/* Increased space-y */}

          {/* Slogan/Call to Action */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-2xl md:text-3xl font-playfair-display italic text-white/90 leading-relaxed"
          >
            `&quot;`Where every gift tells a story of luxury and heartfelt connection.`&quot;`
          </motion.p>

          {/* Social Icons - More prominent and animated */}
          <div className="flex justify-center gap-14"> {/* Increased gap */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, color: '#E0BBE4' }} // Light purple on hover
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.instagram.com/the_treasure_hampers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`text-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500 rounded`}
            >
              <Instagram size={36} /> {/* Larger icon */}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, color: '#957DAD' }} // Muted purple on hover
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="tel:+918305777807"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Call Us"
              className={`text-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 rounded`}
            >
              <Phone size={36} /> {/* Larger icon */}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, color: '#6B8E23' }} // Olive green on hover
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://wa.me/918305777807"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500 rounded`}
            >
              <BsWhatsapp size={36} /> {/* Larger icon */}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, color: '#87CEEB' }} // Sky blue on hover
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="mailto:chirag.kasera@gmail.com"
              aria-label="Email"
              className={`text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 rounded`}
            >
              <Mail size={36} /> {/* Larger icon */}
            </motion.a>
          </div>

          {/* Nav Links - Subtle and elegant */}
          <div className="flex justify-center flex-wrap gap-x-12 gap-y-6 text-white/70 text-lg"> {/* Increased gaps, slightly muted text */}
            {navLinks.map((link) => ( // Corrected: using 'link' directly
              <motion.a
                key={link.name} // Use link.name as key
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4 + navLinks.indexOf(link) * 0.05, duration: 0.6 }} // Use link directly in indexOf
                href={link.href}
                className={`relative hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded group`}
              >
                {link.name} {/* Use link.name */}
                {/* Subtle underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-white/50 text-sm mt-10 tracking-wide" // More muted, slightly tracked
          >
            &copy; 2025 The Treasure Hampers. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>

      {/* Floating WhatsApp Button - More subtle and integrated */}
      <a
        href="https://wa.me/918305777807"
        className={`fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-colors transform hover:-translate-y-1`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <BsWhatsapp size={26} />
      </a>

      {/* Global styles for custom fonts and animations */}
      <style jsx global>{`
        .font-playfair-display {
          font-family: 'Playfair Display', serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Keyframes for subtle blob animation */
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}
