import { ArrowRight, Plus, Settings } from "lucide-react";
import { WordsPullUp, FadeInUp } from "./Animations";

function ProgressIndicator({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-white/50 text-[11px] font-medium tabular-nums">
        {left}
      </span>
      <div className="flex-1 h-px bg-white/20 relative">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-white/60" />
      </div>
      <span className="text-white/50 text-[11px] font-medium tabular-nums">
        {right}
      </span>
    </div>
  );
}

const features = [
  {
    icon: Plus,
    title: "DURABILITY",
    description:
      "Reliable wind turbines designed to deliver stable and consistent performance across diverse environments and conditions.",
  },
  {
    icon: Settings,
    title: "RELIABLE TECH",
    description:
      "Smart control systems ensure efficient generation and long-term operational stability in real conditions for businesses.",
  },
];

export default function Performance() {
  return (
    <section
      id="performance"
      className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeInUp>
          <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em]">
            ✱ ENGINEERED FOR PERFORMANCE
          </p>
        </FadeInUp>

        <WordsPullUp
          className="text-black text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] max-w-3xl mt-6"
          staggerDelay={0.04}
        >
          Reduce external reliance and secure stable energy. Our solutions deliver field-tested durability, efficiency, and long-term performance worldwide at scale.
        </WordsPullUp>

        <FadeInUp delay={0.2}>
          <a
            href="#contact"
            className="bg-black text-white rounded-full pl-5 pr-2 py-2.5 text-[11px] font-medium inline-flex items-center gap-2.5 mt-6 hover:bg-gray-800 transition-colors duration-200"
          >
            Get in touch
            <span className="bg-white rounded-full w-5 h-5 inline-flex items-center justify-center shrink-0">
              <ArrowRight
                size={11}
                className="text-black"
                strokeWidth={2.5}
              />
            </span>
          </a>
        </FadeInUp>

        {/* Two-column layout */}
        <div className="lg:grid lg:grid-cols-2 gap-6 mt-16 items-stretch">
          {/* Left — feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feat, index) => (
              <FadeInUp key={feat.title} delay={0.1 + index * 0.12}>
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-7 h-full">
                  <feat.icon size={18} className="text-gray-400" strokeWidth={2} />
                  <p className="text-black text-[11px] font-bold uppercase tracking-[0.15em] mt-4">
                    {feat.title}
                  </p>
                  <p className="text-gray-500 text-xs leading-[1.7] mt-2.5">
                    {feat.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Right — image card */}
          <FadeInUp delay={0.15} className="h-full">
            <div className="rounded-2xl overflow-hidden h-[380px] md:h-full min-h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format"
                alt="Wind turbine from low angle against cloudy sky"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <p className="text-white text-sm italic leading-relaxed">
                  Innovation and stability in every turbine we build to power
                  your farms business
                </p>
                <ProgressIndicator left="01" right="06" />
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
