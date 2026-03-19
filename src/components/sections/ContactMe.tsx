import { motion } from 'motion/react';
import { Mail, Phone, Facebook, Send } from 'lucide-react';

export function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center gradient-text">Contact Me</h2>
      
      <div className="glass-card overflow-hidden grid lg:grid-cols-2">
        <div className="p-12 bg-coffee-950 text-white">
          <h3 className="text-3xl font-bold tracking-tighter mb-8">Let's Connect</h3>
          <p className="text-zinc-400 mb-12 leading-relaxed">
            Whether you're looking for a skilled barista, a content collaborator, 
            or just want to talk about tech, I'm always open to new opportunities.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-coffee-900 flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Email</div>
                <div className="font-bold">rabbi.hossain@example.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-coffee-900 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">WhatsApp</div>
                <div className="font-bold">+60 12-345 6789</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-coffee-900 flex items-center justify-center">
                <Facebook size={24} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Facebook</div>
                <div className="font-bold">facebook.com/rabbi.aminpur</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-coffee-200 dark:border-coffee-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all text-coffee-950 dark:text-coffee-50"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-coffee-200 dark:border-coffee-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all text-coffee-950 dark:text-coffee-50"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-coffee-200 dark:border-coffee-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all resize-none text-coffee-950 dark:text-coffee-50"
                placeholder="Your message here..."
              />
            </div>

            <button className="w-full py-4 gradient-button rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
