export default function ImageList({ imageList }) {
  // const url = props.listOfImages;
  console.log({ imageList });
  return (
    <>
      <ul>
        {imageList.map((image, index) => (
          <li key={index}>
            <img src={image.url} />
            <p>{image.caption}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
