import * as THREE from 'three';
import { useGLTF  } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

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
      <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat16} />
    </group>
  );
};

export default Crt;

useGLTF.preload('/models/crt.glb');
