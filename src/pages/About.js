import React from 'react';

const About = () => {
  const coreValues = [
    {
      title: 'Student Success',
      description: 'The college provides every student with various opportunities to excel.',
      icon: '🎯'
    },
    {
      title: 'Service',
      description: 'The college\'s purpose is to benefit our students and society through knowledge and social services.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'The college consistently seek a better way by embracing challenges.',
      icon: '💡'
    },
    {
      title: 'Collaboration',
      description: 'The college seeks partnerships both within and beyond the college to enhance its actions and outcomes.',
      icon: '🌐'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About New Summit College</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            NSC has attained a highly advanced position in the nation's educational and technological landscape.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              New Summit College (NSC) has attained a highly advanced position in the nation's educational and technological landscape. 
              Established in 2064 B.S. by a distinguished group of educational leaders, its education system and research-oriented 
              environment are designed to accommodate, prepare, and produce modern, progressive minds ready to succeed in a globalized context.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The college's interior environment offers ample resources for students to engage with modern technological pedagogy, 
              contributing to its illustrious history spanning over 25 years. The dedicated teaching faculty and friendly administrative 
              staff tirelessly work to nurture raw minds into the promising future of the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Establishing and developing such an academic center where a blend of science, IT, management, 
                and social science stands as bedrock for pursuing nation/world building.
              </p>
            </div>
            <div className="bg-secondary-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-secondary-700 mb-6">Our Mission</h2>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To build a legacy of excellence by providing theoretical, practical, and research-based education.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To develop future doctors, engineers, politicians, scientists, managers, entrepreneurs, IT developers, and technical experts.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To initiate a sense of social responsibility in the mind of a new generation.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To produce skilful human resources in the area of productive and professional jobs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values of NSC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our institution and shape our educational approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Excellence</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Legacy of Excellence</h3>
              <p className="text-gray-700 mb-6">
                Throughout its history of academic excellence, NSC has produced many leaders in the national job market 
                across professions such as medicine, engineering, management, and law. In collaboration with national and 
                international educational benchmarks, New Summit College has continuously renovated its institutional systems.
              </p>
              <p className="text-gray-700">
                NSC remains committed to maintaining its top position among private educational institutions. The college 
                aims to produce graduates who distinguish themselves and achieve leading positions in their fields.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Our Achievements</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold">25+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Years of Excellence</div>
                    <div className="text-sm text-gray-600">Serving students since 2055 B.S.</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-secondary-600 font-bold">TU</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">TU Affiliated</div>
                    <div className="text-sm text-gray-600">Tribhuvan University Programs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">NEB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">NEB Approved</div>
                    <div className="text-sm text-gray-600">+2 Level Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Infrastructure */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Location & Infrastructure</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Location</h3>
                <p className="text-gray-700 mb-4">
                  The campus of NSC is located in the heart of city i.e. Shantinagar, New Baneshwor which is easily 
                  accessible for all students who are living across the valley due to widerange of public commute network.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="text-primary-500 mr-2">📍</span>
                    <span>Shantinagar Gate, Tinkune, New Baneshwor</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-primary-500 mr-2">🚌</span>
                    <span>Wide range of public transport network</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-primary-500 mr-2">🏙️</span>
                    <span>Located in the heart of Kathmandu</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Own Infrastructure</h3>
                <p className="text-gray-700 mb-4">
                  We have our own physical infrastructures which provides the stability in management which fosters 
                  the environment in and out. The entire setup features world-class infrastructure and interiors.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="text-secondary-500 mr-2">🏢</span>
                    <span>Three academic blocks</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-secondary-500 mr-2">💻</span>
                    <span>Modern computer laboratories</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-secondary-500 mr-2">📚</span>
                    <span>Well-equipped library facilities</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-secondary-500 mr-2">🎭</span>
                    <span>Auditorium for events and seminars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;