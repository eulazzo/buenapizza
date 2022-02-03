import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const order = await Order.findById(id);
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case "PUT":
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case "DELETE":
      try {
        const order = await Order.deleteOne(id);
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    default:
      break;
  }
};

export default handler;
