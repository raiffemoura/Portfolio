import HomeCard from "../_components/homeCard";
import Menu from "../_components/menu";

const ProjectsPage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-between bg-[url('./_assets/fundo-preto.jpg')] bg-cover bg-center">
      <HomeCard />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="projects" />
      </div>
    </div>
  );
};

export default ProjectsPage;