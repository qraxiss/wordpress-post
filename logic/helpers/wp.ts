import axios from "axios";
import config from "../../config";

const basic : string = `Basic ${Buffer.from(`${config.USERNAME}:${config.PASSWORD}`,"utf-8").toString("base64")}`

export const wordpress = axios.create({
  baseURL: config.API_GATE,
  headers: {
    "Content-Type": "application/json",
    Authorization: basic,
  },
});
