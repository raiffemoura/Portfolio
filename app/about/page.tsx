import AboutCard from "../_components/aboutCard";
import Menu from "../_components/menu";

const AboutPage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-between overflow-hidden bg-[url('./_assets/colorfull.jpg')] bg-cover bg-center max-md:h-fit max-md:pb-20">
      <AboutCard />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="about" />
      </div>
    </div>
  );
};

export default AboutPage;
