import * as THREE from 'three';
import { useGLTF, Html, Plane } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { TypeAnimation } from 'react-type-animation';

import { typeAnimationSequence } from '@/constants';

type GLTFResult = GLTF & {
  nodes: {
    ['Node-Mesh']: THREE.Mesh;
    ['Node-Mesh_1']: THREE.Mesh;
    ['Node-Mesh_2']: THREE.Mesh;
    ['Node-Mesh_3']: THREE.Mesh;
  };
  materials: {
    mat15: THREE.MeshStandardMaterial;
    mat17: THREE.MeshStandardMaterial;
    mat16: THREE.MeshStandardMaterial;
    mat22: THREE.MeshStandardMaterial;
  };
};

const Crt = (props: React.JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/crt.glb') as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat15} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat17} />
      <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat22} />
      {/* <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat16} /> */}
      <group rotation-y={Math.PI} position={[0.015, 0.2125, -0.34]}>
        <Plane args={[0.47, 0.417]} material-color="black">
          <Html
            transform
            occlude="blending"
            position={[0, 0, 0.001]}
            distanceFactor={1}
            zIndexRange={[2, 10]}
            className="h-[175px] w-[190px] bg-black"
          >
            <div className="size-full">
              <TypeAnimation
                sequence={typeAnimationSequence}
                repeat={Infinity}
                className="text-[10px] text-white"
              />
            </div>
          </Html>
        </Plane>
      </group>
    </group>
  );
};

export default Crt;

useGLTF.preload('/models/crt.glb');
