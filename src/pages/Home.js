import AnimatedText from '../components/AnimatedText';
import CButton from '../components/Button';
import styles from './Home.module.css';
import Lottie from 'lottie-react';
import AnimationData from './Office_Animation.json';
import React, { useRef } from 'react';

function Home() {
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-[#002f7b] min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-[#afeb8f] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-center mt-10">
        <AnimatedText type='easeOut' text="Hi There!" />
      </h1>
      <section className="flex flex-col lg:flex-row items-center mt-10 ">
        <div className='text-center lg:text-left'>
          <h2 className="text-[#afeb8f] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] w-full  mt-10">
            <AnimatedText type='easeIn' text="I'm Mostafa Elnahass" />
          </h2>
          <div className="bg-white text-[#002f7b] text-[14px] sm:text-[16px] md:text-[18px] font-bold p-4 sm:p-6 md:p-8 rounded-lg mt-6 lg:mt-10">
            <p className={styles.developertext}>
              <AnimatedText type='easeInOut' text="Game & Frontend Developer" />
            </p>
          </div>
        </div>
        <Lottie className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto rounded-lg mt-10 lg:mt-0 lg:ml-20" animationData={AnimationData} />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-4  sm:flex-row justify-center sm:justify-around items-center w-full mt-10  mb-10  gap-4 sm:gap-6">
  <CButton to="/Experience" ref={experienceRef} duration="1" className=" sm:w-auto">
    Experience
  </CButton>
  <CButton to="/projects" duration="2" className=" sm:w-auto">
    Projects
  </CButton>
  <CButton to="/Skills" duration="3" className="sm:w-auto">
    Skills
  </CButton>
  <CButton to="/Contact" duration="4" className="sm:w-auto">
    Contact
  </CButton>
</section>

    </div>
  );
}

export default Home;
