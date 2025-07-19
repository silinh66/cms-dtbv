import { YoutubeFilled } from "@ant-design/icons";
import axios from "axios";
const KEY = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs";

function YouTubeGetID(url) {
  var ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
}

export default async (url) => {
  const video_id = YouTubeGetID(url);

  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/videos",
    params: {
      part: "snippet",
      key: KEY,
      id: video_id,
    },
  });
  const response = await youtube.get("/");
  return response;
};
