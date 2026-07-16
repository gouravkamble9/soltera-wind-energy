import { ArrowRight } from "lucide-react";
import { WordsPullUp, FadeInUp } from "./Animations";

function ProgressIndicator({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-gray-400 text-[11px] font-medium tabular-nums">
        {left}
      </span>
      <div className="flex-1 h-px bg-gray-200 relative">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-black" />
      </div>
      <span className="text-gray-400 text-[11px] font-medium tabular-nums">
        {right}
      </span>
    </div>
  );
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Two-column header */}
        <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left label */}
          <div>
            <FadeInUp>
              <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em]">
                ✱ THE BENEFITS OF WIND POWER
              </p>
            </FadeInUp>
          </div>

          {/* Right — heading, body, CTA */}
          <div>
            <WordsPullUp
              className="text-black text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25]"
              staggerDelay={0.04}
            >
              Choose us to reduce operational costs and gain energy
              independence. Trust a partner that can deliver reliable,
              high-performance solutions.
            </WordsPullUp>

            <FadeInUp delay={0.2}>
              <p className="text-gray-500 text-sm leading-[1.7] mt-5 max-w-lg">
                Wind energy is a long-term investment that increases efficiency
                and stability while supporting growth. With Soltera, you get
                systems designed for durability, seamless integration, and
                consistent performance in real conditions.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
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
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FadeInUp delay={0.1}>
            <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col sm:flex-row min-h-[200px]">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80&auto=format"
                alt="Wind turbines on green hills"
                className="w-full sm:w-2/5 h-48 sm:h-auto object-cover"
              />
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-black tracking-tight">
                  5MW
                </p>
                <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em] mt-1.5">
                  CAPACITY
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mt-4 max-w-xs">
                  Supports demanding operations with powerful energy output over
                  time.
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col sm:flex-row min-h-[200px]">
              <img
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80&auto=format"
                alt="Wind turbines at sunset"
                className="w-full sm:w-2/5 h-48 sm:h-auto object-cover"
              />
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-black tracking-tight">
                  30%
                </p>
                <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em] mt-1.5">
                  COST REDUCTION
                </p>
                <p className="text-gray-500 text-xs leading-relaxed mt-4 max-w-xs">
                  Average savings after switching to wind energy solutions over
                  time worldwide with minimal maintenance.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>

        <ProgressIndicator left="02" right="03" />
      </div>
    </section>
  );
}
