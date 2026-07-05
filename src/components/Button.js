import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };
  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' });
  // };


  return (
    <motion.button
      onClick={handleClick}
      className="bg-[#afeb8f] text-[#002f7b] font-bold py-2 px-4 w-full sm:w-auto rounded-lg shadow-md hover:bg-[#9fd67e] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9fd67e] focus:ring-opacity-50 p-[30px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' , delay :props.duration||0 }}
    >
      {props.children}
    </motion.button>
  );
}

export default CButton;
