import ImageFrames from "../components/3d/ImageFrames";

const HomePage = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-15043994" },
    { url: "https://images.unsplash.com/photo-150439" },
  ];
  return <ImageFrames images={images} />;
};
export default HomePage;
