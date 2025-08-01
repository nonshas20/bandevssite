import { useDarkMode } from '@/react-app/hooks/useDarkMode';
import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';

import Services from '@/react-app/components/Services';
import Team from '@/react-app/components/Team';
import Projects from '@/react-app/components/Projects';
import Contact from '@/react-app/components/Contact';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Team darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      
      {/* Footer */}
      <footer className={`relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-950' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-600'
          }`}></div>
          <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10 ${
            darkMode ? 'bg-teal-400' : 'bg-teal-600'
          }`}></div>
        </div>

        <div className="relative z-10">
          {/* Main footer content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand section */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  BandDevs
                </h3>
                <p className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Building the future, one line of code at a time. We create exceptional digital experiences that drive innovation and growth.
                </p>
                
                {/* Social links */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white shadow-lg shadow-gray-900/20' 
                        : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg shadow-gray-200/50 border border-gray-100'
                    }`}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white shadow-lg shadow-gray-900/20' 
                        : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg shadow-gray-200/50 border border-gray-100'
                    }`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white shadow-lg shadow-gray-900/20' 
                        : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg shadow-gray-200/50 border border-gray-100'
                    }`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white shadow-lg shadow-gray-900/20' 
                        : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg shadow-gray-200/50 border border-gray-100'
                    }`}
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h4 className={`text-lg font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {['About Us', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className={`transition-colors duration-300 hover:text-emerald-600 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className={`text-lg font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Services
                </h4>
                <ul className="space-y-3">
                  {['Web Development', 'Mobile Apps', 'UI/UX Design', 'DevOps', 'Consulting'].map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className={`transition-colors duration-300 hover:text-emerald-600 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`border-t ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-center items-center">
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <p>&copy; 2025 BandDevs. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
