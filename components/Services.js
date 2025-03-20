"use client";

import {
  Atom,
  Database,
  FigmaLogo,
  Monitor,
  PencilCircle,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, transition: { duration: 1, y: 10 } }}
      viewport={{ once: true }}
      id="services"
      className="mb-20 flex w-full items-center justify-center bg-neutral-200/80 px-6 py-24 dark:bg-slate-900 lg:mb-40"
    >
      <div className="rounded-xl bg-white px-8 py-10 dark:bg-slate-950">
        <p className="mb-2 text-sm text-blue-600 dark:text-blue-500/70">
          Areas
        </p>
        <h2 className="mb-12 text-4xl font-light tracking-tight">
          I can help you with
        </h2>
        <div>
          <ul className="space-y-10 font-light">
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Monitor
                size={22}
                className="mr-1 text-yellow-600 dark:text-yellow-400"
              />
              <span className="font-medium">Websites </span>
              <span className="hidden md:block">-</span>
              <p>HTML, CSS and Vanilla JavaScript</p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Atom
                size={22}
                className="mr-1 text-blue-600 dark:text-blue-400"
              />
              <span className="font-medium">Frontend </span>
              <span className="hidden md:block">-</span>
              <p>React, Tailwind CSS, Redux / Context API, React Query etc.</p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Database
                size={22}
                className="mr-1 text-neutral-800 dark:text-neutral-400"
              />
              <span className="font-medium">Full Stack </span>
              <span className="hidden md:block">-</span>
              <p>
                Next JS, Tailwind CSS, MongoDB, Auth, Payment, AI integration
              </p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <PencilCircle
                size={22}
                className="mr-1 text-purple-600 dark:text-purple-400"
              />
              <span className="font-medium">Web Design </span>
              <span className="hidden md:block">-</span>
              <p>Figma, Web application design and copywriting</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
