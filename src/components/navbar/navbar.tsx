import "./navbar.style.css";
export interface NavbarProps {
  children: any;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return <div className="container">Navbar={children}</div>;
};

export default Navbar;
