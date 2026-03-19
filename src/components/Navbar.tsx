import { motion } from 'motion/react';
import { Moon, Sun, Coffee } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 dark:bg-coffee-950/80 backdrop-blur-lg border-b border-coffee-100 dark:border-coffee-800" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-2xl tracking-tighter group">
          <Coffee className="text-coffee-800 group-hover:rotate-12 transition-transform" />
          <span className="gradient-text">Rabbi.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-coffee-700 dark:text-coffee-200 hover:text-coffee-800 dark:hover:text-coffee-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-coffee-50 dark:hover:bg-coffee-900 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:block px-5 py-2 bg-coffee-950 dark:bg-coffee-50 text-white dark:text-coffee-950 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

import { useState, useEffect } from 'react';
