import AnimatedText from "../components/AnimatedText";
import ExperienceCard from "../components/ExperienceCard";

function Experience() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#002f7b] text-4xl sm:text-[70px] ml-4 sm:ml-[50px] mt-4 mb-3 sm:mt-[10px] pt-6 sm:pt-[40px]">
        <AnimatedText type="easeOut" text="Experience & Education" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 content-end p-4 sm:p-[70px]">
        <ExperienceCard title="2020 - 2024" text="BACHELOR OF COMPUTER SCIENCE" delay="1" />
        <ExperienceCard title="2020" text="BUILT MY FIRST UNITY GAME" delay="2" />
        <ExperienceCard title="2021" text="BUILT MY FIRST UNREAL ENGINE GAME" delay="3" />
        <ExperienceCard title="2021" text="BUILT MY FIRST HTML-CSS-JS WEBSITE" delay="4" />
        <ExperienceCard title="2022" text="BUILT MY FIRST REACT NATIVE APP" delay="5" />
        <ExperienceCard title="Jan2024 - Jul2024" text="BUILT MY GP APP & MODELS" delay="6" />
        <ExperienceCard title="Aug 2024" text="STARTED WORKING @ NI as a SOFTWARE DEVELOPER" delay="7" />
      </div>
    </div>
  );
}

export default Experience;
