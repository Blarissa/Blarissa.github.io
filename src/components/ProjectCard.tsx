import type { Project } from "../data/curriculo.data";

function ProjectCard({ title, projects }: { title: string; projects: Project[] }) { 
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="w-full max-w-none mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6">
                <div className="grid grid-rows-[auto_auto_auto] gap-2">
                  <h3 className="text-base sm:text-lg text-[var(--primary-700)] mb-2 font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--gray-600)] mb-2">
                    {project.description}
                  </p>
                  <ul className="text-xs sm:text-sm text-[var(--gray-600)]">
                    {project.technologies.map((technology, index) => (
                      <li key={index} className="inline">
                        {technology}
                        {index < project.technologies.length - 1 && ","}{" "}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={`/src/assets/images/icons/${project.icon}`}
                    alt={project.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md"
                  ></img>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
