import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Headphones, Wrench, Store, Users, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";

const galleryItems = [
  {
    id: 1,
    category: "Smartphones",
    icon: <Smartphone className="h-12 w-12 text-white" />,
    gradient: "from-secondary to-blue-900",
    size: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
  },
  {
    id: 2,
    category: "Accessories",
    icon: <Headphones className="h-12 w-12 text-white" />,
    gradient: "from-accent to-cyan-900",
    size: "col-span-1 row-span-1 aspect-square"
  },
  {
    id: 3,
    category: "Repair Center",
    icon: <Wrench className="h-12 w-12 text-white" />,
    gradient: "from-chart-1 to-orange-900",
    size: "col-span-1 row-span-1 aspect-square"
  },
  {
    id: 4,
    category: "Mall Interior",
    icon: <Store className="h-12 w-12 text-white" />,
    gradient: "from-purple-500 to-purple-900",
    size: "col-span-1 row-span-1 aspect-square"
  },
  {
    id: 5,
    category: "Customer Service",
    icon: <Users className="h-12 w-12 text-white" />,
    gradient: "from-emerald-500 to-emerald-900",
    size: "col-span-1 row-span-1 aspect-square"
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            Explore <span className="text-secondary">Our Mall</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            A glimpse into our premium sections and what we offer.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.size} relative rounded-3xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedItem(item)}
              data-testid={`gallery-item-${item.id}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transform group-hover:scale-110 transition-transform duration-500">
                <div className="mb-4 drop-shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-xl md:text-2xl drop-shadow-md">
                  {item.category}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-2xl bg-card border-border p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selectedItem?.category}</DialogTitle>
          <div className={`w-full aspect-video bg-gradient-to-br ${selectedItem?.gradient || "from-secondary to-blue-900"} flex flex-col items-center justify-center p-12`}>
            <div className="scale-150 mb-8 drop-shadow-2xl">
              {selectedItem?.icon}
            </div>
            <h2 className="text-4xl font-heading font-bold text-white drop-shadow-lg">
              {selectedItem?.category}
            </h2>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}