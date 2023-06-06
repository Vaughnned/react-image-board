import React, { useState } from "react";

export default function ImageForm({ imageList, setImageList }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  console.log(url);
  console.log(caption);

  function handleImageSubmission(event) {
    event.preventDefault();
    const newImage = { url: url, caption: caption };
    setImageList([newImage, ...imageList]);
  }

  return (
    <>
      <form onSubmit={(event) => handleImageSubmission(event)}>
        <label>Image URL</label>
        <input
          type="url"
          placeholder="Image URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
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
