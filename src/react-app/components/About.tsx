import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver pixel-perfect solutions with meticulous attention to detail and unwavering focus on quality.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative problem-solving approaches.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients as partners to understand needs and exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that drive business growth and success.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechFlow
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We are a passionate team of technology enthusiasts dedicated to transforming 
            ideas into powerful digital experiences that drive business success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-3xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Crafting Digital Excellence Since 2019
            </h3>
            
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Founded with a vision to bridge the gap between complex technology and 
                business needs, TechFlow Solutions has grown into a trusted partner for 
                companies looking to leverage digital transformation.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our expertise spans web development, mobile applications, cloud solutions, 
                and digital strategy. We don't just build software – we create digital 
                experiences that engage users and drive measurable results.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: '150+', label: 'Projects Completed' },
                  { number: '50+', label: 'Satisfied Clients' },
                  { number: '99%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`p-4 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/80 border-gray-200 shadow-xl'
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Mission
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Empowering businesses through technology
                      </p>
                    </div>
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    To be the catalyst that transforms innovative ideas into powerful 
                    digital solutions, helping businesses thrive in the digital age.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 opacity-20 blur-xl`}
              />
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl`}
              />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white border-gray-200 hover:shadow-lg hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4`}>
                <value.icon className="text-white" size={24} />
              </div>
              
              <h4 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {value.title}
              </h4>
              
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
