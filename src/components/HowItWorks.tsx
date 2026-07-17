import { WordsPullUp, FadeInUp } from "./Animations";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#f5f5f5] py-20 md:py-28 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeInUp>
          <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em]">
            ✱ HOW IT WORKS (STEP BY STEP)
          </p>
        </FadeInUp>

        <WordsPullUp
          className="text-black text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] max-w-2xl mt-6"
          staggerDelay={0.04}
        >
          We deliver a complete process from planning to launch with consistent results. Each solution is designed for efficiency and long-term reliability.
        </WordsPullUp>

        {/* Step card */}
        <FadeInUp delay={0.2} className="mt-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] flex flex-col md:flex-row">
            {/* Left — image */}
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&auto=format"
              alt="Business consultation meeting in modern office"
              className="w-full md:w-1/2 h-[280px] md:h-auto object-cover"
            />

            {/* Right — content */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <p className="font-display text-5xl md:text-6xl font-bold text-black tracking-tight leading-none">
                01
              </p>
              <p className="text-black text-[11px] font-bold uppercase tracking-[0.15em] mt-3">
                INITIAL CONSULTATION
              </p>
              <p className="text-gray-500 text-xs leading-[1.8] mt-4 max-w-md">
                We analyze your business needs, location, and energy consumption
                to understand the full scope of the project and define the most
                effective approach. Our team evaluates key factors such as scale,
                operational goals, and long-term expectations to ensure the
                solution aligns with your business strategy. This step allows us
                to identify the most efficient and cost-effective direction
                before moving forward.
              </p>

              {/* Progress */}
              <div className="flex items-center gap-3 mt-8">
                <span className="text-black text-[11px] font-bold tabular-nums">
                  01
                </span>
                <div className="flex-1 h-px bg-gray-200 relative">
                  <div className="absolute left-0 top-0 h-full w-[10%] bg-black" />
                </div>
                <span className="text-gray-400 text-[11px] font-medium tabular-nums">
                  05
                </span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
