import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div className={styles.container}>
      {cart?.products.length ? (
        <>
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
              {cart.products.map((pizza) => (
                <tr key={pizza._id} className={styles.tr}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={pizza.img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{pizza.title}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {pizza.extraIngredients.length ? (
                        pizza.extraIngredients.map((extra) => (
                          <span key={extra._id}>{extra.text}, </span>
                        ))
                      ) : (
                        <span>No extras ingredients</span>
                      )}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>${pizza.price}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{pizza.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>
                      ${pizza.price * pizza.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal: </b>${cart.total}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount: </b>0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total: </b>${cart.total}
              </div>
              <button className={styles.button}>CHECKOUT NOW</button>
            </div>
          </div>
        </>
      ) : (
        <span className={styles.noProductOnCart}>
          You dont have any products in your cart
        </span>
      )}
    </div>
  );
};

export default Cart;
