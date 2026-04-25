const ProjectDetails = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      <div className="bg-black/80 border border-purple-500/20 shadow-xl shadow-indigo-900/30 rounded-xl max-w-4xl w-full p-4 md:p-6 relative flex flex-col md:flex-row gap-4 md:gap-6 max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10
          flex items-center justify-center text-white text-xl 
          bg-gray-800/80 w-8 h-8 rounded-full 
          hover:bg-red-500 hover:scale-110 
          transition duration-200"
        >
          ✕
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 md:h-auto md:max-h-[70vh] object-contain bg-white/5 rounded-lg"
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden">
          {/* Title */}
          <h2 className="text-lg md:text-2xl font-bold mb-2 shrink-0 md:pr-8">{project.title}</h2>

          {/* Main Description */}
          <p className="text-xs md:text-sm text-neutral-400 mb-2 leading-snug shrink-0">{project.description}</p>

          {/* Sub Description Points */}
          <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm text-neutral-400 mb-3 overflow-hidden">
            {project.subDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Tech Stack Logos */}
          <div className="flex flex-wrap gap-3 mb-3 shrink-0 animate-pop">
            {project.tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="w-6 h-6 md:w-8 md:h-8 flex"
              />
            ))}
            
          </div>

          {/* github and live links */}
          <div className="flex gap-3 mt-auto shrink-0">
            {/* GitHub Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevents modal trigger
                if (project.github) {
                  window.open(project.github, "_blank");
                }
              }}
              className="flex-1 px-3 py-1.5 md:py-2 text-xs md:text-sm bg-neutral-800 rounded hover:bg-neutral-700 cursor-pointer hover:scale-[1.05] transition duration-200"
            >
              GitHub
            </button>

            {/* Live Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (project.live) {
                  window.open(project.live, "_blank");
                }
              }}
              className="flex-1 px-3 py-1.5 md:py-2 text-xs md:text-sm bg-indigo-600 rounded hover:bg-indigo-500 cursor-pointer hover:scale-[1.05] transition duration-200"
            >
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
