import { motion } from 'motion/react';
import { User, MapPin, Languages, Heart, Globe } from 'lucide-react';

const personalInfo = [
  { label: 'Full Name', value: 'Rabbi Hossain', icon: User },
  { label: 'Location', value: 'Kuala Lumpur, Malaysia', icon: MapPin },
  { label: 'Languages', value: 'Bangla, English, Learning Malay', icon: Languages },
  { label: 'Interests', value: 'Content Creation, Tech, App Dev', icon: Heart },
  { label: 'Nationality', value: 'Bangladeshi', icon: Globe },
];

export function PersonalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center gradient-text">Personal Information</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {personalInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 flex items-center gap-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-coffee-100 dark:bg-coffee-900 flex items-center justify-center text-coffee-800 dark:text-coffee-300 shrink-0">
              <info.icon size={24} />
            </div>
            
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-coffee-500 dark:text-coffee-400 mb-1">
                {info.label}
              </div>
              <div className="text-xl font-bold">{info.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
