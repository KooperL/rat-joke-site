import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";

const Rat = () => {
  const gltf = useLoader(GLTFLoader, "rat2/scene.gltf")
  useFrame(({clock}) => {
    // console.log(gltf)
      gltf.scene.rotation.x = clock.getElapsedTime()/2
      gltf.scene.rotation.y = clock.getElapsedTime()
      gltf.scene.rotation.z = clock.getElapsedTime()*2
  })
    return (
        <>
            <primitive
	      position={[0, 0, 0]}
	      object={gltf.scene}
	      scale={3}
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
              />
            </ mesh>
           </Suspense>
      </Canvas>
   )
}

export default Model;

