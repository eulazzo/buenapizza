import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={"/img/bg.png"} objectFit="cover" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE BUENNAPIZZA, WELL BAKE SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            276 - Some Address.
            <br />
            Bocaiuva, 39390-000
            <br />
            (38) 99914110
          </p>

          <p className={styles.text}>
            276 - Some Address.
            <br />
            Bocaiuva, 39390-000
            <br />
            (38) 99914110
          </p>

          <p className={styles.text}>
            276 - Some Address.
            <br />
            Bocaiuva, 39390-000
            <br />
            (38) 99914110
          </p>
          <p className={styles.text}>
            276 - Some Address.
            <br />
            Bocaiuva, 39390-000
            <br />
            (38) 99914110
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKS HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
