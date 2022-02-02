import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

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
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
