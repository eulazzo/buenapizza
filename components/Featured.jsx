import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  //"/images/Featured2.png"
  const images = ["/images/Featured1.png"];
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlideHandler = (direction) => {
    direction === "left"
      ? setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      : setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => changeSlideHandler("left")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper}>
        
        <div className={styles.pizzaInfoContainer}>
          <span className={styles.pizzaInfoItem}>HOT{" & "}SPICY</span>
          <span className={styles.pizzaInfoItem}>PIZZA</span>
          <span className={styles.pizzaInfoItem}>50% OFF</span>
          <span className={styles.pizzaInfoItem}>ORDER NOW</span>
          <span className={styles.pizzaInfoItem}>BUENAPIZZA</span>
        </div>

        <div className={{transform:`translateX(${-100 * slideIndex}vw)`}}>
          {images.map((imgPath, index) => (
            <div key={index} className={styles.imgContainer}>
              <Image src={imgPath} alt="" layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => changeSlideHandler("right")}
        className={styles.arrowContainer}
        style={{ right: 0 }}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
