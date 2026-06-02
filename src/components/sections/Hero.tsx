import { motion } from "framer-motion";
import { PhoneCall, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-1/4 w-24 h-48 rounded-[2rem] border border-secondary/30 bg-card/5 backdrop-blur-sm shadow-xl shadow-secondary/10"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 md:right-1/4 w-32 h-64 rounded-[2rem] border border-accent/30 bg-card/5 backdrop-blur-sm shadow-xl shadow-accent/10"
        />
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-secondary/20 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <Badge variant="outline" className="bg-background/50 backdrop-blur-md border-secondary/50 text-foreground py-1.5 px-4 shadow-sm shadow-secondary/10">
            <span className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold">4.1 Rating</span>
              <span className="text-muted-foreground mx-1">|</span>
              <span className="text-muted-foreground">1000+ Reviews</span>
            </span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight mb-6 leading-tight"
        >
          Islamabad's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Trusted</span><br />
          Mobile Marketplace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Discover Smartphones, Accessories, Repairs, and Mobile Solutions All Under One Roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8 bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 transition-all hover:-translate-y-1"
            onClick={() => window.location.href = "tel:03333391917"}
            data-testid="button-call-hero"
          >
            <PhoneCall className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-lg h-14 px-8 border-secondary/50 hover:bg-secondary/10 transition-all hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            onClick={() => window.open("https://maps.google.com/?q=Ghori+Town+Phase+4-A,+Ghauri+Town,+Islamabad", "_blank")}
            data-testid="button-directions-hero"
          >
            <MapPin className="mr-2 h-5 w-5 text-secondary" />
            Get Directions
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-muted-foreground rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}