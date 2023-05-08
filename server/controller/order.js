import Order from "../models/order.js"

export const postOrder = async (req, res) => {
    try {
      const {
        tableNo,
        order,
        phone,
      } = req.body;
  
      const newOrder = new Order({
        tableNo,
        order,
        phone,
      });
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const updateOrder = async (req, res) => {
    try {
      const { order } = req.body;
      const { _id } = req.params;
      console.log(order)
      console.log(_id)
      const result = await Order.updateOne({ _id }, { $set: { order:order } });
  
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
 export const getOrder=async (req,res)=>{
  const order=await Order.find()
  res.send(order) 
}