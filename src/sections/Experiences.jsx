import { Timeline } from "../components/Timeline.jsx";
import { experiences } from "../constants/myData.js";
const Experiences = () => {
  return (
    <div className="w-full" id="experience">
      <div className="mt-5 mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1.5px] w-full" />
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
