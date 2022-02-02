import styles from "../styles/PizzaList.module.css";
import { PizzaCard } from "./PizzaCard";

export const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        libero mollitia blanditiis rerum laborum exercitationem praesentium
        expedita eaque aut numquam animi omnis nihil, dolorum quod voluptatum
        qui nesciunt, repellat fugit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard pizza={pizza}  key={pizza._id} />
        ))}
      </div>
    </div>
  );
};
