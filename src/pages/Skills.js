import AnimatedText from "../components/AnimatedText";
import SkillProgress from "../components/SkillProgress";

function Skills() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#afeb8f] min-h-screen p-4 lg:p-8">
      <h2 className="text-[#002f7b] text-[40px] sm:text-[50px] lg:text-[70px] mb-6 lg:mr-5 mt-[10px]  pt-[40px]">
        <AnimatedText type="easeOut" text="Skills & Proficiencies" />
      </h2>
      <section className="flex flex-col space-y-4 lg:space-y-8 w-full lg:w-auto">
        <SkillProgress text="Programming Skills" no="95" />
        <SkillProgress text="Teamwork" no="100" />
        <SkillProgress text="Communication Skills" no="100" />
        <SkillProgress text="Problem Solving" no="80" />
      </section>
    </div>
  );
}

export default Skills;
