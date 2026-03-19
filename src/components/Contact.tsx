import { motion } from 'motion/react';
import { Mail, Phone, Facebook, Send, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-zinc-900 text-white">
            <h2 className="text-4xl font-bold tracking-tighter mb-8">Let's Connect</h2>
            <p className="text-zinc-400 mb-12 leading-relaxed">
              Whether you're looking for a skilled barista, a content collaborator, 
              or just want to talk about tech, I'm always open to new opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Email</div>
                  <div className="font-bold">rabbi.hossain@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">WhatsApp</div>
                  <div className="font-bold">+60 12-345 6789</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
                  <Facebook size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Facebook</div>
                  <div className="font-bold">facebook.com/rabbi.aminpur</div>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-zinc-800 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-zinc-400">Available for new opportunities</span>
            </div>
          </div>

          <div className="p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-coffee-800 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button className="w-full py-4 bg-coffee-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-coffee-900 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
