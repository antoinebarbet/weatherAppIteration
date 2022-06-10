import axios from "axios";
import { AxiosRequestConfig } from "../interface/fetcher";

async function apiFetcher(info: AxiosRequestConfig) {
  try {
    const { data } = await axios.get(info.url);

    // console.log(JSON.stringify(data, null, 1));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export default apiFetcher;
