import { motion } from "framer-motion";
import { MapPin, PhoneCall, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-card/30 border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Visit <span className="text-secondary">Us</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Conveniently located in the heart of Ghauri Town, Islamabad. Drop by for all your mobile needs.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Our Location</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ghori Town Phase 4-A<br />
                  Ghauri Town<br />
                  Islamabad, 44000<br />
                  Pakistan
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <Button 
                size="lg" 
                className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 h-14 text-lg"
                onClick={() => window.open("https://maps.google.com/?q=Ghori+Town+Phase+4-A,+Ghauri+Town,+Islamabad", "_blank")}
                data-testid="button-directions-location"
              >
                <Navigation className="mr-2 h-5 w-5" /> Get Directions
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-secondary/50 hover:bg-secondary/10 h-14 text-lg"
                onClick={() => window.location.href = "tel:03333391917"}
                data-testid="button-call-location"
              >
                <PhoneCall className="mr-2 h-5 w-5 text-secondary" /> Call Now
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden border-2 border-border shadow-xl relative group"
          >
            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13286.082003730245!2d73.12328195!3d33.6267868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb3c26027b13%3A0xc6c4d7b5f543dc2c!2sGhori%20Town%20Phase%204-A%20Ghauri%20Town%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
              title="Ghouri Mobile Mall Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}