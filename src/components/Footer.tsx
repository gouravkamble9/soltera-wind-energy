import { ArrowRight } from "lucide-react";
import { FadeInUp } from "./Animations";

const footerLinks = {
  Company: ["About", "Careers", "Press", "Partners"],
  Solutions: ["Residential", "Commercial", "Industrial", "Agriculture"],
  Resources: ["Blog", "Case Studies", "Documentation", "Support"],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white pt-24 pb-8 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeInUp>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium tracking-[-0.04em] leading-[0.85]">
                LET'S TALK
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mt-5 max-w-md">
                Ready to power your operations with clean, reliable wind energy?
                Get in touch with our team today.
              </p>
            </div>
            <a
              href="mailto:hello@soltera.energy"
              className="bg-white text-black rounded-full pl-6 pr-3 py-3 text-sm font-medium inline-flex items-center gap-3 hover:bg-gray-200 transition-colors duration-200 shrink-0"
            >
              hello@soltera.energy
              <span className="bg-black rounded-full w-7 h-7 inline-flex items-center justify-center shrink-0">
                <ArrowRight size={14} className="text-white" strokeWidth={2} />
              </span>
            </a>
          </div>
        </FadeInUp>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-20 mb-12" />

        {/* Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-bold tracking-tight">
              SOLTERA
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mt-3">
              Powering the future with clean, efficient, and reliable wind
              energy solutions.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">
                {heading}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-xs hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[10px]">
            © {new Date().getFullYear()} Soltera Wind Energy. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 text-[10px] hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 text-[10px] hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
