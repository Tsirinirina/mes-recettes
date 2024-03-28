import "./link.style2.css";
interface LinkProps {
  children: any;
}
const Link: React.FC<LinkProps> = ({ children }) => {
  return (
    <a href="#" className="menu__link">
      {children}
    </a>
  );
};

export default Link;
