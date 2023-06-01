import { useState } from "react";
import ImageForm from "./Image";

export default function ImageBoard() {
  const [image, setImage] = useState("");

  return (
    <div>
      <h1>Image Board</h1>
      <ImageForm imgURL={image} changeURL={setImage} />
      {/* <ImageList img={image} /> */}
    </div>
  );
}
