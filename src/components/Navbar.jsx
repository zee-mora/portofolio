import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="mb-29 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Logo className="mx-2"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <FaGithub className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaFacebook className="text-2xl" />
        <FaInstagram className="text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;