import "./loader.style.css";
interface LoaderProps {}
const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="leap-frog">
      <div className="leap-frog__dot"></div>
      <div className="leap-frog__dot"></div>
      <div className="leap-frog__dot"></div>
    </div>
  );
};

export default Loader;
