import React from "react";
import { motion } from "framer-motion";
import FlipCard from "./ProjectCard";
import SS from "../videos/SimpleShooter.mp4";
import EFF from "../videos/EscapeFromFcis.mp4";
import IHear from "../videos/I-Hear.mp4";
import IH from "../imgs/i_hear.png";
import SSS from "../imgs/SpaceShooter.jpg";
import FR from "../imgs/EscapeFromFcis.jpg";
import "./ProjectsCard.css";
import RR from "../imgs/RollerMadness.png"
import RRV from "../videos/RollerMadness.mp4";


const projects = [
  {
    image: IH,
    title: "I-Hear",
    desc: "The I-Hear project aims to develop a mobile application that leverages AI and smartphone technology to convert environmental sounds into visual alerts, enhancing sound recognition capabilities for deaf individuals.",
    video: IHear,
  },
  {
    image: SSS,
    title: "Space Shooter",
    desc: "Space Shooter is a Small 3RD Person Action Shooter Game that is built on Unreal Engine 4. The Game is set in Space and follows John who is trying to uncover an Evil Scheme made by Aliens but in order to do so he has to look like them.",
    video: SS,
  },
  {
    image: FR,
    title: "Escape From FCIS",
    desc: "Escape From FCIS is an Infinite Runner game that follows the student AJ who is trying to escape all his college duties and trying to collect money and bonus marks to pass but watch out for the doctor , he is running after you and attacking you with books.",
    video: EFF,
  },
  ,
  {
    image: RR,
    title: "Roller Madness",
    desc: "Roller Madness is a 3d game in which you play as a ball trying to collect coins on a platform but watch out for the boxes trying to attack you",
    video: RRV,
  }
];

function ProjectsCard() {
  return (
    <div className="app">
      <div className="bg-[#002f7b] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 content-end pb-10 px-4 sm:px-6 lg:px-[70px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 1.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <FlipCard
              imageUrl={project.image}
              name={project.title}
              description={project.desc}
              video={project.video}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCard;
