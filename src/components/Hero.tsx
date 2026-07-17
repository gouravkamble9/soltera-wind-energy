import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RefreshCw } from "lucide-react";

const heroWord = "SOLTERA";

export default function Hero() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-20px" });

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2rem] md:rounded-b-[2.5rem] lg:rounded-b-[3rem]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80&auto=format"
          alt="Wind turbines on rolling green hills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Main SOLTERA text */}
      <div
        ref={titleRef}
        className="relative z-20 px-0 pt-[18vh] sm:pt-[22vh] md:pt-[26vh]"
      >
        <h1 className="text-white font-display text-[14.5vw] sm:text-[14vw] md:text-[13.5vw] lg:text-[13vw] font-medium leading-[0.85] tracking-[-0.04em] text-center select-none w-full">
          {heroWord.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={
                titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.04 + 0.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Bottom-left content */}
      <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-6 md:bottom-12 md:left-8 lg:bottom-16 lg:left-12 z-20 max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/70 text-xs max-w-[280px] leading-relaxed"
        >
          Wind energy is more than a trend. It helps reduce costs and gives
          your farm full independence today.
        </motion.p>

        <div className="mt-5">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-white font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1] tracking-tight">
              POWER YOUR
            </span>
            <RefreshCw
              size={18}
              className="text-white/80 mt-0.5 shrink-0"
              strokeWidth={2}
            />
          </motion.div>
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="text-white font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1] tracking-tight">
              FARM SMARTLY
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right floating stat cards */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-8 lg:bottom-16 lg:right-12 z-10 flex flex-row sm:flex-row items-end gap-3 sm:gap-4 max-sm:flex-col">
        {/* Card 1 — 10+ YEARS */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.8,
          }}
          className="group bg-white/95 backdrop-blur-sm rounded-3xl p-3 sm:p-3.5 md:p-4 shadow-lg shadow-black/10 w-[120px] sm:w-[130px] md:w-[160px] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 transition-all duration-300"
        >
          <p className="font-display text-center text-base sm:text-lg md:text-xl font-bold text-black leading-tight">
            10+ YEARS
          </p>
          <p className="text-gray-500 text-center text-[9px] sm:text-[10px] leading-relaxed mt-1.5 max-w-[130px]">
            A decade of expertise in efficient and clean energy.
          </p>
        </motion.div>

        {/* Card 2 — 1.5M+ WIND POWER UNITS */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.0,
          }}
          className="group bg-white/95 backdrop-blur-sm rounded-3xl p-3 sm:p-3.5 md:p-2 shadow-lg shadow-black/10 w-[140px] sm:w-[150px] md:w-[170px] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15 transition-all duration-300 text-center"
        >
          <div className="w-full h-12 sm:h-14 md:h-16 rounded-3xl overflow-hidden mb-2.5">
            <img
              src="https://res.cloudinary.com/dyhgopnii/image/upload/v1784261787/peterdargatz-windmill-50512_1280_myerjc.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-display text-base sm:text-lg md:text-xl font-bold text-black leading-[1.1]">
            1.5M+
            WIND
            POWER UNITS
          </p>
          <p className="text-gray-500 text-[9px] sm:text-[10px] leading-relaxed mt-1.5 max-w-[150px]">
            Farmers trust us to power their land with wind across all
            seasons reliably.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
