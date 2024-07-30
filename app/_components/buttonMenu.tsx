import { Button } from "./ui/button";
interface ButtonProps {
  children: React.ReactNode;
  color: string;
}
const ButtonMenu = ({ children, color }: ButtonProps) => {
  return (
    <>
      <Button
        className={`h-12 w-12 rounded-lg border border-[#e2e2e2] bg-white p-0 text-black hover:bg-[${color}]`}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonMenu;
