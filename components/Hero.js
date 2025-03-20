"use client";

import ConnectButton from "./ConnectButton";
import { motion } from "framer-motion"; // Corrected import for motion
import HireMeButton from "./HireMe";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      id="hero"
      className="mx-auto mb-28 max-w-3xl px-4 flex flex-col items-center justify-center text-center"
    >
      <h1 className="mb-8 flex flex-wrap items-center justify-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
        <span className="font-light tracking-tighter">Design</span>
        <span className="font-light tracking-tighter">Develop</span>
        <span className="font-light tracking-tighter">Deploy</span>
      </h1>
      <p className="mb-10 w-full max-w-[90%] text-lg text-slate-600 dark:text-slate-300 md:text-xl">
        I design and develop web applications and deploy them in weeks, not months.
        Building applications that people can use.
      </p>
      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>
    </motion.section>
  );
}

export default Hero;
