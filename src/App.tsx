import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import larissa_welcome from "./assets/images/larissa_welcome.png";
import larissa_about from "./assets/images/larissa_about.png";
import { curriculoLarissa } from "./data/curriculo.data";
import ProjectCard from "./components/ProjectCard.tsx";

function App() {
  return (
    <>
      <Header />
      <body>
        <div
          id="home"
          className="w-full h-screen bg-[var(--primary-100)] px-[100px] flex justify-center"
        >
          <div className="grid grid-cols-[61%_auto] items-center  gap-16 w-fit">
            <h1 className="w-fit sm:text-5xl md:text-6xl text-left text-[var(--primary-600)] px-0">
              hi, i’m <br></br> larissa brasil!
            </h1>
            <img
              src={larissa_welcome}
              alt="Larissa Brasil"
              className="w-[300px] sm:w-[400px] h-auto mx-auto align-left"
            ></img>
          </div>
        </div>

        <div id="about" className="px-[100px] py-8">
          <h2 className="section-title">about me</h2>
          <div className="grid grid-cols-[40%_auto] gap-4 w-full items-center">
            <img
              src={larissa_about}
              alt="Larissa Brasil"
              className="h-auto mx-auto align-left"
            ></img>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              {curriculoLarissa.about.map((text, index) => (
                <p
                  key={index}
                  className="mb-4 text-[var(--gray-600)] leading-relaxed text-center"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div id="projects">
            <ProjectCard
              title="projects"
              projects={curriculoLarissa.projects}
            />
        </div>

        <div id="technologies" className="px-[100px] py-8">
          <h2 className="section-title">technologies</h2>
          <div className="flex flex-wrap w-full items-center justify-center">
              {curriculoLarissa.technical_skills.map((skill, index) => (
                <img key={index} src={`/src/assets/images/icons/${skill.icon}`} alt={skill.technology} className="inline-block m-2 w-25 h-25" />
              ))}
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default App;
