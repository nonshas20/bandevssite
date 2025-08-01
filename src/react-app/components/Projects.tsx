import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, Users, Star } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
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
      title: 'Kape Pilipino',
      category: 'Web Application',
      description: 'A modern Filipino coffee website featuring authentic local coffee varieties, traditional preparations, and a responsive, interactive design. Includes backend integration for managing products, orders, and customer information.',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/Copy-of-kapepilipino.png',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'Font Awesome'],
      featured: true,
      details: {
        overview: 'A comprehensive e-commerce website dedicated to showcasing authentic Filipino coffee varieties and traditional brewing methods. Features a modern, responsive design with seamless user experience.',
        challenge: 'Creating an engaging platform that authentically represents Filipino coffee culture while providing robust e-commerce functionality for product management and order processing.',
        solution: 'Developed a responsive website using Tailwind CSS for modern styling, PHP backend for server-side logic, and MySQL database integration through XAMPP for efficient data management.',
        results: [
          'Authentic Filipino coffee showcase',
          'Responsive design across all devices',
          'Integrated product management system',
          'Seamless order processing workflow'
        ],
        duration: '3 months',
        teamSize: '4 developers',
        client: 'Filipino Coffee Enthusiasts'
      }
    },
    {
      title: 'MCP IT Helpdesk System',
      category: 'Web Application',
      description: 'A modern helpdesk system with an automated hardware replacement request process. Sends approval emails via Gmail SMTP and features a responsive UI using Tailwind CSS. Built locally with XAMPP.',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/MCP.png',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'Gmail SMTP API'],
      featured: true,
      details: {
        overview: 'A comprehensive IT helpdesk management system designed to streamline hardware replacement requests and automate approval workflows with email notifications.',
        challenge: 'Building an efficient system that could handle multiple IT requests simultaneously while maintaining clear approval workflows and automated email notifications.',
        solution: 'Implemented using PHP backend with MySQL database, integrated Gmail SMTP API for automated emails, and designed responsive UI with Tailwind CSS for optimal user experience.',
        results: [
          '80% reduction in request processing time',
          'Automated email notification system',
          'Streamlined approval workflow',
          'Improved IT support efficiency'
        ],
        duration: '4 months',
        teamSize: '5 developers',
        client: 'MCP IT Department'
      }
    },
    {
      title: 'CHOIMS',
      category: 'Web Application',
      description: 'City Health Inventory Management System. An inventory management system for City Health Office under Health Information Management unit, which has different roles with different permissions. Successfully deployed to different health centers around Paranaque.',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/Copy-of-choims.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      featured: true,
      details: {
        overview: 'A comprehensive health inventory management system designed for City Health Offices with role-based access control and multi-location deployment capabilities.',
        challenge: 'Creating a robust system that could manage medical inventory across multiple health centers while maintaining different user permissions and roles for various healthcare professionals.',
        solution: 'Developed using core web technologies with PHP backend and MySQL database, implementing role-based authentication and inventory tracking across multiple locations.',
        results: [
          'Successfully deployed to multiple health centers',
          'Role-based access control implemented',
          'Efficient inventory tracking system',
          'Improved healthcare resource management'
        ],
        duration: '6 months',
        teamSize: '6 developers',
        client: 'Paranaque City Health Office'
      }
    },
    {
      title: 'OJT Tracker',
      category: 'Web Application',
      description: 'Made with React, it\'s for tracking an intern\'s hours with AI integration of weekly summary for the intern\'s journal. Features modern UI and intelligent reporting capabilities.',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/Copy-of-ojttracker.png',
      technologies: ['React', 'AI Integration', 'JavaScript', 'Node.js'],
      featured: false,
      details: {
        overview: 'An intelligent OJT (On-the-Job Training) tracking system that monitors intern hours and generates AI-powered weekly summaries for comprehensive journal reporting.',
        challenge: 'Developing a system that could accurately track intern hours while providing meaningful insights through AI-generated summaries for educational purposes.',
        solution: 'Built using React for the frontend with AI integration for automated weekly summaries, providing both time tracking and intelligent reporting capabilities.',
        results: [
          'Automated hour tracking system',
          'AI-powered weekly summaries',
          'Improved intern monitoring',
          'Enhanced educational reporting'
        ],
        duration: '3 months',
        teamSize: '3 developers',
        client: 'Educational Institution'
      }
    },
    {
      title: 'DisasterWatchPH',
      category: 'Mobile Application',
      description: 'An Android app made using Android Studio, combination of Kotlin and Java, with XML as the interface and Firebase as the database, and Mapbox as the map API. This is a disaster reporting app with responder support for DRRMO.',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/disasterwatchPH.jpeg',
      technologies: ['Android Studio', 'Kotlin', 'Java', 'XML', 'Firebase', 'Mapbox'],
      featured: false,
      details: {
        overview: 'A comprehensive disaster reporting and response mobile application designed to connect citizens with DRRMO (Disaster Risk Reduction and Management Office) for effective emergency response.',
        challenge: 'Creating a reliable mobile platform that could handle emergency reports in real-time while providing accurate location mapping and efficient communication with emergency responders.',
        solution: 'Developed using Android Studio with Kotlin and Java, integrated Firebase for real-time data management and Mapbox for precise location services and mapping functionality.',
        results: [
          'Real-time disaster reporting system',
          'Integration with DRRMO response team',
          'Accurate location mapping',
          'Improved emergency response time'
        ],
        duration: '5 months',
        teamSize: '4 developers',
        client: 'DRRMO Philippines'
      }
    },
    {
      title: 'Sto. Nino Barangay Management System',
      category: 'Web Application',
      description: 'Barangay Reports Management System. A full-featured Barangay Report Management System designed for efficient handling of community reports. The system includes real-time reporting, user authentication, case tracking, and automated notifications.',
      image: 'https://mocha-cdn.com/01986472-3b48-7fb3-868c-a76770b7b64d/Brgymanagementsystem.png',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
      featured: false,
      details: {
        overview: 'A comprehensive barangay management system designed to streamline community report handling, case tracking, and citizen services at the local government level.',
        challenge: 'Building a system that could efficiently manage various types of community reports while maintaining clear tracking mechanisms and automated notification systems for local officials.',
        solution: 'Implemented using core web technologies with PHP backend and MySQL database, featuring user authentication, case management, and automated notification systems.',
        results: [
          'Streamlined community report processing',
          'Automated notification system',
          'Improved case tracking efficiency',
          'Enhanced barangay service delivery'
        ],
        duration: '4 months',
        teamSize: '5 developers',
        client: 'Sto. Nino Barangay Office'
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
