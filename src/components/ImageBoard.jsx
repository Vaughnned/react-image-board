import { useState } from "react";
import ImageForm from "./ImageForm";

export default function ImageBoard() {
  const [imageList, setImageList] = useState([]);

  return (
    <div>
      <h1>Image Board</h1>
      <ImageForm
        listOfImages={imageList}
        // changeList={setImageList}
        // imageURL={image}
        // changeURL={setImage}
        // imageCaption={caption}
        // changeCaption={setCaption}
      />
      {/* <ImageList img={image} /> */}
    </div>
  );
}
