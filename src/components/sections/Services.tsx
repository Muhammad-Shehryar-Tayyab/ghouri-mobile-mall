import { motion } from "framer-motion";
import { Smartphone, RefreshCcw, Headphones, Wrench, Cpu, MonitorPlay, Code, MessageSquareHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "New Smartphones",
      description: "Latest models from top global brands with official warranties.",
      color: "bg-secondary"
    },
    {
      icon: <RefreshCcw className="h-6 w-6 text-white" />,
      title: "Used Smartphones",
      description: "Certified pre-owned devices, thoroughly tested for quality.",
      color: "bg-accent"
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Mobile Accessories",
      description: "Premium cases, screen protectors, chargers, and audio gear.",
      color: "bg-chart-1"
    },
    {
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: "Mobile Repairing",
      description: "Professional hardware repairs for all major smartphone brands.",
      color: "bg-secondary"
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "Genuine Spare Parts",
      description: "Original OEM parts ensuring longevity and optimal performance.",
      color: "bg-accent"
    },
    {
      icon: <MonitorPlay className="h-6 w-6 text-white" />,
      title: "Screen Replacement",
      description: "Quick and reliable screen repairs for cracked or unresponsive displays.",
      color: "bg-chart-1"
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Software Solutions",
      description: "OS updates, data recovery, unlocking, and software troubleshooting.",
      color: "bg-secondary"
    },
    {
      icon: <MessageSquareHeart className="h-6 w-6 text-white" />,
      title: "Mobile Consultation",
      description: "Expert advice to help you choose the right device for your needs.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-bl-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-tr-full blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
            >
              Premium <span className="text-secondary">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Everything your mobile device needs, delivered with exceptional quality and care.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-xl border-border/40 hover:border-secondary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <CardContent className="p-6 relative z-10">
                  <div className={`mb-5 inline-flex p-3 rounded-xl ${service.color} shadow-lg transition-transform group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-all z-0" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}