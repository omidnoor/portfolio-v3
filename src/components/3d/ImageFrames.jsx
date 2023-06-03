import { useRouter } from "next/router";
import ImageFrame from "./ImageFrame";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useLocation, useRoute } from "wouter";

const GOLDENRATIO = 1.61803398875;

const ImageFrames = ({ images, q = new Quaternion(), p = new Vector3() }) => {
  const frameRef = useRef(null);
  const clickedRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clickedRef.current = frameRef.current?.getObjectByName(params?.id);

    if (clickedRef.current) {
      clickedRef.current.parent.updateWorldMatrix(true, true);
      clickedRef.current.localToWorld(p.set(0, GOLDENRATIO * 0.5, 1.25));
      clickedRef.current.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  // console.log(clickedRef.current);

  useFrame((state, delta) => {
    damp3(state.camera.position, p, 0.4, delta);
    dampQ(state.camera.quaternion, q, 0.4, delta);
  });

  return (
    <group
      ref={frameRef}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clickedRef.current === e.object ? "/" : "/item/" + e.object.nam,
        );
        console.log(e.object, clickedRef.current);
        router.push(
          clickedRef.current === e.object ? "/" : "/item/" + e.object.name,
        );
      }}
      onPointerMissed={(e) => {
        setLocation("/");
      }}
    >
      {images.map((props, index) => (
        <ImageFrame key={index} {...props} />
      ))}
    </group>
  );
};
export default ImageFrames;
