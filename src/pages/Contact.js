import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'Address',
      details: ['Shantinagar Gate, Tinkune', 'New Baneshwor, Kathmandu, Nepal'],
      icon: '📍'
    },
    {
      title: 'Phone',
      details: ['+977-1-4620522', '+977-1-4620523', '+977-1-4620524'],
      icon: '📞'
    },
    {
      title: 'Email',
      details: ['info@newsummit.edu.np', 'admissions@newsummit.edu.np'],
      icon: '✉️'
    },
    {
      title: 'Office Hours',
      details: ['Sunday - Friday: 7:00 AM - 5:00 PM', 'Saturday: 7:00 AM - 3:00 PM'],
      icon: '🕒'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+977-1-4620522',
      email: 'admissions@newsummit.edu.np',
      description: 'For admission inquiries and application support'
    },
    {
      name: 'Academic Office',
      phone: '+977-1-4620523',
      email: 'academic@newsummit.edu.np',
      description: 'For academic programs and curriculum information'
    },
    {
      name: 'Student Services',
      phone: '+977-1-4620524',
      email: 'students@newsummit.edu.np',
      description: 'For student support and campus services'
    },
    {
      name: 'Finance Office',
      phone: '+977-1-4620522',
      email: 'finance@newsummit.edu.np',
      description: 'For fee payment and financial assistance'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get in touch with us for any inquiries about admissions, programs, 
            or general information about New Summit College.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter message subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Interactive Map</p>
                  <p className="text-sm">Shantinagar Gate, Tinkune, New Baneshwor, Kathmandu</p>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">How to Reach Us</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    5 minutes walk from New Baneshwor Bus Stop
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Near Shantinagar Gate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Accessible by public transport
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Parking available on campus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact specific departments for specialized assistance and information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="text-primary-500 mr-2">📞</span>
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-primary-500 mr-2">✉️</span>
                    <span>{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about New Summit College.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are the admission requirements?</h3>
              <p className="text-gray-600">
                Minimum 2.0 GPA in +2 or equivalent, pass the entrance examination, 
                and submit required documents including academic transcripts and character certificate.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">When does the academic year start?</h3>
              <p className="text-gray-600">
                The academic year typically starts in August. Application deadlines are usually in June.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Are scholarships available?</h3>
              <p className="text-gray-600">
                Yes, we offer merit-based scholarships and financial assistance programs for deserving students.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What facilities are available on campus?</h3>
              <p className="text-gray-600">
                Modern computer labs, library, auditorium, cafeteria, sports facilities, and parking areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;