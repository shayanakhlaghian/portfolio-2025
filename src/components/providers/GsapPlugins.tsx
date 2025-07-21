'use client';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const GsapPlugins = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default GsapPlugins;
