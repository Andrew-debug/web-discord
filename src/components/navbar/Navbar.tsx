import ChannelsList from "./ChannelsList";
import { ThemeToggle } from "./ThemeToggle";
import AuthButton from "../AuthButton";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between min-w-[72px] w-[72px] h-screen bg-dark-700">
      <ChannelsList />
      <div>
        <ThemeToggle />
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
