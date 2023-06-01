import React, { useState } from "react";

export default function ImageForm(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  console.log(imageUrl);
  console.log(caption);

  function handleImageSubmission(event) {
    event.preventDefault();
    console.log(props.listOfImages);
    props.listOfImages.push({ imageUrl: imageUrl, caption: caption });
  }

  return (
    <>
      <form onSubmit={(event) => handleImageSubmission(event)}>
        <label>Image URL</label>
        <input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <label>Image Caption</label>
        <input
          type="text"
          name="imageCaption"
          placeholder="Image Caption"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        ></input>
        <label>Cancel</label>
        <input type="submit" id="submit" />
      </form>
    </>
  );
}
