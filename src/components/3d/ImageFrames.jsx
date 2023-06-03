import { useRouter } from "next/router";
import ImageFrame from "./ImageFrame";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";

const ImageFrames = ({ images, q = new Quaternion(), p = new Vector3() }) => {
  const frameRef = useRef(null);
  const clickedRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    clickedRef.current = frameRef.current?.getObjectByName(id);
  });
  console.log(clickedRef.current);
  return (
    <group
      ref={frameRef}
      onClick={(e) => {
        e.stopPropagation();
        console.log(e.object, clickedRef.current);
        // router.push(
        //   clickedRef.current === e.object ? "/" : "/item/" + e.object.name,
        // );
      }}
    >
      {images.map((props, index) => (
        <ImageFrame key={index} {...props} />
      ))}
    </group>
  );
};
export default ImageFrames;
