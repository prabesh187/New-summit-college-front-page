import React from 'react';

const ImagePlaceholder = ({ 
  width = 400, 
  height = 300, 
  text = 'Image', 
  className = '',
  bgColor = 'bg-gradient-to-br from-primary-100 to-primary-200',
  textColor = 'text-primary-600'
}) => {
  return (
    <div 
      className={`${bgColor} ${textColor} ${className} flex items-center justify-center rounded-lg`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">🏫</div>
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;