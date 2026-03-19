/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndSkills } from './components/AboutAndSkills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen font-sans selection:bg-coffee-200 selection:text-coffee-900">
        <Navbar />
        
        <main>
          <Hero />
          <AboutAndSkills />
          <Experience />
          <Projects />
          
          {/* Gallery Section - Life & Work */}
          <section className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 tracking-tighter">Life & Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-square rounded-2xl overflow-hidden group relative"
                  >
                    <img
                      src={`https://picsum.photos/seed/coffee-${i}/400/400`}
                      alt="Gallery"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Contact />
        </main>

        <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl tracking-tighter mb-2">Rabbi Hossain</div>
              <p className="text-sm text-zinc-500">© 2026. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
              <a href="#" className="hover:text-coffee-800 transition-colors">Privacy</a>
              <a href="#" className="hover:text-coffee-800 transition-colors">Terms</a>
              <a href="mailto:Mrhrabby24@gmail.com" className="hover:text-coffee-800 transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}
