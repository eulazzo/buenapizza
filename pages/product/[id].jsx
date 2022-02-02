import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (event, option) => {
    const checked = event.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtraIngredients((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtraIngredients(
        extraIngredients.filter((ingredient) => ingredient._id !== option._id)
      );
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extraIngredients, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.sizePizzaOption}>small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.sizePizzaOption}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.sizePizzaOption}>Large</span>
          </div>
        </div>

        {pizza.extraOptions.length ? (
          <>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              {pizza.extraOptions.map((option) => (
                <div key={option._id} className={styles.option}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    onChange={(event) => handleChange(event, option)}
                  />
                  <label htmlFor={option.text}>{option.text}</label>
                </div>
              ))}
            </div>
          </>
        ) : null}

        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);

  return {
    props: { pizza: data },
  };
};

export default Product;
