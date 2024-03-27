import "./footer.style.css";
export interface FooterProps {
  children: any;
}
const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div className="container">Footer {children}</div>;
};

export default Footer;
