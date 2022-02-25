import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";
// import Combined from "./Combined";
import * as THREE from 'three';


const Rat = () => {
  const gltf = useLoader(GLTFLoader, "rat2/scene.gltf")
  useFrame(({clock}) => {
    console.log(gltf)
      gltf.scene.rotation.x = clock.getElapsedTime()
  })
    return (
        <>
            <primitive
	      position={[0, 0, 0]} // 
	      object={gltf.scene}
	      scale={5}
	    />
        </>
    );
};

function Model() {

   return(
      <Canvas camera={{ position: [10, 10, 5] }}>
           <Suspense fallback={null}>
           <mesh>
               <pointLight position={[10, 10, 10]} />
               <ambientLight intensity={0.1} />
              <Rat 
                rotation={new THREE.Euler(Math.PI / 2, 5, 0)}/>
            </ mesh>
           </Suspense>
      </Canvas>
   )
}

export default Model;

