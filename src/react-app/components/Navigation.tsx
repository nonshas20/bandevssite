import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/20 backdrop-blur-xl shadow-2xl border-b border-white/10' 
            : 'bg-white/20 backdrop-blur-xl shadow-2xl border-b border-black/10'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        background: scrolled 
          ? darkMode
            ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.15) 0%, rgba(31, 41, 55, 0.25) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 100%)'
          : 'transparent',
        boxShadow: scrolled 
          ? darkMode
            ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className={`text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent`}>
              BandDevs
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div 
              className={`flex items-center space-x-1 px-6 py-2 rounded-full border ${
                darkMode 
                  ? 'border-white/20' 
                  : 'border-black/10'
              }`}
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.2) 0%, rgba(55, 65, 81, 0.3) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.4) 100%)',
                backdropFilter: 'blur(12px) saturate(160%)',
                WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                boxShadow: darkMode
                  ? '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
                  }`}
                  style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'text-yellow-400 hover:text-yellow-300' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.3) 0%, rgba(55, 65, 81, 0.4) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)',
                backdropFilter: 'blur(10px) saturate(150%)',
                WebkitBackdropFilter: 'blur(10px) saturate(150%)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: darkMode
                  ? '0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-all duration-300 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.3) 0%, rgba(55, 65, 81, 0.4) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)',
                  backdropFilter: 'blur(10px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(10px) saturate(150%)',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: darkMode
                    ? '0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden border-t ${
            darkMode ? 'border-white/10' : 'border-black/10'
          }`}
          style={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.2) 0%, rgba(31, 41, 55, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.3) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: darkMode
              ? '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
                }`}
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
