import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  children: string;
  className?: string;
  staggerDelay?: number;
}

export function WordsPullUp({
  children,
  className = "",
  staggerDelay = 0.05,
}: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = children.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * staggerDelay,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInUp({
  children,
  className = "",
  delay = 0,
}: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerCardsProps {
  children: ReactNode;
  className?: string;
}

export function StaggerCards({ children, className = "" }: StaggerCardsProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15,
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  );
}
