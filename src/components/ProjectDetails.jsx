const ProjectDetails = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ">
      <div className="bg-neutral-900 rounded-xl max-w-2xl w-full p-6 relative max-h-[80vh] md:max-h-none overflow-y-auto  ">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="fixed top-4 right-4 
  md:absolute md:top-4 md:right-4
  text-white text-xl 
  bg-gray-600 w-8 h-8 rounded-full 
  hover:bg-red-400 hover:scale-110 
  transition duration-200"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

        {/* Main Description */}
        <p className="text-neutral-400 mb-4">{project.description}</p>

        {/* Sub Description Points */}
        <ul className="list-disc pl-5 space-y-2 text-neutral-400 mb-4">
          {project.subDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Tech Stack Logos */}
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tags.map((tag) => (
            <img
              key={tag.id}
              src={tag.path}
              alt={tag.name}
              className="w-8 h-8"
            />
          ))}
        </div>

        {/* github and live links */}
        <div className="flex gap-4">
          {/* GitHub Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevents modal trigger
              if (project.href) {
                window.open(project.href, "_blank");
              }
            }}
            className="flex-1 px-3 py-2 text-sm bg-neutral-800 rounded hover:bg-neutral-700"
          >
            GitHub
          </button>

          {/* Live Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (project.href) {
                window.open(project.href, "_blank");
              }
            }}
            className="flex-1 px-3 py-2 text-sm bg-indigo-600 rounded hover:bg-indigo-500"
          >
            Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
