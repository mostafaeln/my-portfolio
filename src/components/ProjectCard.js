import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import "./ProjectsCard.css"
const FlipCard = ({ imageUrl, name, description ,video }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="car-card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
      >
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src={imageUrl}
            alt={name}
            className="rounded-full w-60 h-60 object-cover"
          />
        </div>
        {/* Back side */}
        <div className="card-back" onClick={handleClick}>
          <h2 className="font-bold text-4xl text-center pt-[20px] pb-[10px] pl-[5px] pr-[5px]">{name}</h2>
          <p className="p-[10px]">{description}</p>
          <button size="small" className="text-[#002f7b] p-[10px]" onClick={() => handleVideoClick(video)}  >Watch Video</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
// import React , {useState} from 'react';
// import { motion } from 'framer-motion';
// import AnimatedText from './AnimatedText';
// function ProjectCard({ video, title, Year, Desc , Delay }) {
//     const [descshown , isdescshown] = useState(false);
//     function buttonclicked() {
//         if(descshown == false) {
//             isdescshown(true);
//         }
//         else {
//             isdescshown(false);
//         }
//     }
//   return (
//     <motion.div
//       className="flex flex-row p-4"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5  ,ease:'easeInOut', delay : Delay || 0}}
//     >
//       <div className="flex flex-col w-1/2 pr-4 items-center">
//         <div className="relative overflow-hidden w-full h-72 p-[30px]" style={{ paddingTop: '56.25%' }}>
//           <video className="absolute top-0 left-0 w-full h-full rounded-lg" controls>
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <h6 className="text-[#002f7b] mt-2 text-center font-bold text-xl">{title}</h6>
//         <h6 className="text-[#002f7b] text-center font-bold text-xl">{Year}</h6>
//       </div>
//       { descshown ? 
//       <div className="flex flex-col w-1/2 pl-4">
//         <h6 className="text-[#002f7b]  font-bold ml-[30px] mt-[30px] text-4xl"> <AnimatedText text="Description: " type="easeOut" delay="0.5" /></h6>
//         <h6 className="text-[#002f7b] whitespace-pre-line p-[30px]"> <AnimatedText text={Desc} type="easeIn" delay="1" /></h6>
//       </div> : 
//        <div className="flex flex-col w-1/2 pl-4 items-center">
//        <button className='bg-[#afeb8f] text-[#002f7b] w-[30%] h-[10%] mt-[100px] font-bold text-center ' onClick={buttonclicked}> Show Description </button>
//      </div>

// }
//     </motion.div>
//   );
// }

// export default ProjectCard;
