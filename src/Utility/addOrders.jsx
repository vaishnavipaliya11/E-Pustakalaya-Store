import axios from "axios";
import { getUserToken } from "./getUserToken";

 const addOrders = async (orders, orderDispatch) => {
  try {
    const { data } = await axios.post("/api/user/orders",
    orders,
    {
      headers: {
        authorization: getUserToken(),
      },
    });

    orderDispatch({type:"ADD_NEW_ORDER", payload:data.orders})
  } catch (error) {
    console.error(error);
  }
};

export {addOrders}