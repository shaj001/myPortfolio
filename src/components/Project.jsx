import React, { useState } from "react";
import { myProjects } from "../constants/myData.js"; 
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetails from "./ProjectDetails.jsx";

const Projects = () => {
  // controls show more button
  const [showAll, setShowAll] = useState(false);

  // stores selected project for modal
  const [selectedProject, setSelectedProject] = useState(null);

  // show only first 4 unless showAll is true
  const visibleProjects = showAll
    ? myProjects
    : myProjects.slice(0, 3);

  return (
    <section className="py-20">

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}

      </div>

      {/* Show More Button */}
      {myProjects.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs px-6 py-2 border border-purple-500/20 shadow-xl shadow-indigo-900/30 rounded-2xl hover:bg-indigo-900 hover:text-white transition"
          >
            {showAll ? "Show Less" : "More Projects"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;