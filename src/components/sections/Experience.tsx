import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Barista & Cashier',
    company: 'Hémù Cafe',
    location: 'Kuala Lumpur, Malaysia',
    period: 'Upcoming',
    description: 'Preparing for a new role in a premium cafe environment, focusing on high-end service and specialty coffee.',
    current: true,
  },
  {
    title: 'Barista & Cashier',
    company: 'Pineyard Cafe',
    location: 'Kuala Lumpur, Malaysia',
    period: '2023 - 2025',
    description: 'Managed front-of-house operations, handled high-volume transactions, and mastered espresso-based beverage preparation.',
    current: false,
  },
];

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center gradient-text">Experience</h2>
      
      <div className="relative space-y-12">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-coffee-200 dark:bg-coffee-800 -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-coffee-800 border-4 border-white dark:border-coffee-950 -translate-x-1/2 z-10 hidden md:block" />

            <div className="w-full md:w-1/2 glass-card p-8 hover:border-coffee-800 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-50 dark:bg-coffee-950 text-coffee-800 dark:text-coffee-300 text-xs font-bold">
                  <Calendar size={14} />
                  {exp.period}
                </div>
                {exp.current && (
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">New Chapter</span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <div className="flex items-center gap-4 text-sm text-coffee-500 dark:text-coffee-400 mb-4">
                <div className="flex items-center gap-1">
                  <Briefcase size={14} />
                  {exp.company}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </div>
              </div>
              
              <p className="text-coffee-700 dark:text-coffee-200 leading-relaxed">
                {exp.description}
              </p>
            </div>
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

import { cn } from '../../utils/cn';
