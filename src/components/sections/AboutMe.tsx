import { motion } from 'motion/react';
import { Coffee, Users, MessageSquare, CreditCard } from 'lucide-react';
import { cn } from '../../utils/cn';

const skills = [
  { name: 'Customer Service', icon: Users, level: 95, color: 'bg-emerald-500' },
  { name: 'Coffee Making', icon: Coffee, level: 90, color: 'bg-coffee-600' },
  { name: 'Cashier Handling', icon: CreditCard, level: 92, color: 'bg-blue-500' },
  { name: 'Communication', icon: MessageSquare, level: 88, color: 'bg-amber-500' },
];

export function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center gradient-text">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-coffee-700 dark:text-coffee-200 leading-relaxed text-lg">
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

        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-6 tracking-tighter">Core Skills</h3>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-card p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg text-white", skill.color)}>
                      <skill.icon size={16} />
                    </div>
                    <span className="font-bold text-sm">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold text-coffee-500 dark:text-coffee-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-coffee-100 dark:bg-coffee-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className={cn("h-full rounded-full", skill.color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
