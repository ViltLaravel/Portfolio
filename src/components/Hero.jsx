/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Hero() {
  const containerRef = useRef(null),
    [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container;

        window.particlesContainer = container;
      },
      [containerRef]
    ),
    options = useMemo(
      () => ({
        fullScreen: {
          zIndex: -1,
        },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 30,
          },
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
        },
      }),
      []
    );

  return (
    <section className="w-full flex flex-col justify-center xl:justify-start items-center gap-20 h-[calc(100vh-100px)] m-auto">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      <div className="w-full flex justify-center flex-col gap-8 items-center">
        <h1 className="text-[#915EFF] text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold uppercase">
          Nicole Amoguis
        </h1>
        <div className="text-white-100 text-xl xl:text-7xl font-semibold">
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer",
                "Cloud Practitioner",
                "Freelancer",
                "UI/UX Designer",
                "3+ years of experience",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
