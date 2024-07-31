import AboutCard from "../_components/aboutCard";
import Menu from "../_components/menu";

const AboutPage = () => {
  return (
    <div className="scrollbar-hidden flex h-[100vh] w-[100vw] flex-col justify-between overflow-auto bg-[url('./_assets/colorfull.jpg')] bg-cover bg-center">
      <AboutCard />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="about" />
      </div>
    </div>
  );
};

export default AboutPage;
