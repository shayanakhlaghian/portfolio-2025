'use client';
import { Suspense } from 'react';
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import {
  PerspectiveCamera,
  PresentationControls,
  Float,
  useProgress,
  Html,
} from '@react-three/drei';

import { Crt } from '@/models';
import { AnimatedCircularProgressBar } from '@/components';
import { useMediaQuery } from 'react-responsive';

const Experience = () => {
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
          <Crt rotation-y={-Math.PI * 0.875} scale={isMobile ? 0.95 : 1} />
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
        className="size-20 text-base text-black md:size-24 lg:size-32 lg:text-xl"
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
