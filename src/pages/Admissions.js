import React, { useState } from 'react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  const admissionSteps = [
    {
      step: '1',
      title: 'Fill Application',
      description: 'Complete the online application form with required details',
      icon: '📝'
    },
    {
      step: '2',
      title: 'Submit Documents',
      description: 'Provide academic transcripts and required certificates',
      icon: '📄'
    },
    {
      step: '3',
      title: 'Entrance Exam',
      description: 'Take the college entrance examination',
      icon: '✍️'
    },
    {
      step: '4',
      title: 'Interview',
      description: 'Attend personal interview with admission committee',
      icon: '🗣️'
    },
    {
      step: '5',
      title: 'Admission',
      description: 'Receive admission confirmation and complete enrollment',
      icon: '🎓'
    }
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'March 1, 2024' },
    { event: 'Application Deadline', date: 'June 30, 2024' },
    { event: 'Entrance Exam', date: 'July 15, 2024' },
    { event: 'Results Publication', date: 'July 25, 2024' },
    { event: 'Classes Begin', date: 'August 15, 2024' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Start your journey towards academic excellence. Apply now and join 
            thousands of successful graduates from New Summit College.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to secure your admission at New Summit College.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apply Online</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to start your application process.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a program</option>
                      <option value="bsc-csit">BSc CSIT</option>
                      <option value="bca">BCA</option>
                      <option value="bbm">BBM</option>
                      <option value="bbs">BBS</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any additional information or questions..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary text-lg px-8 py-4">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with these important admission dates and deadlines.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {importantDates.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-6 ${index !== importantDates.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-lg font-medium text-gray-900">{item.event}</span>
                  </div>
                  <span className="text-primary-600 font-semibold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Your Application?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Our admission counselors are here to help you through every step of the process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-primary-100">+977-1-4782945</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-primary-100">admissions@newsummit.edu.np</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p className="text-primary-100">Shantinagar Gate, New Baneshwor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;