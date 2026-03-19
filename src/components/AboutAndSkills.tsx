import { motion } from 'motion/react';
import { Coffee, Users, MessageSquare, CreditCard } from 'lucide-react';

const skills = [
  { name: 'Customer Service', icon: Users, level: 95, color: 'bg-emerald-500' },
  { name: 'Coffee Making', icon: Coffee, level: 90, color: 'bg-coffee-600' },
  { name: 'Cashier Handling', icon: CreditCard, level: 92, color: 'bg-blue-500' },
  { name: 'Communication', icon: MessageSquare, level: 88, color: 'bg-amber-500' },
];

export function AboutAndSkills() {
  return (
    <section id="about" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 tracking-tighter">My Story</h2>
          <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Born and raised in Bangladesh, my journey took a transformative turn when I moved to Kuala Lumpur, Malaysia. 
              Starting as a barista and cashier at Pineyard Cafe, I discovered a passion for hospitality and the art of 
              crafting the perfect cup of coffee.
            </p>
            <p>
              But my story doesn't end at the espresso machine. I'm a lifelong learner with a deep interest in technology 
              and app development. Through my YouTube channel, "Career Tottho", I share my experiences and insights to 
              help others navigate their career paths and growth.
            </p>
            <p>
              Currently, I'm preparing for my next chapter at Hémù Cafe, while continuing to build my personal brand and 
              exploring the intersection of service and technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="skills"
        >
          <h2 className="text-3xl font-bold mb-8 tracking-tighter">Core Skills</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg text-white", skill.color)}>
                      <skill.icon size={20} />
                    </div>
                    <span className="font-bold">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={cn("h-full rounded-full", skill.color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { cn } from '../utils/cn';
