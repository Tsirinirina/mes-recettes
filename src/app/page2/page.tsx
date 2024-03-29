import style from "./page2.module.css";

const Page2 = () => {
  return (
    <div className={style.container}>
      <div className={``}>
        <div className={`dg col-2 gap-2`}>
          <div className={`${style.block} bg-primary text-light`}>Primary</div>
          <div className={`${style.block} bg-secondary text-success`}>
            Secondary
          </div>
        </div>

        <div className={`df j-around p-4 border-dark-1 b-radius-sm m-2`}>
          <div className={`${style.block} bg-tertiary text-light b-radius-md`}>
            Tertiary
          </div>
          <div className={`${style.block} bg-dark text-light`}>Dark</div>
          <div className={`${style.block} bg-light `}>Light</div>
        </div>

        <div className={`dg col-2 gap-2 border-dark-1 pb-2 pt-3`}>
          <div className={`${style.block} bg-blue-light pl-2 `}>Blue Light</div>
          <div
            className={`${style.block} bg-accent text-light b-radius-sm pl-2 pr-2`}
          >
            Accent
          </div>
          <div className={`${style.block} bg-danger text-light mr-2`}>
            Danger
          </div>
          <div className={`${style.block} bg-success text-light mr-3`}>
            Success
          </div>
          <div className={`${style.block} bg-warning`}>Warning</div>
          <div className={`${style.block} bg-sun`}>Sun</div>
        </div>
        <div className={`${style.container} dg col-3 m-4 `}>
          <div className={`${style.case} bg-light b-shadow-sx`}>Shadow sx</div>
          <div className={`${style.case} bg-light b-shadow-sm`}>Shadow sm</div>
          <div className={`${style.case} bg-light b-shadow-md`}>Shadow md</div>
          <div className={`${style.case} bg-light b-shadow-lg`}>Shadow lg</div>
          <div className={`${style.case} bg-light b-shadow-xl`}>Shadow xl</div>
          <div className={`${style.case} bg-light elevation-1`}>
            Elevation 1
          </div>
          <div className={`${style.case} bg-light elevation-2`}>
            Elevation 2
          </div>
          <div className={`${style.case} bg-light elevation-3`}>
            Elevation 3
          </div>
          <div className={`${style.case} bg-light elevation-4`}>
            Elevation 4
          </div>
          <div className={`${style.case} bg-light elevation-5`}>
            Elevation 5
          </div>
          <div className={`${style.case} bg-light elevation-6`}>
            Elevation 6
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
