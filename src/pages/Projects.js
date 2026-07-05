
import AnimatedText from "../components/AnimatedText";
import ProjectsCard from "../components/ProjectsCard.js";

function Projects(){
  
return(
    <div className = "flex flex-col bg-[#002f7b] h-screen">
    <h2 className="text-[#afeb8f] text-[70px]  ml-[45px] mt-[10px] p -[50px]"><AnimatedText delay="0.5" type="easeOut" text="My Projects"/></h2>
    <h6 className="text-[#afeb8f] text-[30px]  ml-[50px] mt-[10px] p -[50px]"><AnimatedText delay="1" type="easeOut" text="Here's What I Have Done"/></h6>   
    <section className=" bg-[#002f7b] h-auto" >
        <ProjectsCard/>
    </section>
  
   
    </div>
);
}
export default Projects;