import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import { OrderDetail } from "../components/OrderDetail";

const Cart = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  // This values are the props in the UI
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      res.status === 201 && router.push(`/orders/${res.data._id}`);
      dispatch(reset());
    } catch (error) {
      console.log(error);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={async function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;

              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>

          <tbody>
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
          </tbody>
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
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                onClick={() => setCash(true)}
                className={styles.payButton}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AVaoKQ6OllWh8-YduPduvuVLBm47WYJBLkF4cuuuICAAA9lLh2Dy6fTCiwXq0Z04qhdgy9dB-Y9WWkzv",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,mercadopago",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
