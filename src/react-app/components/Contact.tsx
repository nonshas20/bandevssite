import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import type { ContactMessageType, ContactResponseType } from '../../shared/types';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState<ContactMessageType>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@banddevs.com',
      link: 'mailto:hello@banddevs.com'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ContactResponseType = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
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
                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-2xl flex items-center space-x-3 ${
                      submitStatus.type === 'success'
                        ? darkMode
                          ? 'bg-emerald-900/50 border border-emerald-700/50 text-emerald-300'
                          : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                        : darkMode
                          ? 'bg-red-900/50 border border-red-700/50 text-red-300'
                          : 'bg-red-50 border border-red-200 text-red-700'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className={`block text-sm font-medium mb-3 transition-colors ${
                        darkMode ? 'text-gray-300 group-focus-within:text-emerald-400' : 'text-gray-700 group-focus-within:text-emerald-600'
                      }`}>
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
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
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
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
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
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
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 appearance-none ${
                            darkMode
                              ? 'bg-gray-800/50 text-white backdrop-blur-sm'
                              : 'bg-gray-50/80 text-gray-900 backdrop-blur-sm'
                          }`}
                        >
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
                      Project Details *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
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
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="ml-2" />
                        </>
                      )}
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
            className="lg:col-span-2 flex flex-col h-full"
          >
            {/* Contact Information */}
            <div className={`relative overflow-hidden rounded-3xl flex-1 ${
              darkMode 
                ? 'bg-gray-900/80 backdrop-blur-xl border border-gray-700/50' 
                : 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg'
            }`}>
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Get in Touch
                  </h3>
                </div>
                
                <div className="space-y-3 flex-1">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 3 }}
                      className="flex items-center space-x-3 group p-3 rounded-xl transition-all duration-200 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        darkMode 
                          ? 'bg-gray-800 group-hover:bg-emerald-600' 
                          : 'bg-gray-100 group-hover:bg-emerald-600'
                      }`}>
                        <item.icon className={`transition-colors ${
                          darkMode 
                            ? 'text-gray-400 group-hover:text-white' 
                            : 'text-gray-600 group-hover:text-white'
                        }`} size={14} />
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.label}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-emerald-600 transition-colors`}>
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Usually responds within 2 hours
                    </span>
                  </div>
                </div>

                {/* Google Maps - Compact */}
                <div className="mt-4">
                  <h4 className={`text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Our Location
                  </h4>
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123584.17105068647!2d120.97063!3d14.4838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d17e0a5fa7c3%3A0x2b10c2d3e5a4b9db!2sParañaque%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1730832000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    />
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
