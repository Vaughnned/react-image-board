import React, { useState } from "react";

export default function ImageForm(props) {
  console.log(props.imageUrl);
  console.log(props.setImageUrl);

  return (
    <>
      {/* <img src={URL.createObjectURL(image)} /> */}
      <form>
        <input
          type="url"
          placeholder="Image URL"
          onChange={(e) => props.setImageUrl(e.target.value)}
          value={props.imageUrl}
        />
        <textarea name="imageCaption" placeholder="Image Caption"></textarea>
        {/* <input type="submit" id="submit" /> */}
      </form>
    </>
  );
}
