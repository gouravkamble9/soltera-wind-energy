import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Product", href: "#performance" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Clients", href: "#clients" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/10 backdrop-blur-sm" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Left */}
        <div className="flex items-center gap-5">
          <button
            className={pastHero ? "text-black" : "text-white"}
            aria-label="Logo"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="12" cy="2" r="1.5" />
              <circle cx="12" cy="22" r="1.5" />
              <circle cx="2" cy="12" r="1.5" />
              <circle cx="22" cy="12" r="1.5" />
              <circle cx="4.9" cy="4.9" r="1.5" />
              <circle cx="19.1" cy="19.1" r="1.5" />
              <circle cx="19.1" cy="4.9" r="1.5" />
              <circle cx="4.9" cy="19.1" r="1.5" />
            </svg>
          </button>
          <span
            className={`text-xs font-semibold tracking-wide ${
              pastHero ? "text-black" : "text-white"
            }`}
          >
            EN
          </span>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 ml-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                  pastHero
                    ? "text-gray-500 hover:text-black"
                    : "text-white hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden ml-1 ${
              pastHero ? "text-black" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search
              size={13}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white rounded-full pl-9 pr-4 py-[7px] text-[11px] border border-gray-200 outline-none focus:border-gray-400 transition-colors w-40"
            />
          </div>
          <a
            href="#contact"
            className="bg-black text-white rounded-full pl-5 pr-2 py-2 text-[11px] font-medium inline-flex items-center gap-2.5 hover:bg-gray-800 transition-colors duration-200"
          >
            Get in touch
            <span className="bg-white rounded-full w-[18px] h-[18px] inline-flex items-center justify-center shrink-0">
              <ArrowRight size={10} className="text-black" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 text-sm font-medium hover:text-black transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-3">
                <div className="relative">
                  <Search
                    size={13}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white rounded-full pl-9 pr-4 py-2.5 text-xs border border-gray-200 outline-none w-full"
                  />
                </div>
                <a
                  href="#contact"
                  className="bg-black text-white rounded-full px-5 py-3 text-xs font-medium inline-flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                  <span className="bg-white rounded-full w-5 h-5 inline-flex items-center justify-center">
                    <ArrowRight
                      size={12}
                      className="text-black"
                      strokeWidth={2.5}
                    />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
