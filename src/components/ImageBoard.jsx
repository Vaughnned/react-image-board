import { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

const INITIAL_IMAGES = [
  {
    url: "https://i.insider.com/6340783eb3e94d0019781b4e?width=700",
    caption: "Man",
  },
  {
    url: "https://i.insider.com/6340783eb3e94d0019781b4e?width=700",
    caption: "Man",
  },
  {
    url: "https://i.insider.com/6340783eb3e94d0019781b4e?width=700",
    caption: "Man",
  },
];

export default function ImageBoard() {
  const [imageList, setImageList] = useState(INITIAL_IMAGES);

  return (
    <div>
      <h1>Image Board</h1>
      <ImageForm imageList={imageList} setImageList={setImageList} />
      <ImageList imageList={imageList} />
    </div>
  );
}
