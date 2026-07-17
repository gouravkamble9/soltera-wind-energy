import { ArrowRight } from "lucide-react";
import { WordsPullUp, FadeInUp } from "./Animations";

const clients = [
  { name: "AERO FIELDS", industry: "Agriculture" },
  { name: "VERDANT POWER", industry: "Utilities" },
  { name: "TERRA WIND", industry: "Industrial" },
  { name: "NEXGEN FARMS", industry: "Agriculture" },
  { name: "BLUE RIDGE ENERGY", industry: "Commercial" },
  { name: "PRIME TURBINES", industry: "Manufacturing" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — image card with overlay */}
          <FadeInUp>
            <div className="rounded-2xl overflow-hidden h-[380px] md:h-full min-h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80&auto=format"
                alt="Wind turbines on rolling green hills"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">
                  150+
                </p>
                <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mt-2">
                  ACTIVE PARTNERSHIPS
                </p>
                <p className="text-white/60 text-xs leading-relaxed mt-3 max-w-xs">
                  Trusted by leading companies across agriculture, utilities,
                  and industrial sectors worldwide.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <span className="text-white/50 text-[11px] font-medium tabular-nums">
                    04
                  </span>
                  <div className="flex-1 h-px bg-white/20 relative">
                    <div className="absolute left-0 top-0 h-full w-[75%] bg-white/60" />
                  </div>
                  <span className="text-white/50 text-[11px] font-medium tabular-nums">
                    06
                  </span>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Right — header + client cards */}
          <div>
            <FadeInUp>
              <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em]">
                ✱ TRUSTED BY LEADING BRANDS
              </p>
            </FadeInUp>

            <WordsPullUp
              className="text-black text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] mt-6"
              staggerDelay={0.04}
            >
              Partnering with companies worldwide to deliver reliable, high-performance wind energy solutions at scale.
            </WordsPullUp>

            <FadeInUp delay={0.2}>
              <p className="text-gray-500 text-sm leading-[1.7] mt-5 max-w-lg">
                From agriculture to industrial operations, our clients trust
                Soltera to provide durable and efficient wind power systems
                tailored to their specific needs.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <a
                href="#contact"
                className="bg-black text-white rounded-full pl-5 pr-2 py-2.5 text-[11px] font-medium inline-flex items-center gap-2.5 mt-6 hover:bg-gray-800 transition-colors duration-200"
              >
                View all clients
                <span className="bg-white rounded-full w-5 h-5 inline-flex items-center justify-center shrink-0">
                  <ArrowRight
                    size={11}
                    className="text-black"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </FadeInUp>

            {/* Client cards grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {clients.map((client, index) => (
                <FadeInUp key={client.name} delay={0.35 + index * 0.06}>
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <p className="font-display text-xs sm:text-sm font-bold text-black tracking-tight leading-tight">
                      {client.name}
                    </p>
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.15em] mt-1.5">
                      {client.industry}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
