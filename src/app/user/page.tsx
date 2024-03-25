import { getAllUser } from "@/services/user/user.service";
import style from "./page2.module.css";
import { HttpStatusCode } from "axios";
const getAllUserData = async () => {
  const response = await getAllUser();
  if (response.status === HttpStatusCode.Ok) {
    console.log("Res=> ", response.data);
    return response.data;
  }
};
const Page2 = async () => {
  const data = await getAllUserData();
  console.log(data);

  return (
    <div className={style.container}>
      DONNÉES DU DB
      <div className={``}>{data && JSON.stringify(data)}</div>
    </div>
  );
};

export default Page2;
