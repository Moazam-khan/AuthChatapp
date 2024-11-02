import axios from "../axios";

export const GetUser = async (): Promise<any> => {
  try {
    const endPoint = "/api/user/current/";
    const res = await axios.get<any>(endPoint);
    if (!res?.data) throw "Something went wrong GetUser";
    console.log("get user", res.data);
    return res.data;
  } catch (err) {
    console.log("error get user", err);
    return Promise.reject(err);
  }
};
