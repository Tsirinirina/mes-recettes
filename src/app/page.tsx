"use client";
import { Button } from "@/components/button/button";
import styles from "./page.module.css";

export default function Home() {
  console.log("Btn var");
  const onClick = () => {
    console.log("On Click res");
  };
  return (
    <main className={styles.main}>
      <div className={styles.case}>Texte a afficher</div>
      <div className={styles.btnDiv}>
        <Button variant="primary" size="sx" onClick={onClick}>
          Button 1
        </Button>
        <Button variant="secondary" size="sm" onClick={onClick}>
          Button 2
        </Button>
        <div style={{ width: "400px" }}>
          <Button variant="ternary" onClick={onClick}>
            Button 3
          </Button>
        </div>
        <Button variant="success" size="md" onClick={onClick}>
          Button 4
        </Button>
        <Button variant="danger" size="lg" height="md" onClick={onClick}>
          Button 5
        </Button>
        <Button
          variant="dark"
          size="xl"
          height="md"
          onClick={onClick}
          rounded="xl"
        >
          Button 6
        </Button>
        <Button variant="light" size="md" onClick={onClick}>
          Button 7
        </Button>
        <Button size="md" onClick={onClick}>
          Button Simple
        </Button>
      </div>
    </main>
  );
}
