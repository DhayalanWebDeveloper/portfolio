"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "Angular",
  "React",
  "Next.js",
  "FastAPI",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "WordPress",
  "Node.js",
  "RxJS",
  "Bootstrap",
  "WebSockets",
];

export default function OrbitingSkills() {
  const orbitRadius1 = 190;
  const orbitRadius2 = 240;

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow rings */}
      <div className="absolute h-[480px] w-[480px] rounded-full border border-accent/10" />
      <div className="absolute h-[400px] w-[400px] rounded-full border border-accent/5" />
      <div className="absolute h-[320px] w-[320px] rounded-full border border-accent-2/10" />

      {/* Pulsing glow behind photo */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Inner orbit - 6 skills */}
      <div
        className="absolute h-[380px] w-[380px]"
        style={{ perspective: "800px" }}
      >
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {skills.slice(0, 6).map((skill, i) => {
            const angle = (i / 6) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * orbitRadius1;
            const y = Math.sin(rad) * orbitRadius1;

            return (
              <motion.div
                key={skill}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                animate={{ rotateZ: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="whitespace-nowrap rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-sm shadow-lg shadow-accent/10">
                  {skill}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Outer orbit - 6 skills (reverse direction) */}
      <div
        className="absolute h-[480px] w-[480px]"
        style={{ perspective: "800px" }}
      >
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {skills.slice(6, 12).map((skill, i) => {
            const angle = (i / 6) * 360 + 30;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * orbitRadius2;
            const y = Math.sin(rad) * orbitRadius2;

            return (
              <motion.div
                key={skill}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                animate={{ rotateZ: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="whitespace-nowrap rounded-full border border-accent-2/30 bg-accent-2/10 px-3 py-1.5 text-xs font-medium text-accent-2 backdrop-blur-sm shadow-lg shadow-accent-2/10">
                  {skill}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Profile photo - center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        className="relative z-10"
      >
        {/* Gradient border ring */}
        <div className="rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent p-1">
          <div className="rounded-full bg-background p-1">
            <Image
              src="/images/Dhaya-profile.png"
              alt="R. Dhayalan"
              width={220}
              height={220}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold text-background shadow-lg"
        >
          Available for hire
        </motion.div>
      </motion.div>
    </div>
  );
}
