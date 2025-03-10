import HomeCard from "./_components/homeCard";
import Menu from "./_components/menu";

export default function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-between overflow-hidden bg-[url('./_assets/colorfull.jpg')] bg-cover bg-center">
      <HomeCard />
      <div className="mb-4 flex items-center justify-center">
        <Menu selected="home" />
      </div>
    </div>
  );
}
