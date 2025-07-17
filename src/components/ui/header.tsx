"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion'; 
import { Menu, X } from 'lucide-react'; // For mobile menu icon

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
  gradientFrom: 'from-stone-900/70',
  gradientVia: 'via-rose-900/60',
  gradientTo: 'to-purple-900/50',
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#top-picks" },
    { name: "Process", href: "#process" },
    { name: "Collections", href: "#collections" },
    { name: "Why Choose Us", href: "#whyus" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: easeOut }, // ✅ fixed
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      backdropFilter: "blur(8px)",
      height: "70px",
      borderBottom: "1px solid #d6d3d1", // ✅ hex for border-stone-300
      transition: { duration: 0.3, ease: easeOut }, // ✅ fixed
    },
    unscrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "none",
      backdropFilter: "blur(5px)",
      height: "80px",
      borderBottom: "none",
      transition: { duration: 0.3, ease: easeOut }, // ✅ fixed
    },
  };


  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0, transition: { duration: 0.4, ease: easeOut } },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      // Apply dynamic height based on scroll state
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-out
        ${isScrolled ? 'bg-white/95 shadow-lg border-b border-stone-200 backdrop-blur-md h-[70px]' : 'bg-white/80 backdrop-blur-sm h-[80px]'}`}
    >
      {/* Logo/Brand Name */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 cursor-pointer" // Added cursor-pointer
        whileHover={{ scale: 1.03 }} // Subtle hover effect for logo
        whileTap={{ scale: 0.98 }} // Subtle tap effect
      >
        {/* Elegant Diamond/Gift Box Icon (SVG) - Enhanced for luxury */}
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="url(#goldGradient)"
          stroke="#333"       
          strokeWidth="0.5"    
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <path
            d="M20 7h-3.17a3 3 0 0 0 1.17-2.4C18 3.15 16.85 2 15.4 2c-1.2 0-2.24.87-2.56 2.06A2.88 2.88 0 0 0 12 4.5a2.88 2.88 0 0 0-.84-.44C10.84 2.87 9.8 2 8.6 2 7.15 2 6 3.15 6 4.6c0 .91.45 1.72 1.17 2.4H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-8h1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1ZM8.6 4c.34 0 .64.22.75.54l.67 2.02H8.6A1.6 1.6 0 0 1 8.6 4Zm7.8 0c0 .88-.72 1.6-1.6 1.6h-1.42l.67-2.02A.8.8 0 0 1 16.4 4ZM12 6.5l.6 1.8H11.4l.6-1.8ZM6 10v8h4v-8H6Zm6 0v8h4v-8h-4Zm6 0h-2v8h2v-8Zm2-2v2H4V8h16Z"
          />
        </svg>

        <a href="#firstSection">
          <span className={`text-2xl font-bold ${luxuryColors.secondary} font-playfair-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-purple-900`}>
            The Treasure Hampers
          </span>
        </a>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-10"> {/* Increased space between links */}
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + navLinks.indexOf(link) * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <a
                href={link.href}
                className={`relative ${luxuryColors.primary} text-lg font-medium uppercase tracking-wide transition-colors duration-200 group
                  hover:text-rose-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded`}
              >
                {link.name}
                {/* Enhanced Underline effect on hover */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-purple-600 transition-all duration-300 group-hover:w-full`}></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 rounded-md ${luxuryColors.primary} hover:${luxuryColors.secondary} transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500`}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />} {/* Slightly larger icons */}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          className="fixed inset-0 z-50 flex flex-col items-center justify-start md:hidden bg-white text-black"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-black"
            aria-label="Close mobile menu"
          >
            <X size={28} />
          </button>

          {/* Navigation Menu */}
          <ul className="flex flex-col items-center space-y-10 w-full bg-white text-black" style={{ marginTop: '4rem', paddingBottom: '4rem' }}>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.08,
                  duration: 0.3,
                  ease: [0.42, 0, 0.58, 1]
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold uppercase tracking-wide hover:text-amber-300 transition"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
