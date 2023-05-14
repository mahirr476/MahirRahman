import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./car/scene.gltf");

  return (
    <mesh>
      <spotLight
      color="rgb(209, 160, 90)"
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <spotLight
        color="rgb(250, 205, 80)"
        position={[10, 20, 10]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={1}
        
        shadow-mapSize={1024}
      />
      <spotLight
        color="rgb(41, 76, 255)"
        position={[-10, 20, -10]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={1}
        
        shadow-mapSize={1024}
      />
      <spotLight
        color="rgb(52, 168, 124)"
        position={[-10, 20, -10]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={1}
        
        shadow-mapSize={1024}
      />
       <spotLight
        color="rgb(255, 41, 91)"
        position={[80, 20, -60]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={1}
        
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.015 : 0.015}
        position={isMobile ? [0, -.5, -1.2] : [0, -0.25, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 50], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
