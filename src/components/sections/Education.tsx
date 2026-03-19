import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const education = [
  {
    degree: 'Continuous Learning',
    institution: 'Self-Taught & Online Courses',
    period: '2023 - Present',
    description: 'Focusing on App Development, Web Technologies (React, TypeScript), and Digital Marketing.',
    icon: BookOpen,
  },
  {
    degree: 'Professional Barista Training',
    institution: 'Specialty Coffee Association (SCA) Standards',
    period: '2023',
    description: 'Mastered espresso extraction, milk texturing, and cafe workflow management.',
    icon: Award,
  },
  {
    degree: 'Secondary Education',
    institution: 'Bangladesh Education Board',
    period: 'Completed',
    description: 'Foundation in general sciences and humanities.',
    icon: GraduationCap,
  },
];

export function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center gradient-text">Education</h2>
      
      <div className="grid gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-16 h-16 rounded-2xl bg-coffee-100 dark:bg-coffee-900 flex items-center justify-center text-coffee-800 dark:text-coffee-300 shrink-0">
              <edu.icon size={32} />
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                <span className="px-3 py-1 rounded-full bg-coffee-50 dark:bg-coffee-950 text-coffee-800 dark:text-coffee-300 text-xs font-bold">
                  {edu.period}
                </span>
              </div>
              <div className="text-lg font-bold text-coffee-600 dark:text-coffee-400">{edu.institution}</div>
              <p className="text-coffee-700 dark:text-coffee-200 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
