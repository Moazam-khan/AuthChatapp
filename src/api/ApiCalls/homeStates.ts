import axios from "../axios";

export const GetStates = async () => {
  try {
    const endPoint = "api/homepage-stats";
    const res = await axios.get<any>(endPoint);
    if (!res?.data) throw "Something went wrong GetStates";
    console.log("States response", res.data);
    return res.data.data;
  } catch (err) {
    console.log("error state response", err);
    return Promise.reject(err);
  }
};

interface MonthlyData {
  month: string;
  value: number;
}

// Define the type for the shido volume data
interface ShidoVolumeData {
  timestamp: number;
  value: number;
}

// Define the type for the main data structure
export interface GetStatesType {
  swaps: number;
  token_holders: number;
  monthly_data: MonthlyData[];
  shido_volume_last_6_days: {
    data: ShidoVolumeData[];
  };
}
