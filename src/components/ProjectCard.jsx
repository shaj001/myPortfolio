const ProjectCard = ({ project, onOpen }) => {
  return (
    <div
      onClick={onOpen} // clicking anywhere opens modal
      className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition duration-300 flex flex-col"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col flex-grow">

        {/* Project Title */}
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        {/* Description (fixed height + fade) */}
        <div className="relative mb-4 h-[72px] overflow-hidden">
          <p className="text-neutral-400 text-sm leading-6">
            {project.description}
          </p>

          {/* Fade effect */}
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-neutral-900 to-transparent" />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag.id}
              className="text-xs px-3 py-1 bg-neutral-800 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Buttons Row */}
        <div className="flex justify-between gap-3 mt-auto">

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

        {/* Read More */}
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="text-sm underline mt-3 text-center cursor-pointer hover:text-indigo-500 transition duration-200 "
        >
          Read More
        </button>
      
      </div>
    </div>
  );
};

export default ProjectCard;