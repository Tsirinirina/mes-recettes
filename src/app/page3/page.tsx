import { Card } from "@/components/card/card";
import style from "./page2.module.css";
import { Button } from "@/components/button/button";

const Page3 = () => {
  return (
    <div className={`${style.container} df j-between gap-2`}>
      <Card title="Titre" image={{ alt: "Alt", path: "gateau.jpg" }}>
        Children Card
      </Card>
      <Card
        title="Titre"
        image={{ alt: "Alt", path: "gateau4.jpg" }}
        footer={"Footer"}
      >
        Children Card
      </Card>
      <Card title="Titre" image={{ alt: "Alt", path: "" }}>
        Children Card
      </Card>{" "}
      <Card
        title="Titre"
        image={{ alt: "Alt", path: "" }}
        footer={<Button variant="primary">Action</Button>}
      >
        Children Card
      </Card>
    </div>
  );
};

export default Page3;
