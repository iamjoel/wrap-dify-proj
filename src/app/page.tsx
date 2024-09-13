import styles from "./page.module.css";
import Badge from "@/app/components/base/badge";
import Test from "./test";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Badge text="aaa"></Badge>
        <Test></Test>
      </main>
    </div>
  );
}
