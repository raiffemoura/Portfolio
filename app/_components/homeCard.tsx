import { Button } from "./ui/button";
import { Card } from "./ui/card";

const HomeCard = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="flex h-52 w-[30rem] flex-col items-center justify-between rounded-3xl border-none bg-[#000000] bg-opacity-30 py-4 text-white">
        <div className="flex w-full flex-row items-center justify-center text-3xl">
          <h1>Hey, I&apos;m </h1>
          <Button className="pointer-events-none ml-1 bg-[#b18bf7] px-2 text-3xl text-white hover:bg-[#b18bf7]">
            Raiffe
          </Button>
        </div>
        <div className="flex w-full flex-row items-center justify-center text-3xl">
          <h1>I&apos;m a </h1>
          <Button className="pointer-events-none ml-1 bg-[#fab676] px-2 text-3xl text-white hover:bg-[#fab676]">
            full-stack developer,
          </Button>
        </div>
        <div className="flex w-full flex-row items-center justify-center text-3xl">
          <h1>here to turn ideas into </h1>
          <Button className="pointer-events-none ml-1 bg-[#94e69e] px-2 text-3xl text-white hover:bg-[#94e69e]">
            reality.
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HomeCard;
