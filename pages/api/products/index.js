import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  dbConnect();

  //get all pizzas
  if (method === "GET") {
    try {
      const allPizza = await Product.find();
      res.status(201).json(allPizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //crete a new pizza
  if (method === "POST") {
     

    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not allowed");
    }

    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
