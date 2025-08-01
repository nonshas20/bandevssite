import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TeamProps {
  darkMode: boolean;
}

interface AnimatedTechIconsProps {
  darkMode: boolean;
}

interface DynamicLinesProps {
  darkMode: boolean;
}

function DynamicLines({ darkMode }: DynamicLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const line1Width = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const line2Width = useTransform(scrollYProgress, [0.2, 0.7], ['0%', '100%']);
  const line3Width = useTransform(scrollYProgress, [0.4, 0.9], ['0%', '100%']);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ opacity: lineOpacity }}
        className="absolute inset-0"
      >
        {/* Horizontal flowing lines */}
        <motion.div
          className={`absolute top-1/4 left-0 h-px bg-gradient-to-r ${
            darkMode 
              ? 'from-transparent via-emerald-400/60 to-transparent' 
              : 'from-transparent via-emerald-600/40 to-transparent'
          }`}
          style={{ width: line1Width }}
        />
        
        <motion.div
          className={`absolute top-1/2 right-0 h-px bg-gradient-to-l ${
            darkMode 
              ? 'from-transparent via-teal-400/60 to-transparent' 
              : 'from-transparent via-teal-600/40 to-transparent'
          }`}
          style={{ width: line2Width }}
        />
        
        <motion.div
          className={`absolute top-3/4 left-0 h-px bg-gradient-to-r ${
            darkMode 
              ? 'from-transparent via-cyan-400/60 to-transparent' 
              : 'from-transparent via-cyan-600/40 to-transparent'
          }`}
          style={{ width: line3Width }}
        />

        {/* Vertical connecting lines */}
        <motion.div
          className={`absolute left-1/4 top-0 w-px h-full bg-gradient-to-b ${
            darkMode 
              ? 'from-transparent via-emerald-400/30 to-transparent' 
              : 'from-transparent via-emerald-600/20 to-transparent'
          }`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        
        <motion.div
          className={`absolute right-1/3 top-0 w-px h-full bg-gradient-to-b ${
            darkMode 
              ? 'from-transparent via-teal-400/30 to-transparent' 
              : 'from-transparent via-teal-600/20 to-transparent'
          }`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-emerald-400/60' : 'bg-emerald-600/40'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface AnimatedTechIconsProps {
  darkMode: boolean;
}

function AnimatedTechIcons({ darkMode }: AnimatedTechIconsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Tech stack icons with their respective URLs
  const techIcons = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900' },
    { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
    { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
    { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' }
  ];

  // Split icons into two rows
  const firstRow = techIcons.slice(0, 8);
  const secondRow = techIcons.slice(8, 16);

  return (
    <div ref={ref} className="relative w-full h-48 overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0"
      >
        {/* First row - Left to Right */}
        <div className="absolute top-6 w-full h-16 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '0%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            className="flex items-center space-x-12 h-full"
            style={{ width: 'calc(300% + 6rem)' }}
          >
            {[...firstRow, ...firstRow, ...firstRow].map((tech, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: darkMode ? 'rgba(55, 65, 81, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                  style={{ filter: darkMode ? 'brightness(0.9)' : 'brightness(1)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second row - Right to Left */}
        <div className="absolute bottom-6 w-full h-16 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            className="flex items-center space-x-12 h-full"
            style={{ width: 'calc(300% + 6rem)' }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map((tech, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: darkMode ? 'rgba(55, 65, 81, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                  style={{ filter: darkMode ? 'brightness(0.9)' : 'brightness(1)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Team({ darkMode }: TeamProps) {
  // All team members including Nico Angelo and Neil Calicdan
  const teamMembers = [
    {
      name: 'Nico Angelo Abanes',
      role: 'Project Manager',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/Nico-Angelo-Abanes_2x2-Photoroom.png',
      bio: 'Experienced project manager coordinating cross-functional teams to deliver successful technology projects.',
      skills: ['Agile', 'Scrum', 'Leadership', 'Strategy'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'nico@banddevs.com'
      }
    },
    {
      name: 'Neil Calicdan',
      role: 'System Administrator',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/neilc-Photoroom.png',
      bio: 'Experienced system administrator ensuring reliable infrastructure and maintaining secure, efficient IT systems.',
      skills: ['Linux', 'Windows Server', 'Networking', 'Security'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'neil@banddevs.com'
      }
    },
    {
      name: 'Erra Mae Bugayong',
      role: 'UI/UX Designer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/Erra-Mae.jpg',
      bio: 'Creative UI/UX designer passionate about crafting intuitive and beautiful user interfaces that enhance user experience.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'erra@banddevs.com'
      }
    },
    {
      name: 'Darlie Dolong',
      role: 'UI/UX Designer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/DOLONG,-DARLIE-Photoroom.png',
      bio: 'Expert in creating seamless user experiences with a keen eye for modern design trends and accessibility.',
      skills: ['Sketch', 'InVision', 'User Testing', 'Wireframing'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'darlie@banddevs.com'
      }
    },
    {
      name: 'Myco Cabasag',
      role: 'Frontend/Backend Developer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/myco.png',
      bio: 'Full-stack developer with expertise in modern web technologies and scalable application architecture.',
      skills: ['React', 'Node.js', 'Python', 'PostgreSQL'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'myco@banddevs.com'
      }
    },
    {
      name: 'John Shannon Rodriguez',
      role: 'Frontend/Backend Developer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/rodriguez.png',
      bio: 'Passionate developer specializing in creating robust web applications with clean, maintainable code.',
      skills: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'john@banddevs.com'
      }
    },
    {
      name: 'Aldrin Galera',
      role: 'Frontend/Backend Developer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/aldrin.png',
      bio: 'Full-stack developer with a focus on performance optimization and modern development practices.',
      skills: ['Angular', 'Express.js', 'MongoDB', 'Redis'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'aldrin@banddevs.com'
      }
    },
    {
      name: 'Karlo Veranga',
      role: 'Cloud/DevOps Expert',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/karlo-Photoroom.png',
      bio: 'Cloud architect specializing in scalable infrastructure and DevOps practices for enterprise solutions.',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'karlo@banddevs.com'
      }
    },
    {
      name: 'Mico Angelo Rico',
      role: 'Cloud Expert',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/ricoo.png',
      bio: 'Cloud solutions expert with deep knowledge in containerization and microservices architecture.',
      skills: ['GCP', 'Docker', 'Jenkins', 'Monitoring'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'mico@banddevs.com'
      }
    },
    {
      name: 'Josh Moreno',
      role: 'App Developer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/josh-Photoroom.png',
      bio: 'Mobile app developer specializing in cross-platform solutions and native mobile experiences.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'josh@banddevs.com'
      }
    },
    {
      name: 'Kizelle Adams Bernardo',
      role: 'Frontend Developer',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/adams-bernardo-Photoroom.png',
      bio: 'Frontend specialist focused on creating responsive, interactive web interfaces with modern frameworks.',
      skills: ['React', 'TypeScript', 'SASS', 'Webpack'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'kizelle@banddevs.com'
      }
    },
    {
      name: 'Reyziel Bargan',
      role: 'System Analyst / QA Specialist',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/reyzel-Photoroom.png',
      bio: 'Quality assurance expert ensuring robust systems through comprehensive testing and analysis.',
      skills: ['Test Automation', 'System Analysis', 'Selenium', 'JIRA'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'reyziel@banddevs.com'
      }
    }
  ];

  // Color schemes for each team member (expanded for 12 members)
  const colorSchemes = [
    {
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'bg-emerald-400/20',
      shadow: 'shadow-emerald-500/25',
      text: 'from-emerald-600 to-teal-600'
    },
    {
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'bg-blue-400/20',
      shadow: 'shadow-blue-500/25',
      text: 'from-blue-600 to-cyan-600'
    },
    {
      gradient: 'from-purple-500 to-pink-500',
      glow: 'bg-purple-400/20',
      shadow: 'shadow-purple-500/25',
      text: 'from-purple-600 to-pink-600'
    },
    {
      gradient: 'from-orange-500 to-red-500',
      glow: 'bg-orange-400/20',
      shadow: 'shadow-orange-500/25',
      text: 'from-orange-600 to-red-600'
    },
    {
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'bg-indigo-400/20',
      shadow: 'shadow-indigo-500/25',
      text: 'from-indigo-600 to-purple-600'
    },
    {
      gradient: 'from-rose-500 to-pink-500',
      glow: 'bg-rose-400/20',
      shadow: 'shadow-rose-500/25',
      text: 'from-rose-600 to-pink-600'
    },
    {
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'bg-yellow-400/20',
      shadow: 'shadow-yellow-500/25',
      text: 'from-yellow-600 to-orange-600'
    },
    {
      gradient: 'from-green-500 to-emerald-500',
      glow: 'bg-green-400/20',
      shadow: 'shadow-green-500/25',
      text: 'from-green-600 to-emerald-600'
    },
    {
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'bg-teal-400/20',
      shadow: 'shadow-teal-500/25',
      text: 'from-teal-600 to-cyan-600'
    },
    {
      gradient: 'from-violet-500 to-purple-500',
      glow: 'bg-violet-400/20',
      shadow: 'shadow-violet-500/25',
      text: 'from-violet-600 to-purple-600'
    },
    {
      gradient: 'from-sky-500 to-blue-500',
      glow: 'bg-sky-400/20',
      shadow: 'shadow-sky-500/25',
      text: 'from-sky-600 to-blue-600'
    },
    {
      gradient: 'from-slate-500 to-gray-500',
      glow: 'bg-slate-400/20',
      shadow: 'shadow-slate-500/25',
      text: 'from-slate-600 to-gray-600'
    }
  ];

  return (
    <section id="team" className={`relative py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      {/* Dynamic Lines Background */}
      <DynamicLines darkMode={darkMode} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A diverse group of passionate technologists, designers, and problem-solvers 
            working together to create exceptional digital experiences.
          </p>
        </motion.div>

        

        {/* Team Grid - All Members */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {teamMembers.map((member, memberIndex) => {
            const colors = colorSchemes[memberIndex % colorSchemes.length];
            return (
            <motion.div
              key={memberIndex}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: -4,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: memberIndex * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -16,
                scale: 1.05,
                rotateX: 3,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 20 
                }
              }}
              className={`group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-500 shadow-md hover:shadow-xl ${colors.shadow} ${
                darkMode 
                  ? `hover:shadow-${colors.shadow.split('-')[1]}-500/30 hover:bg-gradient-to-br hover:from-gray-800/40 hover:to-gray-700/20` 
                  : `hover:shadow-${colors.shadow.split('-')[1]}-500/35 hover:bg-gradient-to-br hover:from-white/70 hover:to-gray-50/40`
              }`}
              style={{
                backdropFilter: 'blur(8px)',
                transform: 'translateY(-4px)',
              }}
            >
              {/* Enhanced Circular Profile Image */}
              <div className="relative mb-4">
                {/* Animated ring background */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.gradient} opacity-50 group-hover:opacity-100`}
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  style={{
                    padding: '3px',
                  }}
                />
                
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className={`relative w-32 h-32 rounded-full object-cover border-4 transition-all duration-500 z-10 ${
                    darkMode 
                      ? 'border-gray-700 group-hover:border-transparent' 
                      : 'border-gray-200 group-hover:border-transparent'
                  }`}
                  whileHover={{ 
                    scale: 1.08,
                    filter: "brightness(1.1) contrast(1.05)",
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  style={{
                    filter: 'brightness(1) contrast(1)',
                  }}
                />
                
                {/* Subtle glow effect */}
                <div className={`absolute inset-0 rounded-full opacity-25 group-hover:opacity-50 transition-opacity duration-500 ${colors.glow}`} style={{
                  filter: 'blur(12px)',
                  transform: 'scale(1.2)',
                }} />
              </div>

              {/* Enhanced Name and Role */}
              <motion.h3 
                className={`text-sm font-bold mb-1 transition-all duration-300 ${
                  darkMode ? 'text-white group-hover:text-white' : 'text-gray-900 group-hover:text-gray-900'
                }`}
                style={{
                  textShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: memberIndex * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  textShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  transition: { duration: 0.2 }
                }}
              >
                {member.name}
              </motion.h3>
              
              <motion.p 
                className={`font-semibold text-xs transition-all duration-300 bg-gradient-to-r ${colors.text} bg-clip-text text-transparent group-hover:scale-105`}
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: memberIndex * 0.1 + 0.1 }}
                whileHover={{
                  scale: 1.1,
                  textShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
                  transition: { duration: 0.2 }
                }}
              >
                {member.role}
              </motion.p>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Animated Tech Icons Section */}
        <div className="relative mt-16 py-8">
          <AnimatedTechIcons darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
}
