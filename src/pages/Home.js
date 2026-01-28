import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CollegeGallery from '../components/CollegeGallery';

const Home = () => {
  const [counters, setCounters] = useState({
    years: 0,
    programs: 0,
    students: 0,
    faculty: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters when stats section is visible
            if (entry.target.id === 'stats-section') {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 25, programs: 6, students: 1000, faculty: 50 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  const programs = [
    {
      title: 'BSc CSIT',
      description: 'Bachelor of Science in Computer Science and Information Technology',
      duration: '4 Years (8 Semesters)',
      seats: '48 Seats',
      icon: '💻',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'BCA',
      description: 'Bachelor of Computer Applications',
      duration: '4 Years (8 Semesters)',
      seats: '35 Seats',
      icon: '🖥️',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'BBM',
      description: 'Bachelor of Business Management',
      duration: '4 Years (8 Semesters)',
      seats: 'Limited Seats',
      icon: '📊',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'BBS',
      description: 'Bachelor of Business Studies',
      duration: '4 Years (8 Semesters)',
      seats: 'Limited Seats',
      icon: '📈',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: '+2 Science',
      description: 'Higher Secondary Level in Science Stream',
      duration: '2 Years',
      seats: 'Multiple Sections',
      icon: '🔬',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: '+2 Management',
      description: 'Higher Secondary Level in Management Stream',
      duration: '2 Years',
      seats: 'Multiple Sections',
      icon: '📋',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const features = [
    {
      title: 'Glorious History',
      description: 'With more than 2.5 decades of excellence, NSC remains the first choice of students',
      icon: '🏆',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600'
    },
    {
      title: 'Prime Location',
      description: 'Located in Shantinagar, New Baneshwor - easily accessible with wide public transport network',
      icon: '📍',
      color: 'bg-gradient-to-br from-red-400 to-red-600'
    },
    {
      title: 'Own Infrastructure',
      description: 'We have our own physical infrastructures providing stability in management',
      icon: '🏢',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      title: 'Dedicated Faculty',
      description: 'Our teaching and non-teaching faculties are dedicated professionals and best path showers',
      icon: '👨‍🏫',
      color: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    {
      title: 'On-Demand Tutorials',
      description: 'We analyze student results and provide remedy classes and professional training programs',
      icon: '📚',
      color: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      title: 'Flexible Timings',
      description: 'Classes conducted in both morning and day shifts with accommodation facilities',
      icon: '⏰',
      color: 'bg-gradient-to-br from-pink-400 to-pink-600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 nepal-pattern opacity-10"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary-400/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-400/10 rounded-full animate-pulse-slow"></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🎓 Excellence in Education Since 2055 B.S.
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
                LEARNERS TO <br/>
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse-slow">
                  LEADERS!
                </span>
              </h1>
              <p className="text-xl mb-8 text-primary-100 leading-relaxed">
                NSC has acquired a very advanced position in the educational and technological environment of the nation. 
                Established in 2055 B.S. by an esteemed group of educational leaders, preparing modern and progressive learning minds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 group">
                  <span className="mr-2">🎓</span>
                  Apply Now
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link to="/programs" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  <span className="mr-2">📚</span>
                  View Programs
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="glass-effect rounded-2xl p-8 floating-element">
                <div className="grid grid-cols-2 gap-4 text-center" id="stats-section">
                  <div className="bg-white/20 rounded-lg p-4 card-hover">
                    <div className="text-3xl font-bold mb-2">{counters.years}+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 card-hover">
                    <div className="text-3xl font-bold mb-2">{counters.programs}</div>
                    <div className="text-sm">Programs Offered</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 card-hover">
                    <div className="text-3xl font-bold mb-2">TU</div>
                    <div className="text-sm">Affiliated</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 card-hover">
                    <div className="text-3xl font-bold mb-2">NEB</div>
                    <div className="text-sm">Approved</div>
                  </div>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-400 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400 rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="text-center mb-12 animate-on-scroll" id="programs-title">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Courses We <span className="gradient-text">Offered!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              +2 Science | Management | Law and Bachelor Programs in IT and Management
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 card-hover animate-on-scroll relative overflow-hidden group"
                id={`program-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="text-primary-600 font-semibold text-sm">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Seats:</span>
                      <span className="text-secondary-600 font-semibold text-sm">{program.seats}</span>
                    </div>
                    <Link 
                      to="/programs" 
                      className="block text-center text-primary-600 hover:text-primary-700 font-medium mt-4 py-2 px-4 rounded-lg border border-primary-200 hover:border-primary-300 transition-all duration-300 group-hover:bg-primary-50"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NSC Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-12 animate-on-scroll" id="why-nsc-title">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Why <span className="gradient-text">NSC?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With a glorious history of more than 2.5 decades, NSC remains the first choice of students 
              where they get the profound foundation knowledge in Science, Management and Law streams.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center bg-white rounded-xl shadow-lg p-6 card-hover animate-on-scroll group relative overflow-hidden"
                id={`feature-${index}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <div className={`w-full h-full ${feature.color}`}></div>
                </div>
                <div className="relative z-10">
                  <div className="relative inline-block mb-4">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {feature.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                      <div className={`w-16 h-16 mx-auto ${feature.color} rounded-full animate-pulse`}></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Gallery */}
      <CollegeGallery />

      {/* CTA Section */}
      <section className="section-padding hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 nepal-pattern opacity-10"></div>
        <div className="container-max text-center relative z-10">
          <div className="animate-on-scroll" id="cta-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Ready to Start Your <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Journey?</span>
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Join the institution that lies in the top for providing academic services for aspiring young students. 
              Apply today and take the first step towards your bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 group">
                <span className="mr-2">🎓</span>
                Apply for Admission
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 group">
                <span className="mr-2">📞</span>
                Contact Us
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent-400/20 rounded-full animate-pulse-slow"></div>
      </section>

      {/* Our Briefs Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="text-center mb-12 animate-on-scroll" id="briefs-title">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our <span className="gradient-text">Briefs</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', text: 'The positive energy that a person possess can benefits the individual and community.', color: 'from-yellow-400 to-orange-500' },
              { icon: '⚖️', text: 'The balance of friendly and disciplined environment always brings the full potential of the people engaged.', color: 'from-blue-400 to-indigo-500' },
              { icon: '🤝', text: 'The honesty and ownership of the actions taken by individual helps the community and the environment thrive.', color: 'from-green-400 to-teal-500' },
              { icon: '🌟', text: 'Every student is important and possess special talent and knowledge which will encourages the teaching learning activities.', color: 'from-purple-400 to-pink-500' },
              { icon: '🌍', text: 'The diversified students enrich the cultural values of the college and provides an ocean of experiences and resources.', color: 'from-cyan-400 to-blue-500' },
              { icon: '🎓', text: 'We being a home to hundred graduates, we must prepare students to face the challenges of this era and succeed in life.', color: 'from-red-400 to-pink-500' }
            ].map((brief, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 card-hover animate-on-scroll group relative overflow-hidden"
                id={`brief-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${brief.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {brief.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {brief.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;