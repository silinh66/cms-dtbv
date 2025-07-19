import axios from "axios";
const KEY = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos",
  params: {
    part: "statistics",
    key: KEY,
    id: "Z2CXN2tuAXc",
  },
});
