
import IH from "../imgs/IHear.png"
import SSS from "../imgs/SpaceShooter.png"
import FR from "../imgs/EscapeFromFcis.PNG"

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; // Adjust the path as needed
import SS from "../videos/SimpleShooter.mp4"
import EFF from "../videos/EscapeFromFcis.mp4"
import RM from "../videos/RollerMadness.mp4"
import IHear from '../videos/I-Hear.mp4'
const projects = [
  {
    image: IH, // Replace with actual path or URL
    title: 'I-Hear',
    desc: 'The I-Hear project aims to develop a mobile application that leverages AI and smartphone technology to convert environmental sounds into visual alerts, enhancing sound recognition capabilities for deaf individuals. The app uses deep learning algorithms to analyze audio signals in real-time, classifying them into distinct categories and converting them into visual notifications on the user\'s smartphone.',
    video: IHear
  },
  {
    image: SSS, // Replace with actual path or URL
    title: 'Space Shooter',
    desc: 'Space Shooter is a small 3rd person Action Shooter game that is built on Unreal Engine 4. The game is set in space and follows John who is trying to uncover an evil scheme made by aliens but in order to do so he has to look like them . Will he be able to achieve his goal ?  ',
    video: SS
  },
  {
    image: FR, // Replace with actual path or URL
    title: 'Escape From FCIS',
    desc: 'Escape From FCIS is an Infinite Runner game that follows the student AJ who is trying to escape all his college duties and trying to collect money and bonus marks to pass but watch out for the doctor , he is running after you and attacking you with books. Can AJ survive ?',
    video: EFF
  }
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="w-full ">
      <Carousel activeIndex={index} onSelect={handleSelect} className="w-full h-full">
        {projects.map((project, idx) => (
          <Carousel.Item key={idx} className="h-full">
            <div className="w-full h-full" onClick={() => handleVideoClick(project.video)}>
              <ExampleCarouselImage text={project.title} image={project.image} />
            </div>
            <Carousel.Caption className="bg-black bg-opacity-50 p-4 rounded">
              <h3 className="font-bold text-3xl p-[10px]">{project.title}</h3>
              <p>{project.desc}</p>
              <button size="small" className="text-[#afeb8f]" onClick={() => handleVideoClick(project.video)}>Watch Video</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;



















// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './ProjectCarousel.css'; // Import custom CSS for styling

// const ProjectCarousel = ({ projects }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   const handleVideoClick = (videoUrl) => {
//     console.log(videoUrl)
//     window.open(videoUrl, '_blank');
//   };

//   return (
//     <div className="project-carousel ">
//       <Slider {...settings}>
//         {projects.map((project, index) => (
//           <div key={index} className="relative group">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-64 object-cover cursor-pointer"
             
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
//               <h3 className="text-xl font-bold">{project.title}</h3>
//               <p className="text-sm mt-2">{project.desc}</p>
//               <div className="flex justify-center">
//               <button size="small" className="text-white-500"  onClick={() => handleVideoClick(project.video)}>Watch Video</button>  
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ProjectCarousel;
