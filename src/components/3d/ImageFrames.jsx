import ImageFrame from "./ImageFrame";

const ImageFrames = ({ images }) => {
  return (
    <group>
      {images.map((image, index) => (
        <ImageFrame
          key={index}
          url={image.url}
          position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
          ]}
        />
      ))}
    </group>
  );
};
export default ImageFrames;
