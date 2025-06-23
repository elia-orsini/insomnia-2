import React from "react";
import { useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import useWindowWidth from "@/hooks/useWindowWidth";

const SpinningLogo: React.FC = () => {
  const gltf = useGLTF("/insomnia-scene.glb", true, true);
  const ref = useRef<any>(null);

  const windowWidth = useWindowWidth();

  return (
    <>
      <Environment files="/skylit.hdr" />
      <directionalLight position={[-5, 5, 0]} intensity={3} />
      <directionalLight position={[5, -5, 0]} intensity={3} />
      <camera position={[0, 1, 0]} />
      <color attach="background" args={["black"]} />
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[-Math.PI, Math.PI, Math.PI]}
        position={windowWidth && windowWidth < 641 ? [0, 0.4, 2] : [0, -7, -12]}
      />
    </>
  );
};

export default SpinningLogo;
