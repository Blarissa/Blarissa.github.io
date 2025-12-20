import type { Project } from "../data/curriculo.data";

function ProjectCard({ title, projects }: { title: string; projects: Project[] }) { 
  return (
    <div className="w-full mx-auto px-[100px] py-8 bg-white">
      <h2 className="section-title">{title}</h2>
      <div className="bg-white w-full max-w-none mx-auto grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-[var(--primary-100)] rounded-xl shadow-sm hover:bg-[var(--primary-100)] transition-colors duration-300 flex flex-col justify-center hover:shadow-md"
          >
            <a href={project.link} target="_blank">
              <div className="grid grid-cols-[1fr_auto] gap-8 p-4">
                <div className="grid grid-rows-[auto_auto_auto] gap-2">
                  <h3 className="text-lg text-[var(--primary-700)] mb-2 font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--gray-600)] mb-2">
                    {project.description}
                  </p>
                  <ul className="text-sm text-[var(--gray-600)]">
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
                    className="w-[80px] h-[80px] rounded-full shadow-md"
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
