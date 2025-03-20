"use client";

import {
  Atom,
  Database,
  FigmaLogo,
  Monitor,
  PencilCircle,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";

function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, transition: { duration: 1, y: 10 } }}
      viewport={{ once: true }}
      id="about"
      className="mb-20 flex w-full flex-col items-start justify-center bg-neutral-950 px-8 py-24 text-white dark:bg-slate-400/20 dark:text-slate-100 md:px-20 lg:px-36"
    >
      <p className="mb-2 text-sm text-blue-600 dark:text-blue-500/70">
        About Me
      </p>
      <h2 className="mb-12 text-4xl font-light tracking-tight">
        A little more about me
      </h2>
      <div className="flex w-full flex-col gap-12 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <div className="row-span-2">
          <p className="mb-6">Hi, I&apos;m Dipraj,</p>
          <p className="mb-6">
            a web developer from India passionate about designing and building
            web applications that people love to use.
          </p>
          <p className="mb-6">
            With over a year of experience, I&apos;ve developed various
            applications that have collectively attracted more than 3,000
            visitors—and counting! In addition to development, I often design
            applications from scratch, ensuring they are both functional and
            visually appealing.
          </p>
          <p className="mb-6">
  Currently, I&apos;m working on Connect, a dating application that helps users
  find meaningful connections by matching them based on shared interests,
  values, and preferences.
</p>

          <p>
            If you ever need assistance with development or design, feel free to
            reach out—I&apos;m happy to chat and help!
          </p>
        </div>
        <div className="row-span-2 hidden lg:block"></div>
      </div>
    </motion.section>
  );
}

export default AboutMe;
