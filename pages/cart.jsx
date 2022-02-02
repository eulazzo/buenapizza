import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={"/img/pizzaCard.png"}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.99</span>
            </td>
            <td>
              <span className={styles.quantity}>4</span>
            </td>
            <td>
              <span className={styles.total}>$45.00</span>
            </td>
          </tr>

          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={"/img/pizzaCard.png"}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.99</span>
            </td>
            <td>
              <span className={styles.quantity}>4</span>
            </td>
            <td>
              <span className={styles.total}>$45.00</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$79.90
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$79.90
          </div>
          <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;