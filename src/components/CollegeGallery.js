import React from 'react';

const CollegeGallery = () => {
  const galleryImages = [
    {
      title: 'Campus Building',
      description: 'Modern infrastructure at New Summit College',
      icon: '🏢',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Computer Lab',
      description: 'State-of-the-art computer laboratory',
      icon: '💻',
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: 'Library',
      description: 'Well-equipped library with extensive resources',
      icon: '📚',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Classroom',
      description: 'Modern classrooms with latest teaching aids',
      icon: '🎓',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Students',
      description: 'Diverse student community',
      icon: '👥',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Events',
      description: 'Regular academic and cultural events',
      icon: '🎉',
      gradient: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12 animate-on-scroll" id="gallery-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Campus <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern campus facilities and vibrant student life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg card-hover animate-on-scroll"
              id={`gallery-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-64 bg-gradient-to-br ${image.gradient} flex items-center justify-center relative`}>
                <div className="text-6xl text-white/80 group-hover:scale-110 transition-transform duration-300">
                  {image.icon}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2 font-heading">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;