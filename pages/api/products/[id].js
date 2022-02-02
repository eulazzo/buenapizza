import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
   
  dbConnect();

  //get all pizzas
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Edit a  pizza
  if (method === "PUT") {
    try {
      const editedProduct = await Product.updateOne({id});
      res.status(201).json(editedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //delete a pizza
  if (method === "DELETE") {
    try {
      const newProduct = await Product.deleteOne({id});
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}