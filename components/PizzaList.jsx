
import styles from '../styles/PizzaList.module.css'
import { PizzaCard } from './PizzaCard';

export const PizzaList = () =>{
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero mollitia blanditiis rerum laborum exercitationem praesentium expedita eaque aut numquam animi omnis nihil, dolorum quod voluptatum qui nesciunt, repellat fugit.
      </p>
      <div className={styles.wrapper}>
       <PizzaCard />
       <PizzaCard />
       <PizzaCard />
       <PizzaCard />
       <PizzaCard />
       <PizzaCard />
       <PizzaCard />
       <PizzaCard />
      </div>
    </div>
  );
}