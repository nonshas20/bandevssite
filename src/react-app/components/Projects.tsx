import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Calendar, Users, Star } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  details: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    duration: string;
    teamSize: string;
    client: string;
  };
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A modern, scalable e-commerce platform built with React, Node.js, and microservices architecture. Features real-time inventory, payment processing, and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      details: {
        overview: 'A comprehensive e-commerce solution designed to handle high-volume transactions with seamless user experience and robust backend infrastructure.',
        challenge: 'The client needed a scalable platform that could handle 10,000+ concurrent users while maintaining fast load times and secure payment processing.',
        solution: 'We implemented a microservices architecture with Docker containers, Redis caching, and CDN integration. The frontend uses React with server-side rendering for optimal performance.',
        results: [
          '300% increase in conversion rates',
          '50% reduction in page load times',
          '99.9% uptime achieved',
          'Scaled to handle 50,000+ daily active users'
        ],
        duration: '4 months',
        teamSize: '6 developers',
        client: 'RetailCorp Inc.'
      }
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile Application',
      description: 'Cross-platform mobile app for personal finance management with AI-powered insights, budget tracking, and investment recommendations.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      details: {
        overview: 'An intelligent personal finance app that uses machine learning to provide personalized financial insights and recommendations.',
        challenge: 'Creating a secure, user-friendly mobile app that could process complex financial data while maintaining bank-level security standards.',
        solution: 'Developed using React Native for cross-platform compatibility, with Python backend for ML processing. Implemented end-to-end encryption and biometric authentication.',
        results: [
          '4.8/5 App Store rating',
          '100,000+ downloads in first month',
          '40% improvement in user financial habits',
          'Featured in App Store Finance category'
        ],
        duration: '6 months',
        teamSize: '8 developers',
        client: 'MoneyWise Financial'
      }
    },
    {
      title: 'Healthcare Dashboard',
      category: 'Web Application',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      details: {
        overview: 'A complete healthcare management platform streamlining patient care with integrated telemedicine and scheduling features.',
        challenge: 'Building a HIPAA-compliant system that could handle sensitive medical data while providing seamless video consultations.',
        solution: 'Used Vue.js for the frontend with Laravel backend, implementing robust security measures and WebRTC for video calls.',
        results: [
          '70% reduction in administrative tasks',
          '95% patient satisfaction rate',
          'HIPAA compliance achieved',
          '500+ healthcare providers onboarded'
        ],
        duration: '8 months',
        teamSize: '10 developers',
        client: 'HealthTech Solutions'
      }
    },
    {
      title: 'AI Chat Platform',
      category: 'SaaS Product',
      description: 'Intelligent customer service platform with natural language processing and automated response generation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'Socket.io', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      details: {
        overview: 'An AI-powered customer service platform that automates support queries and provides intelligent responses.',
        challenge: 'Creating a system that could understand context and provide accurate, helpful responses while maintaining human-like conversation flow.',
        solution: 'Integrated OpenAI API with custom training data, built real-time chat with Socket.io, and implemented Redis for session management.',
        results: [
          '80% reduction in response time',
          '90% customer query resolution rate',
          '60% decrease in support tickets',
          '$2M ARR achieved in first year'
        ],
        duration: '5 months',
        teamSize: '7 developers',
        client: 'SupportBot Inc.'
      }
    },
    {
      title: 'Smart IoT Dashboard',
      category: 'IoT Solution',
      description: 'Real-time monitoring and control system for IoT devices with predictive maintenance and energy optimization.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Python', 'InfluxDB', 'MQTT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      details: {
        overview: 'A comprehensive IoT management platform providing real-time monitoring and predictive analytics for industrial equipment.',
        challenge: 'Managing thousands of IoT devices with real-time data processing while providing actionable insights for maintenance.',
        solution: 'Built with Angular frontend, Python backend for data processing, InfluxDB for time-series data, and MQTT for device communication.',
        results: [
          '35% reduction in equipment downtime',
          '25% energy cost savings',
          '1000+ devices monitored simultaneously',
          'ROI achieved within 6 months'
        ],
        duration: '7 months',
        teamSize: '9 developers',
        client: 'Industrial Automation Ltd.'
      }
    },
    {
      title: 'Social Learning Platform',
      category: 'Education Technology',
      description: 'Interactive learning platform with video streaming, collaborative tools, and progress tracking for online education.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      details: {
        overview: 'A collaborative learning platform that connects students and educators through interactive tools and real-time communication.',
        challenge: 'Creating an engaging online learning experience that could rival in-person education while supporting thousands of concurrent users.',
        solution: 'Developed with React frontend, Express.js backend, PostgreSQL database, and integrated WebRTC for video conferencing and screen sharing.',
        results: [
          '95% student engagement rate',
          '50,000+ active learners',
          '40% improvement in learning outcomes',
          'Adopted by 200+ educational institutions'
        ],
        duration: '6 months',
        teamSize: '12 developers',
        client: 'EduConnect Global'
      }
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
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
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore our portfolio of successful projects that showcase our expertise 
            in creating innovative digital solutions across various industries.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600'
                    : 'bg-white border-gray-200 hover:shadow-xl hover:border-gray-300'
                }`}>
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 right-4 flex space-x-2"
                    >
                      <motion.a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs font-medium rounded ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                    >
                      <span className="mr-2">View Details</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            More Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                    : 'bg-white border-gray-200 hover:shadow-lg'
                }`}>
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black/50 text-white text-xs font-medium rounded">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-3"
                    >
                      <motion.a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        <Github size={16} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className={`font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h4>
                    
                    <p className={`text-xs leading-relaxed mb-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description
                      }
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs rounded ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 text-xs rounded ${
                          darkMode ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } shadow-lg hover:scale-110 transition-transform`}
              >
                <X size={20} />
              </button>

              {/* Project Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-2 inline-block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {selectedProject.details.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {selectedProject.details.teamSize}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Project Overview
                    </h3>
                    <p className={`mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedProject.details.overview}
                    </p>

                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      The Challenge
                    </h4>
                    <p className={`mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedProject.details.challenge}
                    </p>

                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Our Solution
                    </h4>
                    <p className={`leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedProject.details.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Results & Impact
                    </h3>
                    <div className="space-y-3 mb-6">
                      {selectedProject.details.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <Star className="text-emerald-500 mr-3" size={16} />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <h4 className={`font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Project Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Client:</span>
                          <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                            {selectedProject.details.client}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Duration:</span>
                          <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                            {selectedProject.details.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Team Size:</span>
                          <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                            {selectedProject.details.teamSize}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h4 className={`font-semibold mt-6 mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            darkMode
                              ? 'bg-gray-800 text-gray-300 border border-gray-700'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4 mt-8 pt-8 border-t border-gray-200/20">
                  <motion.a
                    href={selectedProject.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Live Site
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 ${
                      darkMode
                        ? 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                    }`}
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
