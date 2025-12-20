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
          className="w-full min-h-screen bg-[var(--primary-100)] section-padding-x flex justify-center items-center py-20 md:py-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-[60%_auto] items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
            <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left text-[var(--primary-600)] order-2 md:order-1">
              hi, i'm <br></br> larissa brasil!
            </h1>
            <img
              src={larissa_welcome}
              alt="Larissa Brasil"
              className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto mx-auto order-1 md:order-2"
            ></img>
          </div>
        </div>

        <div id="about" className="section-padding">
          <h2 className="section-title">about me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[40%_auto] gap-6 md:gap-8 w-full items-center">
            <img
              src={larissa_about}
              alt="Larissa Brasil"
              className="h-auto w-full max-w-sm mx-auto"
            ></img>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-[3rem]">
              {curriculoLarissa.about.map((text, index) => (
                <p
                  key={index}
                  className="mb-4 body-text text-center md:text-justify"
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

        <div id="technologies" className="section-padding">
          <h2 className="section-title">technologies</h2>
          <div className="flex flex-wrap w-full items-center justify-center gap-2 sm:gap-4">
              {curriculoLarissa.technical_skills.map((skill, index) => (
                <img key={index} src={skill.icon} alt={skill.technology} className="icon-img" />
              ))}
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default App;
