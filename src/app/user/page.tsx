import { getAllUser } from "@/services/user/user.service";
import style from "./page.module.css";
import { HttpStatusCode } from "axios";
import Link from "@/components/link/link";

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
      <Link>Hover moi!</Link>
    </div>
  );
};

export default Page2;
