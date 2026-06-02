import { motion } from "framer-motion";
import { Smartphone, Headphones, Wrench, Package, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-secondary" />,
      title: "New & Used Smartphones",
      description: "A wide variety of the latest models and certified pre-owned devices."
    },
    {
      icon: <Headphones className="h-8 w-8 text-accent" />,
      title: "Mobile Accessories",
      description: "Premium cases, chargers, earphones, and smart wearables."
    },
    {
      icon: <Wrench className="h-8 w-8 text-chart-1" />,
      title: "Repair Services",
      description: "Expert technicians ready to fix screens, batteries, and software issues."
    },
    {
      icon: <Package className="h-8 w-8 text-secondary" />,
      title: "Genuine Spare Parts",
      description: "High-quality replacement parts ensuring longevity for your devices."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Friendly Staff",
      description: "Dedicated professionals committed to finding the right solution for you."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-chart-1" />,
      title: "Affordable Prices",
      description: "Competitive pricing across all products and services in the mall."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="py-24 bg-card/50 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            About <span className="text-secondary">Ghouri Mobile Mall</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Your one-stop destination for everything mobile in Islamabad. We bring together the best vendors, technicians, and products under one premium roof.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-background border-border/50 hover:border-secondary/30 transition-all hover:shadow-lg hover:shadow-secondary/5 group">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="mb-4 p-3 rounded-2xl bg-secondary/10 group-hover:scale-110 group-hover:bg-secondary/20 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}