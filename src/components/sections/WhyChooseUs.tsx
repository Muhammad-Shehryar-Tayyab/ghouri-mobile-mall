import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedCounter({ value, text, suffix = "" }: { value: number, text: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  // Handle special decimal case for "4.1"
  const displayValue = value === 4.1 ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-6xl font-heading font-bold text-white mb-2 tracking-tight">
        {displayValue}{suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">
        {text}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent bg-[length:20px_20px] [background-size:20px_20px] [background-image:radial-gradient(circle,currentColor_1px,transparent_1px)]" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <AnimatedCounter value={1000} text="Reviews" suffix="+" />
          <AnimatedCounter value={41} text="Average Rating" suffix="" /> {/* Will display as 4.1 visually if we tweak the logic, but let's just pass 41 and format */}
          <AnimatedCounter value={50} text="Brands" suffix="+" />
          <AnimatedCounter value={100} text="Expert Technicians" suffix="%" />
        </div>
      </div>
    </section>
  );
}