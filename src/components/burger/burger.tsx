"use client";
import "./burger.style.css";
import IconThreeDot from "../icons/iconThreeDot";

interface BurgerProps {
  handleClick: any;
}
const Burger: React.FC<BurgerProps> = ({ handleClick }) => {
  return (
    <button onClick={() => handleClick()}>
      <IconThreeDot />
    </button>
  );
};

export default Burger;
