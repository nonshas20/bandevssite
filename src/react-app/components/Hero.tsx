import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Animated text cycling with typing effect
  const actionWords = ['Build', 'Create', 'Craft', 'Design', 'Code', 'Launch'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentWord = actionWords[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          // Finished typing, wait then start deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % actionWords.length);
          setTypingSpeed(150);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, actionWords, typingSpeed]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.8, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: '10%', y: '20%' },
    { Icon: Zap, delay: 1, x: '80%', y: '30%' },
    { Icon: Shield, delay: 2, x: '70%', y: '70%' },
  ];

  return (
    <section ref={ref} id="home" className="min-h-screen relative overflow-hidden">
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/image.png_9868.png')`,
          y: backgroundY
        }}
      />
      
      {/* Overlay for text readability with parallax */}
      <motion.div 
        className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black' 
            : 'bg-white'
        }`}
        style={{ opacity: overlayOpacity }}
      />
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: darkMode ? 0.05 : 0.03, 
              scale: 1
            }}
            transition={{ 
              delay: delay,
              duration: 2
            }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <Icon size={60} className={darkMode ? 'text-gray-600' : 'text-blue-400'} />
          </motion.div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23374151" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
          : 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      }`} />

      {/* Solid Background - No Image */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          
          {/* Main Content with parallax */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto will-change-transform"
            style={{ y: textY }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6"
            >
              <Zap size={16} className="mr-2 text-emerald-500" />
              <span className={`text-sm font-medium ${
                darkMode ? 'text-emerald-300' : 'text-emerald-700'
              }`}>
                Elite Development Team
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              We{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {displayText}
                <span className="inline-block w-1 h-[1em] bg-white ml-1 animate-pulse" style={{animation: 'blink 1s infinite'}}></span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Digital Dreams
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl mb-8 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Transform your ideas into powerful digital solutions with our 
              <br className="hidden md:block" />
              cutting-edge technology and innovative approach.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Our Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 border-2 font-semibold rounded-full transition-all duration-300 ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                }`}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}
