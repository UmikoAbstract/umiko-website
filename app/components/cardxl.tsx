"use client";
import {
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  background: string; // Add a background prop to specify the background image
}

export const Card: React.FC<CardProps> = ({ children, background }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, black, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 bg-cover bg-center bg-no-repeat border rounded-xl hover:bg-primary group md:gap-8 hover:border-black border-white cursor-pointer"
      style={{
        backgroundImage: `url(${background})`, // Set the background dynamically
      }}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:primary]" />
        <motion.div
          className="absolute inset-0 z-10 opacity-100 transition duration-1000 group-hover:opacity-20 scale-110"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-20 scale-110"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
