import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';

const roles = ["Barista", "Content Creator", "Tech Enthusiast", "Life Explorer"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-200/40 dark:bg-coffee-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-100/40 dark:bg-coffee-800/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-100/80 dark:bg-coffee-950/80 border border-coffee-200 dark:border-coffee-800 text-coffee-900 dark:text-coffee-200 text-xs font-bold mb-6 backdrop-blur-sm">
            <MapPin size={14} />
            Kuala Lumpur, Malaysia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Rabbi Hossain</span>
            <br />
            <span className="inline-block min-h-[1.2em] text-coffee-950 dark:text-coffee-50">
              {displayText}
              <span className="animate-pulse text-coffee-800 dark:text-coffee-400">|</span>
            </span>
          </h1>

          <p className="text-lg text-coffee-700 dark:text-coffee-200 mb-8 max-w-lg leading-relaxed font-medium">
            Crafting perfect coffee by day, building digital experiences by night. 
            Sharing my journey of growth and career insights through "Career Tottho".
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 gradient-button rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <button
              className="px-8 py-4 border-2 border-coffee-200 dark:border-coffee-800 rounded-2xl font-bold hover:bg-coffee-50 dark:hover:bg-coffee-900 transition-all text-coffee-950 dark:text-coffee-50"
            >
              Download CV
            </button>
            <div className="flex items-center gap-4 px-4">
              <a href="https://facebook.com/rabbi.aminpur" target="_blank" rel="noopener" className="p-3 rounded-xl border border-coffee-200 dark:border-coffee-800 hover:bg-coffee-50 dark:hover:bg-coffee-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl border border-coffee-200 dark:border-coffee-800 hover:bg-coffee-50 dark:hover:bg-coffee-900 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl border border-coffee-200 dark:border-coffee-800 hover:bg-coffee-50 dark:hover:bg-coffee-900 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white dark:border-coffee-900 shadow-2xl">
            <img
              src="https://picsum.photos/seed/barista/800/800"
              alt="Rabbi Hossain"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 glass-card p-6 shadow-xl">
            <div className="text-3xl font-bold text-coffee-800">2+</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-60">Years Experience</div>
          </div>
          <div className="absolute -top-6 -right-6 glass-card p-6 shadow-xl">
            <div className="text-3xl font-bold text-coffee-800">10k+</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-60">YouTube Subs</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
