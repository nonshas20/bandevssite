import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Smartphone, Palette, CheckCircle, Brain, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: Code,
      color: 'text-blue-600'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile applications for iOS and Android.',
      icon: Smartphone,
      color: 'text-purple-600'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces and experiences that delight and engage.',
      icon: Palette,
      color: 'text-emerald-600'
    },
    {
      title: 'QA Testing',
      description: 'Comprehensive testing strategies ensuring robust, bug-free applications.',
      icon: CheckCircle,
      color: 'text-orange-600'
    },
    {
      title: 'AI Integration',
      description: 'Smart AI-powered features and machine learning solutions.',
      icon: Brain,
      color: 'text-violet-600'
    },
    {
      title: 'Tech Consulting',
      description: 'Strategic technology guidance and architectural consulting services.',
      icon: Settings,
      color: 'text-gray-600'
    }
  ];

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1; // Mobile: 1 card
    if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const maxIndex = Math.max(0, services.length - cardsPerView);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      // Reset current index if it's out of bounds
      const newMaxIndex = Math.max(0, services.length - newCardsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, services.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <motion.section 
      ref={ref}
      id="services" 
      className={`py-20 relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
      style={{ y, opacity }}
    >
      {/* Subtle background pattern */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310b981" fill-opacity="0.05"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
          : 'bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310b981" fill-opacity="0.03"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
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
            Services <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              We Offer
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive technology solutions tailored to bring your vision to life
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg ${
              maxIndex === 0 ? 'hidden' : ''
            } ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' 
                : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200'
            }`}
          >
            <ChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg ${
              maxIndex === 0 ? 'hidden' : ''
            } ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' 
                : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200'
            }`}
          >
            <ChevronRight size={16} className="md:w-5 md:h-5" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-4 md:mx-16">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex-shrink-0 px-2 md:px-4 ${
                      cardsPerView === 1 ? 'w-full' : 
                      cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                  >
                    <div
                      className={`p-4 md:p-6 rounded-2xl transition-all duration-300 h-full ${
                        darkMode
                          ? 'bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl'
                          : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl'
                      }`}
                      style={{
                        boxShadow: darkMode 
                          ? 'inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.2)' 
                          : 'inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 30px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Responsive layout - vertical on mobile, horizontal on desktop */}
                      <div className={`${
                        cardsPerView === 1 
                          ? 'flex flex-col items-center text-center space-y-4' 
                          : 'flex items-start space-x-3 md:space-x-4'
                      }`}>
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 p-2 md:p-3 rounded-xl ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-50'
                          }`}
                          style={{
                            boxShadow: darkMode 
                              ? 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' 
                              : 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
                          }}
                        >
                          <IconComponent size={cardsPerView === 1 ? 32 : 24} className={`${service.color} md:w-7 md:h-7`} />
                        </div>

                        {/* Content */}
                        <div className={`${cardsPerView === 1 ? 'w-full' : 'flex-1 min-w-0'}`}>
                          <h3 className={`text-base md:text-lg font-bold mb-2 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {service.title}
                          </h3>
                          
                          <p className={`text-xs md:text-sm leading-relaxed ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Carousel Indicators - Only show if there are multiple slides */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 w-6 md:w-8'
                      : darkMode 
                        ? 'bg-gray-600 hover:bg-gray-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-20"
        >
          <p className={`text-base md:text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to start your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
          >
            Let's Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
