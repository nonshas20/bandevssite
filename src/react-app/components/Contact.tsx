import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@bandevs.com',
      link: 'mailto:hello@bandevs.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 966-561-5155',
      link: 'tel:+639665615155'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Manila',
      link: '#'
    }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'DevOps & Infrastructure',
    'UI/UX Design',
    'Digital Strategy'
  ];

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Let's <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to transform your ideas into reality? Get in touch with us and let's 
            discuss how we can help bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Column - Contact Form (iOS Style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className={`relative overflow-hidden rounded-3xl ${
              darkMode 
                ? 'bg-gray-900/80 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl'
            }`}>
              {/* iOS-style header */}
              <div className={`px-8 py-6 border-b ${
                darkMode ? 'border-gray-700/50' : 'border-gray-100'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    New Message
                  </h3>
                </div>
              </div>

              {/* Form content */}
              <div className="p-8">
                <form className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors ${
                        darkMode ? 'text-gray-300 group-focus-within:text-emerald-400' : 'text-gray-700 group-focus-within:text-emerald-600'
                      }`}>
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className={`w-full px-4 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 ${
                            darkMode
                              ? 'bg-gray-800/50 text-white placeholder-gray-400 backdrop-blur-sm'
                              : 'bg-gray-50/80 text-gray-900 placeholder-gray-500 backdrop-blur-sm'
                          }`}
                          placeholder="John Doe"
                        />
                        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-focus-within:border-emerald-500/30 transition-colors duration-300 pointer-events-none`}></div>
                      </div>
                    </div>
                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors ${
                        darkMode ? 'text-gray-300 group-focus-within:text-emerald-400' : 'text-gray-700 group-focus-within:text-emerald-600'
                      }`}>
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          className={`w-full px-4 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 ${
                            darkMode
                              ? 'bg-gray-800/50 text-white placeholder-gray-400 backdrop-blur-sm'
                              : 'bg-gray-50/80 text-gray-900 placeholder-gray-500 backdrop-blur-sm'
                          }`}
                          placeholder="john@example.com"
                        />
                        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-focus-within:border-emerald-500/30 transition-colors duration-300 pointer-events-none`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Company & Service */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors ${
                        darkMode ? 'text-gray-300 group-focus-within:text-emerald-400' : 'text-gray-700 group-focus-within:text-emerald-600'
                      }`}>
                        Company
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className={`w-full px-4 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 ${
                            darkMode
                              ? 'bg-gray-800/50 text-white placeholder-gray-400 backdrop-blur-sm'
                              : 'bg-gray-50/80 text-gray-900 placeholder-gray-500 backdrop-blur-sm'
                          }`}
                          placeholder="Your Company"
                        />
                        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-focus-within:border-emerald-500/30 transition-colors duration-300 pointer-events-none`}></div>
                      </div>
                    </div>
                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors ${
                        darkMode ? 'text-gray-300 group-focus-within:text-emerald-400' : 'text-gray-700 group-focus-within:text-emerald-600'
                      }`}>
                        Service Needed
                      </label>
                      <div className="relative">
                        <select className={`w-full px-4 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 appearance-none ${
                          darkMode
                            ? 'bg-gray-800/50 text-white backdrop-blur-sm'
                            : 'bg-gray-50/80 text-gray-900 backdrop-blur-sm'
                        }`}>
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-focus-within:border-emerald-500/30 transition-colors duration-300 pointer-events-none`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className={`block text-sm font-medium mb-3 transition-colors ${
                      darkMode ? 'text-gray-300 group-focus-within:text-emerald-400' : 'text-gray-700 group-focus-within:text-emerald-600'
                    }`}>
                      Project Details
                    </label>
                    <div className="relative">
                      <textarea
                        rows={6}
                        className={`w-full px-4 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 resize-none ${
                          darkMode
                            ? 'bg-gray-800/50 text-white placeholder-gray-400 backdrop-blur-sm'
                            : 'bg-gray-50/80 text-gray-900 placeholder-gray-500 backdrop-blur-sm'
                        }`}
                        placeholder="Tell us about your project, timeline, and requirements..."
                      />
                      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-focus-within:border-emerald-500/30 transition-colors duration-300 pointer-events-none`}></div>
                    </div>
                  </div>

                  

                  {/* Submit Button - iOS Style */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative flex items-center">
                      Send Message
                      <Send size={20} className="ml-2" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Contact Information */}
            <div className={`relative overflow-hidden rounded-3xl ${
              darkMode 
                ? 'bg-gray-900/80 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg'
            }`}>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Get in Touch
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-5 group p-4 rounded-2xl transition-all duration-200 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        darkMode 
                          ? 'bg-gray-800 group-hover:bg-emerald-600' 
                          : 'bg-gray-100 group-hover:bg-emerald-600'
                      }`}>
                        <item.icon className={`transition-colors ${
                          darkMode 
                            ? 'text-gray-400 group-hover:text-white' 
                            : 'text-gray-600 group-hover:text-white'
                        }`} size={20} />
                      </div>
                      <div>
                        <p className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.label}
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-emerald-600 transition-colors`}>
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Usually responds within 2 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
