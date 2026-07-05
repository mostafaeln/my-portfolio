import React from 'react';

const ExampleCarouselImage = ({ text, image }) => {
  return (
    <div className="relative group w-full h-full flex justify-center items-center">
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover"
        style={{ maxWidth: '1000px', maxHeight: '500px' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
        <h3 className="text-xl font-bold">{text}</h3>
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
