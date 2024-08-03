import AboutProjects from "../_components/aboutProjects";
import Menu from "../_components/menu";

const ProjectsPage = () => {
  return (
    <div className="scrollbar-hidden flex h-[100vh] w-[100vw] flex-col justify-between overflow-auto bg-[url('./_assets/colorfull.jpg')] bg-cover bg-center">
      <AboutProjects />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="projects" />
      </div>
    </div>
  );
};

export default ProjectsPage;
