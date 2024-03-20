import style from "./page1.module.css";
const Page1 = () => {
  return (
    <div className={style.container}>
      <div className={`${style.block} bg-primary text-light`}>Primary</div>
      <div className={`${style.block} bg-secondary text-success`}>
        Secondary
      </div>
      <div className={`${style.block} bg-tertiary text-light`}>Tertiary</div>
      <div className={`${style.block} bg-dark text-light`}>Dark</div>
      <div className={`${style.block} bg-light `}>Light</div>
      <div className={`${style.block} bg-blue-light`}>Blue Light</div>
      <div className={`${style.block} bg-accent text-light`}>Accent</div>
      <div className={`${style.block} bg-danger text-light`}>Danger</div>
      <div className={`${style.block} bg-success text-light`}>Success</div>
      <div className={`${style.block} bg-warning`}>Warning</div>
      <div className={`${style.block} bg-sun`}>Sun</div>
    </div>
  );
};

export default Page1;
