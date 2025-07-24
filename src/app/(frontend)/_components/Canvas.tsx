'use client';
import * as THREE from 'three';
import { RefObject, Suspense, useRef } from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import {
  PerspectiveCamera,
  PresentationControls,
  Float,
  useProgress,
  Html,
  useHelper,
} from '@react-three/drei';
import { useControls } from 'leva';

import { Crt } from '@/models';
import { AnimatedCircularProgressBar } from '@/components';
import { useMediaQuery } from 'react-responsive';

const Experience = () => {
  // const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  // useHelper(
  //   directionalLightRef as RefObject<THREE.Object3D>,
  //   THREE.DirectionalLightHelper,
  //   2,
  //   'red',
  // );
  // const { x, y, z } = useControls({
  //   x: { min: -10, max: 10, value: 0, step: 0.1 },
  //   y: { min: -10, max: 10, value: 0, step: 0.1 },
  //   z: { min: -10, max: 10, value: 0, step: 0.1 },
  // });

  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        // ref={directionalLightRef}
        position={[0.3, 0.2, 3.6]}
        intensity={2}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 1]} />
      <PresentationControls
        polar={[-Math.PI / 16, Math.PI / 16]}
        azimuth={[-Math.PI / 9, Math.PI / 9]}
      >
        <Float
          position={[-0.05, -0.115, -0.45]}
          floatingRange={[0.01, 0]}
          speed={0.9}
          floatIntensity={0.8}
          rotationIntensity={0.9}
        >
          <Crt rotation-y={-Math.PI * 0.875} scale={isMobile ? .95 : 1}/>
        </Float>
      </PresentationControls>
    </>
  );
};

const Loading = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <AnimatedCircularProgressBar
        min={0}
        max={100}
        gaugePrimaryColor="#0095FF"
        gaugeSecondaryColor="#dedede"
        className="text-black size-20 text-base md:size-24 lg:size-32 lg:text-xl"
        value={progress}
      />
    </Html>
  );
};

const Canvas = () => {
  return (
    <div className="absolute-center size-full">
      <ThreeCanvas className="size-full">
        <Suspense fallback={<Loading />}>
          <Experience />
        </Suspense>
      </ThreeCanvas>
    </div>
  );
};

export default Canvas;
