import { api } from "@/core/constant/api.constant";
import axios from "axios";

export async function getBonjour(): Promise<any> {
  try {
    const response = await axios.get(`${api.test.index}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    return error.response;
  }
}
