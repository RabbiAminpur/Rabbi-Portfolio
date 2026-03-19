import { motion } from 'motion/react';
import { MapPin, Coffee, Youtube, Facebook, Instagram } from 'lucide-react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 py-20 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white dark:border-coffee-900 shadow-2xl mb-12"
      >
        <img
          src="https://picsum.photos/seed/barista/400/400"
          alt="Rabbi Hossain"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 gradient-text">
        Rabbi Hossain
      </h1>
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-100/80 dark:bg-coffee-950/80 border border-coffee-200 dark:border-coffee-800 text-coffee-900 dark:text-coffee-200 text-sm font-bold mb-12 backdrop-blur-sm">
        <MapPin size={16} />
        Kuala Lumpur, Malaysia
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl text-coffee-700 dark:text-coffee-200 leading-relaxed font-medium">
          A dedicated <span className="text-coffee-900 dark:text-white font-bold">Barista & Cashier</span> with a passion for 
          <span className="text-coffee-900 dark:text-white font-bold"> Content Creation</span> and 
          <span className="text-coffee-900 dark:text-white font-bold"> Technology</span>.
        </p>
        
        <p className="text-lg text-coffee-600 dark:text-coffee-300 leading-relaxed">
          Currently crafting specialty coffee at Pineyard Cafe and preparing for a new chapter at Hémù Cafe. 
          Sharing career insights through my YouTube channel, "Career Tottho".
        </p>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a href="https://facebook.com/rabbi.aminpur" target="_blank" rel="noopener" className="p-4 rounded-2xl glass-card hover:scale-110 transition-transform text-coffee-800 dark:text-coffee-200">
            <Facebook size={24} />
          </a>
          <a href="#" className="p-4 rounded-2xl glass-card hover:scale-110 transition-transform text-coffee-800 dark:text-coffee-200">
            <Youtube size={24} />
          </a>
          <a href="#" className="p-4 rounded-2xl glass-card hover:scale-110 transition-transform text-coffee-800 dark:text-coffee-200">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
