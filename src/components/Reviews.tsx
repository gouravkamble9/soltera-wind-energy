import { ArrowRight, Star, Quote } from "lucide-react";
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

const reviews = [
  {
    quote:
      "Soltera transformed our energy operations. We saw a 30% reduction in costs within the first year, and their team was exceptional throughout the entire process.",
    name: "James Whitfield",
    role: "Operations Director",
    company: "Aero Fields",
    initials: "JW",
  },
  {
    quote:
      "The reliability and durability of their wind turbine systems exceeded our expectations. Our farm now operates with full energy independence year-round.",
    name: "Sarah Mitchell",
    role: "Farm Owner",
    company: "NexGen Farms",
    initials: "SM",
  },
  {
    quote:
      "Professional, efficient, and results-driven. Soltera delivered a solution that perfectly matched our industrial energy needs at a competitive price point.",
    name: "David Chen",
    role: "Chief Engineer",
    company: "Prime Turbines",
    initials: "DC",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2019/07/15/15/03/sunflowers-4339580_1280.jpg"
          alt="Wind turbine against sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <FadeInUp>
          <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">
            ✱ WHAT OUR CLIENTS SAY
          </p>
        </FadeInUp>

        <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-20 mt-6">
          {/* Left — heading + featured quote */}
          <div>
            <WordsPullUp
              className="text-white text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] max-w-2xl"
              staggerDelay={0.04}
            >
              Real feedback from businesses and farms that trust Soltera to deliver reliable wind energy solutions.
            </WordsPullUp>

            {/* Featured large quote */}
            <FadeInUp delay={0.2}>
              <div className="mt-10 relative">
                <Quote
                  size={40}
                  className="text-white/10 absolute -top-2 -left-1"
                  strokeWidth={1}
                />
                <p className="text-white/80 text-base sm:text-lg leading-[1.8] italic pl-4 border-l-2 border-white/20">
                  {reviews[0].quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">
                      {reviews[0].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">
                      {reviews[0].name}
                    </p>
                    <p className="text-white/40 text-[11px] mt-0.5">
                      {reviews[0].role}, {reviews[0].company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right — stat card + smaller reviews */}
          <div className="flex flex-col gap-4 mt-10 lg:mt-0">
            {/* Stats row */}
            <FadeInUp delay={0.15}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/10">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                      4.9
                    </p>
                    <p className="text-white/40 text-[10px] font-medium uppercase tracking-[0.15em] mt-1.5">
                      AVG RATING
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                      200+
                    </p>
                    <p className="text-white/40 text-[10px] font-medium uppercase tracking-[0.15em] mt-1.5">
                      REVIEWS
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                      98%
                    </p>
                    <p className="text-white/40 text-[10px] font-medium uppercase tracking-[0.15em] mt-1.5">
                      SATISFACTION
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-white fill-white"
                      strokeWidth={0}
                    />
                  ))}
                  <span className="text-white/40 text-[11px] ml-2">
                    Based on 200+ verified reviews
                  </span>
                </div>
              </div>
            </FadeInUp>

            {/* Remaining review cards */}
            {reviews.slice(1).map((review, index) => (
              <FadeInUp key={review.name} delay={0.25 + index * 0.12}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/10 hover:bg-white/8 transition-colors duration-300">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        className="text-white fill-white"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-[1.7]">
                    "{review.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">
                        {review.name}
                      </p>
                      <p className="text-white/40 text-[11px] mt-0.5">
                        {review.role}, {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}

            <FadeInUp delay={0.5}>
              <a
                href="#contact"
                className="bg-white text-black rounded-full pl-5 pr-2 py-2.5 text-[11px] font-medium inline-flex items-center gap-2.5 mt-2 hover:bg-gray-200 transition-colors duration-200"
              >
                Read more reviews
                <span className="bg-black rounded-full w-5 h-5 inline-flex items-center justify-center shrink-0">
                  <ArrowRight
                    size={11}
                    className="text-white"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </FadeInUp>
          </div>
        </div>

        <ProgressIndicator left="04" right="05" />
      </div>
    </section>
  );
}
