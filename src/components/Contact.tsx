import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
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

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@soltera.energy",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+1 (555) 234-5678",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Austin, Texas, USA",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1920&q=80&auto=format"
          alt="Wind turbines at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-20 lg:items-end">
          {/* Left — heading + contact details */}
          <div>
            <FadeInUp>
              <p className="text-black text-[11px] font-semibold uppercase tracking-[0.15em]">
                ✱ GET IN TOUCH
              </p>
            </FadeInUp>

            <WordsPullUp
              className="text-black text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] mt-6"
              staggerDelay={0.04}
            >
              Ready to power your operations with clean, reliable wind energy? Let's start a conversation.
            </WordsPullUp>

            <FadeInUp delay={0.2}>
              <p className="text-gray-500 text-sm leading-[1.7] mt-5 max-w-lg">
                Whether you're looking to reduce costs, increase energy
                independence, or explore sustainable solutions, our team is here
                to help you every step of the way.
              </p>
            </FadeInUp>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-4">
              {contactDetails.map((detail, index) => (
                <FadeInUp key={detail.label} delay={0.25 + index * 0.1}>
                  <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <div className="bg-gray-50 rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
                      <detail.icon
                        size={18}
                        className="text-black"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p className="text-black text-[11px] font-bold uppercase tracking-[0.15em]">
                        {detail.label}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            <ProgressIndicator left="05" right="06" />
          </div>

          {/* Right — form card */}
          <FadeInUp delay={0.15}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] mt-10 lg:mt-auto">
              <div className="flex justify-between">
                <p className="text-black text-[11px] font-bold uppercase tracking-[0.15em]">
                  SEND US A MESSAGE
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i === 0 ? "bg-black" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <form className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.15em] mb-2">
                      First name
                    </p>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-gray-50 rounded-xl px-4 py-3 text-xs text-black placeholder:text-gray-300 border border-gray-100 outline-none focus:border-gray-300 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.15em] mb-2">
                      Last name
                    </p>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-gray-50 rounded-xl px-4 py-3 text-xs text-black placeholder:text-gray-300 border border-gray-100 outline-none focus:border-gray-300 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.15em] mb-2">
                    Email address
                  </p>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-gray-50 rounded-xl px-4 py-3 text-xs text-black placeholder:text-gray-300 border border-gray-100 outline-none focus:border-gray-300 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.15em] mb-2">
                    Company
                  </p>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full bg-gray-50 rounded-xl px-4 py-3 text-xs text-black placeholder:text-gray-300 border border-gray-100 outline-none focus:border-gray-300 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-medium uppercase tracking-[0.15em] mb-2">
                    Message
                  </p>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full bg-gray-50 rounded-xl px-4 py-3 text-xs text-black placeholder:text-gray-300 border border-gray-100 outline-none focus:border-gray-300 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white rounded-full pl-5 pr-2 py-2.5 text-[11px] font-medium inline-flex items-center gap-2.5 mt-2 hover:bg-gray-800 transition-colors duration-200 self-start"
                >
                  Send message
                  <span className="bg-white rounded-full w-5 h-5 inline-flex items-center justify-center shrink-0">
                    <ArrowRight
                      size={11}
                      className="text-black"
                      strokeWidth={2.5}
                    />
                  </span>
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
