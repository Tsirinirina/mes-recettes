import Link from "next/link";
import "./navbar.style.css";
import { Button } from "../button/button";
import Burger from "../burger/burger";
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const handleCollapsed = () => {
    console.log("Collapsed button");
  };
  return (
    <nav className="navbar-container">
      <div className="navbar-logo pacifico w-9">Logo</div>
      <div className="navbar-link">
        <div className="navbar-item ">
          <Link href={"/"}>Accueil</Link>
        </div>
        <div className="navbar-item">
          <Link href={"page1"}>Page 1</Link>
        </div>
        <div className="navbar-item ">
          <Link href={"page2"}>Page 2</Link>
        </div>
        <div className="navbar-item">
          <Link href={"page3"}>Page 3</Link>
        </div>
        <div className="navbar-item">
          <Link href={"fonts"}>Fonts</Link>
        </div>
      </div>
      <div className="navbar-button">
        <Button variant="primary" size="sm">
          Se connecter
        </Button>
        <Button variant="secondary" size="sm">
          Déconnexion
        </Button>
      </div>
      <div className="navbar-collapse">
        <Burger handleClick={handleCollapsed} />
      </div>
    </nav>
  );
};

export default Navbar;
