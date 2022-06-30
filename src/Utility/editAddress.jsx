import axios from "axios";
import { getUserToken } from "./getUserToken";

const updateAddress = async (address, addressDispatch) => {
  const {data} = await axios.post(
    `/api/user/address/${address._id}`,
    {
      address,
    },
    {
      headers: { authorization: getUserToken() },
    }
  );
//   console.log(data.address);
  addressDispatch({type:"UPDATE_ADDRESS", payload:data.address})
};

export { updateAddress };