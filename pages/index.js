import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import { PizzaList } from "../components/PizzaList";
import styles from "../styles/Home.module.css";
 
export default function Home({ pizzaList, isAdmin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {isAdmin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let isAdmin = false;

  if (myCookie.token === process.env.TOKEN) isAdmin = true;

  const { data } = await axios.get("http://localhost:3000/api/products");
  return {
    props: { pizzaList: data, isAdmin },
  };
};
