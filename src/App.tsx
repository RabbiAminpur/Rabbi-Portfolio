/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FixedFooter } from './components/FixedFooter';
import { Home } from './components/sections/Home';
import { AboutMe } from './components/sections/AboutMe';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { PersonalInfo } from './components/sections/PersonalInfo';
import { ContactMe } from './components/sections/ContactMe';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'about': return <AboutMe />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'personal': return <PersonalInfo />;
      case 'contact': return <ContactMe />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-coffee-200 selection:text-coffee-900 bg-white dark:bg-coffee-950 transition-colors duration-300 pb-32">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-2xl glass-card hover:scale-110 transition-transform text-coffee-800 dark:text-coffee-200"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <FixedFooter activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
}
