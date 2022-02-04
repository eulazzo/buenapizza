import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const Admin = ({ pizzas, orders }) => {
  const [pizzaList, setPizzaList] = useState(pizzas);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const nextStageStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    if (item.status >= 2) return;

    try {
      const { data: changedOrder } = await axios.put(
        `http://localhost:3000/api/orders/${id}`,
        {
          status: currentStatus + 1,
        }
      );
      setOrderList([
        changedOrder,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.item}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>

          {pizzaList?.map((prod) => (
            <tbody key={prod._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={prod.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt="pizza"
                  />
                </td>
                <td>{prod._id.slice(0, 5)}...</td>
                <td>{prod.title}</td>
                <td>${prod.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    onClick={() => deleteProduct(prod._id)}
                    className={styles.button}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.item}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList?.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.nextStageBtn}
                    onClick={() => nextStageStatus(order._id)}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
 
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false, 
      },
    };
  }

  const { data: pizzas } = await axios.get(
    "http://localhost:3000/api/products"
  );
  const { data: orders } = await axios.get("http://localhost:3000/api/orders");

  return {
    props: { pizzas, orders },
  };
};

export default Admin;
