import AnimatedText from "../components/AnimatedText";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    title: "2024",
    text: "GOT MY BACHELOR OF COMPUTER SCIENCE",
  },
  {
    title: "2020",
    text: "BUILT MY FIRST UNITY GAME",
  },
  {
    title: "2021",
    text: "BUILT MY FIRST UNREAL ENGINE GAME",
  },
  {
    title: "2021",
    text: "BUILT MY FIRST HTML-CSS-JS WEBSITE",
  },
  {
    title: "2022",
    text: "BUILT MY FIRST REACT NATIVE APP",
  },
  {
    title: "Jan 2024 - Jul 2024",
    text: "BUILT MY GP APP & MODELS",
  },
  {
    title: "Aug 2024",
    text: "STARTED WORKING AT NI AS A SOFTWARE (BASE24 / SWITCH) DEVELOPER",
  },
  {
    title: "Mar 2025",
    text: "GOT CHOSEN AS ONE OF THE TOP EMPLOYEES FOR OUTSTANDING PERFORMANCE IN Q1",
  },
  {
    title: "Sept 2025",
    text: "STARTED WORKING @ SUMERGE AS AN INTEGRATION ENGINEER",
  },
  {
    title: "May 2026",
    text : "GOT CHOSEN AS ONE OF THE MOST COMPLIANT EMPLOYEES IN Q1",
  }
];

function Experience() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#002f7b] text-4xl sm:text-[70px] ml-4 sm:ml-[50px] mt-4 mb-3 sm:mt-[10px] pt-6 sm:pt-[40px]">
        <AnimatedText type="easeOut" text="Experience & Education" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 content-end p-4 sm:p-[70px]">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.title}-${index}`}
            title={experience.title}
            text={experience.text}
            delay={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;