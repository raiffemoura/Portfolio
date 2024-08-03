import { Card } from "./ui/card";
interface SkillsBoxProps {
  color?: string;
  text?: string;
}
const SkillsBox = ({ color, text }: SkillsBoxProps = {}) => {
  return (
    <>
      <div>
        <Card
          style={{ backgroundColor: color }}
          className="flex h-fit w-fit items-center justify-center rounded-lg border-none px-2 py-1 text-sm text-black"
        >
          <h1>{text}</h1>
        </Card>
      </div>
    </>
  );
};

export default SkillsBox;
