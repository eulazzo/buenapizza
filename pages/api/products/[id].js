import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    cookies,
    query: { id },
  } = req;

  const token = cookies.token;

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
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not allowed");
    }
    try {
      const editedProduct = await Product.updateOne(id);
      res.status(201).json(editedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //delete a pizza
  if (method === "DELETE") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not allowed");
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
