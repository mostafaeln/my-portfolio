import AnimatedText from "./AnimatedText";
import { motion } from 'framer-motion';

function FormRow(props) {
  return (
    <motion.div
      className="flex flex-col p-6 md:p-8 lg:p-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: props.delay || 0 }}
    >
      <p className="text-2xl sm:text-3xl md:text-4xl text-[#afeb8f] font-bold text-center mb-4">
        <AnimatedText text={props.title} type="easeIn" delay="3.25" />
      </p>
      <div className="bg-[#afeb8f] w-full max-w-md text-lg sm:text-xl font-bold p-4 rounded-lg mx-auto">
        <p className="text-[#002f7b] text-lg sm:text-xl md:text-2xl text-center">
          <AnimatedText text={props.details} type="easeIn" delay="4" />
        </p>
      </div>
    </motion.div>
  );
}

export default FormRow;
