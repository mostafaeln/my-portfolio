import AnimatedText from "./AnimatedText";
import ProgressBar from 'react-bootstrap/ProgressBar';

function SkillProgress(props) {
  return (
    <div className="w-full max-w-md mx-auto pt-12">
      <h6 className="text-[#002f7b] text-2xl sm:text-3xl">
        <AnimatedText type="easeInOut" text={props.text} />
      </h6>
      <div className="pt-8">
        <ProgressBar style={{ width: '100%', height: '30px' }}>
          <ProgressBar 
            striped
            animated
            variant="success"
            now={props.no} 
            key={1} 
          />
        </ProgressBar>
      </div>
    </div>
  );
}

export default SkillProgress;
