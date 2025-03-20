"use client";

import { LinkedinLogo, Phone, XLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import ConnectButton from "./ConnectButton";
import Link from "next/link";
import { motion } from "motion/react";

function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, transition: { duration: 1, y: 10 } }}
      viewport={{ once: true }}
      id="cta"
      className="mx-auto mb-20 flex max-w-6xl flex-col items-center text-center lg:mb-40"
    >
      <div className="mb-4">
        <p className="mb-2 text-sm text-blue-600 dark:text-blue-500/70">
          Your Action
        </p>
        <h2 className="text-4xl font-light tracking-tight">
          Let&apos;s build something amazing, together
        </h2>
      </div>
      <p className="mx-6 mb-4 text-base text-slate-600 dark:text-slate-300 md:w-[40%]">
        You don&apos;t have to fill any form, just hop on a 15-30 min call. or
        connect with me on any of these social sites.
        {/* Or you can email me on amittambulkar104@gmail.com */}
      </p>
      <div className="mb-10 flex items-center gap-8">
        <Link
          href="https://www.linkedin.com/in/diprajgirase/"
          target="_blank"
          className="transition-colors delay-75 ease-in-out hover:text-blue-600"
        >
          <LinkedinLogo size={28} />
        </Link>
        <Link
          href="https://x.com/dipraj52"
          target="_blank"
          className="transition-colors delay-75 ease-in-out hover:text-blue-600"
        >
          <XLogo size={28} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>
    </motion.section>
  );
}

export default CTA;
