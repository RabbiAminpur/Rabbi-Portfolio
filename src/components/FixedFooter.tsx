import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap, Info, Mail, Home } from 'lucide-react';
import { cn } from '../utils/cn';

interface FixedFooterProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'personal', label: 'Personal Info', icon: Info },
  { id: 'contact', label: 'Contact Me', icon: Mail },
];

export function FixedFooter({ activeSection, onSectionChange }: FixedFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-3xl mx-auto pointer-events-auto">
        <div className="glass-card flex items-center justify-around p-2 md:p-3 shadow-2xl border-coffee-200/50 dark:border-coffee-800/50">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 relative group",
                  isActive 
                    ? "text-coffee-800 dark:text-coffee-400" 
                    : "text-zinc-500 hover:text-coffee-600 dark:hover:text-coffee-300"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-coffee-100 dark:bg-coffee-900/50 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={20} className={cn("transition-transform", isActive && "scale-110")} />
                <span className="text-[10px] font-bold uppercase tracking-tighter hidden sm:block">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
