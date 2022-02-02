import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";
export const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width={"500"} height={"500"} />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.dec}>{pizza.desc}</p>
    </div>
  );
};
