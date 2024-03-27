import "./footer.style.css";
export interface FooterProps {
  children: any;
}
const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div className="footer-container">Footer {children}</div>;
};

export default Footer;
