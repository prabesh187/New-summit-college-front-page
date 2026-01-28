import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: 'BSc Computer Science and Information Technology (CSIT)',
      duration: '4 Years (8 Semesters)',
      affiliation: 'Tribhuvan University',
      seats: '48 Seats Available',
      description: 'A comprehensive program covering software development, database systems, networking, and emerging technologies. Designed to provide students with comprehensive knowledge and skills in computer science, software engineering, and information technology.',
      subjects: ['Programming Languages', 'Data Structures & Algorithms', 'Database Management Systems', 'Computer Networks', 'Software Engineering', 'Web Technologies', 'System Analysis & Design', 'Computer Graphics'],
      career: ['Software Developer', 'System Analyst', 'Database Administrator', 'Network Engineer', 'IT Consultant', 'Web Developer', 'QA Engineer', 'Technical Support'],
      entrance: 'TU IoST Entrance (English, Mathematics, Physics, Chemistry)',
      icon: '💻'
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      duration: '4 Years (8 Semesters)',
      affiliation: 'Tribhuvan University',
      seats: '35 Seats Available',
      description: 'Focused on practical computer applications and software development with industry-relevant skills. The program focuses on application development, databases, and computing fundamentals.',
      subjects: ['Programming Languages', 'Web Technologies', 'Mobile App Development', 'System Analysis', 'Project Management', 'Database Systems', 'Computer Networks', 'Software Testing'],
      career: ['Application Developer', 'Web Developer', 'Software Tester', 'System Administrator', 'Technical Support', 'Database Developer', 'IT Support Specialist'],
      entrance: 'TU BCA Entrance administered by FoHSS',
      icon: '🖥️'
    },
    {
      title: 'Bachelor of Business Management (BBM)',
      duration: '4 Years (8 Semesters)',
      affiliation: 'Tribhuvan University',
      seats: 'Limited Seats',
      description: 'Comprehensive business education covering management principles, marketing, finance, and entrepreneurship under TU Faculty of Management.',
      subjects: ['Management Principles', 'Marketing Management', 'Financial Management', 'Human Resource Management', 'Business Law', 'Entrepreneurship', 'Organizational Behavior', 'Strategic Management'],
      career: ['Business Manager', 'Marketing Executive', 'Financial Analyst', 'HR Officer', 'Entrepreneur', 'Project Manager', 'Business Consultant'],
      entrance: 'Central Management Admission Test (CMAT) and campus selection',
      icon: '📊'
    },
    {
      title: 'Bachelor of Business Studies (BBS)',
      duration: '4 Years (8 Semesters)',
      affiliation: 'Tribhuvan University',
      seats: 'Limited Seats',
      description: 'Foundation program in business studies with focus on accounting, economics, and business operations following TU guidelines.',
      subjects: ['Accounting', 'Economics', 'Business Statistics', 'Business Communication', 'Banking & Finance', 'Insurance', 'Business Law', 'Marketing'],
      career: ['Accountant', 'Banking Officer', 'Business Analyst', 'Administrative Officer', 'Sales Executive', 'Financial Officer', 'Insurance Agent'],
      entrance: 'TU entrance and campus-level selection',
      icon: '📈'
    },
    {
      title: '+2 Science (NEB)',
      duration: '2 Years',
      affiliation: 'National Examination Board',
      seats: 'Multiple Sections',
      description: 'Higher Secondary Level in Science stream preparing students for bachelor\'s programs in IT, Engineering, and Medical fields.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Nepali', 'Computer Science'],
      career: ['Preparation for BSc CSIT', 'Engineering Entrance', 'Medical Entrance', 'Science Research'],
      entrance: 'SLC/SEE with good grades in Science subjects',
      icon: '🔬'
    },
    {
      title: '+2 Management (NEB)',
      duration: '2 Years',
      affiliation: 'National Examination Board',
      seats: 'Multiple Sections',
      description: 'Higher Secondary Level in Management stream preparing students for bachelor\'s programs in Business and Management.',
      subjects: ['Accountancy', 'Economics', 'Business Studies', 'Marketing', 'English', 'Nepali', 'Computer Science'],
      career: ['Preparation for BBM/BBS', 'Banking Sector', 'Business Management', 'Entrepreneurship'],
      entrance: 'SLC/SEE with good grades',
      icon: '📋'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of undergraduate programs designed to 
            prepare you for success in today's competitive world.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Program Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{program.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <span>📅 {program.duration}</span>
                          <span>🏛️ {program.affiliation}</span>
                          <span>🎯 {program.seats}</span>
                          <span>📝 {program.entrance}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Subjects</h4>
                        <ul className="space-y-1">
                          {program.subjects.map((subject, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Career Opportunities</h4>
                        <ul className="space-y-1">
                          {program.career.map((career, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                              {career}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      Start your journey towards a successful career. Apply now and secure your future.
                    </p>
                    <div className="space-y-3">
                      <button className="w-full btn-primary">Apply Now</button>
                      <button className="w-full btn-secondary">Download Brochure</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              General requirements for admission to our undergraduate programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Academic Qualification</h3>
              <p className="text-gray-600 text-sm">
                Minimum 2.0 GPA in +2 or equivalent from recognized institution
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entrance Exam</h3>
              <p className="text-gray-600 text-sm">
                Pass the college entrance examination or TU entrance test
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Documents</h3>
              <p className="text-gray-600 text-sm">
                Academic transcripts, character certificate, and passport photos
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application Fee</h3>
              <p className="text-gray-600 text-sm">
                NPR 1,000 non-refundable application processing fee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure and facilities to support your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Computer Labs</h3>
              <p className="text-gray-700">
                State-of-the-art computer labs with latest hardware and software for practical learning.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-secondary-700 mb-3">Library</h3>
              <p className="text-gray-700">
                Extensive collection of books, journals, and digital resources for research and study.
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-yellow-700 mb-3">Auditorium</h3>
              <p className="text-gray-700">
                Modern auditorium for seminars, presentations, and cultural events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;