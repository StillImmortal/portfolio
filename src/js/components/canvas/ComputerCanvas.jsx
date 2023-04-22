import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Components
import CanvasLoader from "./CanvasLoader.jsx";

function Computer({isMobile}) {
    const computer = useGLTF("../../../../public/desktop_pc/scene.gltf")

    return (
        <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -2.85, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    )
}

export default function ComputerCanvas() {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false} 
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer />
            </Suspense>
        </Canvas>
    )
}