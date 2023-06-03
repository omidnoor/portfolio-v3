import Layout from "@/components/3d/Layout";
import ImageFrames from "../components/3d/ImageFrames";

const HomePage = () => {
  const images = [
    {
      url: "https://fastly.picsum.photos/id/377/200/300.jpg?hmac=veEWg3ApI7rkKqMF6MuaWBmxPgnEe-Ar9eDdMG3q-kk",
    },
    {
      url: "https://picsum.photos/id/237/200/300",
    },
  ];
  return (
    <Layout>
      <ImageFrames images={images} />
    </Layout>
  );
};
export default HomePage;
