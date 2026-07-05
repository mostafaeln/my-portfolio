import { motion } from 'framer-motion';
import AnimatedText from "./AnimatedText";

function ExperienceCard(props) {
  return (
    <motion.div
      className="justify-items-start w-64 h-auto bg-[#002f7b] rounded-lg flex-col p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100  , delay : props.delay || 0 }}
    >
      <p className="text-3xl p-[30px] text-white font-bold ml-[-10px]">
        <AnimatedText text={props.title} type="easeOut" delay="0.5" />
      </p>
      <p className="text-2xl text-[#afeb8f] w-[90%] ml-[20px] mb-[5px] font-bold">
        <AnimatedText text={props.text} type="easeOut" delay="1" />
      </p>
    </motion.div>
  );
}

export default ExperienceCard;
