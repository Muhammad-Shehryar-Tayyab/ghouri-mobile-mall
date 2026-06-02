import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Huzaifa Amir",
    role: "Local Guide",
    quote: "Ghouri Mobile Mall is a decent choice for purchasing mobile phones and accessories. The store offers a good range of products, and customers can find reliable options to suit various needs.",
    initials: "HA"
  },
  {
    name: "Taha Saleem",
    role: "Local Guide",
    quote: "Good market with many options. Customers can find mobile products and accessories for common phone brands.",
    initials: "TS"
  },
  {
    name: "Quryshi",
    role: "Local Guide",
    quote: "Ghouri Mobile Mall offers quality mobile repair and sales services. They provide genuine parts and quick fixes with friendly and professional staff.",
    initials: "QU"
  },
  {
    name: "Mohsin Nazar",
    role: "Local Guide",
    quote: "All types of smartphones and their accessories are available in the market.",
    initials: "MN"
  },
  {
    name: "It's Fun Time",
    role: "Customer",
    quote: "New and used phones, accessories, and repair services are available at reasonable prices. Shopkeepers are polite and provide great service.",
    initials: "IF"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    // Auto-play
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-card/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            What Our <span className="text-secondary">Customers Say</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_80%]">
                  <div className="p-8 md:p-10 rounded-3xl bg-background border border-border shadow-xl shadow-black/5 relative h-full">
                    <Quote className="absolute top-6 right-8 h-12 w-12 text-secondary/10 rotate-180" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-secondary/20">
                        <AvatarFallback className="bg-secondary/10 text-secondary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === selectedIndex ? "bg-secondary w-8" : "bg-border hover:bg-secondary/50"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}