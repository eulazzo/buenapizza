import styles from "../styles/PizzaList.module.css";
import { PizzaCard } from "./PizzaCard";

export const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
      For truly autentic pizza restaurant, there is no better place to visit than the Buenna Pizza. Situated somewhere, this sleepy garden-filled town is the personification of Minas Gerais charm. And, when you get hungry, be sure to visit Pizzaria buennapizza. Local ingredients are used to craft pizzas that are bursting with flavours you truly won’t find anywhere else but in the heart of Minas Gerais..
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard pizza={pizza}  key={pizza._id} />
        ))}
      </div>
    </div>
  );
};
