import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width={"500"} height={"500"} />
      <h1 className={styles.title}>Itallian Pizza</h1>
      <span className={styles.price}>$19.99</span>
      <p className={styles.dec}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
