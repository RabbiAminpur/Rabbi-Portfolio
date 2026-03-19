import { motion } from 'motion/react';
import { Youtube, ExternalLink, Code, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Career Tottho',
    category: 'YouTube Channel',
    icon: Youtube,
    description: 'A platform dedicated to sharing career insights, life experiences in Malaysia, and professional growth tips.',
    link: '#',
    tags: ['Content Creation', 'Career Advice', 'Bengali'],
    image: 'https://picsum.photos/seed/youtube/600/400',
  },
  {
    title: 'Barista Guide App',
    category: 'Future Project',
    icon: Smartphone,
    description: 'A mobile application concept to help aspiring baristas learn recipes and manage cafe workflow efficiently.',
    link: '#',
    tags: ['App Idea', 'UI/UX', 'Education'],
    image: 'https://picsum.photos/seed/app/600/400',
  },
  {
    title: 'Personal Brand Website',
    category: 'Web Development',
    icon: Code,
    description: 'This minimalist portfolio built with React and Framer Motion to showcase my professional identity.',
    link: '#',
    tags: ['React', 'Tailwind', 'Motion'],
    image: 'https://picsum.photos/seed/web/600/400',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-coffee-50/50 dark:bg-coffee-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-coffee-700 dark:text-coffee-200 max-w-md">
              Combining my passion for content creation and my growing interest in technology.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 font-bold text-coffee-800 hover:underline">
            View All Work <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <project.icon className="text-white w-12 h-12" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-coffee-800 uppercase tracking-widest mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-coffee-700 dark:text-coffee-200 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-coffee-100 dark:bg-coffee-900 text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-coffee-800 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
