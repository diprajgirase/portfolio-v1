"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, transition: { duration: 1, y: 10 } }}
      viewport={{ once: true }}
      id="portfolio"
      className="mx-auto mb-28 flex max-w-6xl flex-col items-center pt-12 text-center"
    >
      <div>
        <p className="mb-2 text-sm text-blue-600 dark:text-blue-500/70">
          Portfolio
        </p>
        <h2 className="mb-16 text-4xl font-light tracking-tight">
          Explore My Recent Work
        </h2>
      </div>
      <div className="md:grid-rows-20 mx-6 flex flex-col gap-12 md:grid md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800 md:row-span-9">
          <div className="relative h-[14rem] w-full md:h-[28rem]">
            <Image
              src="/connect.png"
              fill
              className="h-100 w-full object-cover dark:brightness-50"
              alt="Connect.app Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
              Write posts, use AI to refine them. Post daily to continue streak,
              continue streak to earn reach levels, reach levels to earn points,
              redeem points to get free AI tokens.
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                AI Integration
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                100+ Visitors
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Auth & Payment
              </Badge>
            </div>
            <Link
              href="https://github.com/diprajgirase/connect-dating-app-react-native"
              target="_blank"
              className="relative text-sm text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-blue-600 hover:after:scale-x-100"
            >
              Visit Github →
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800 md:row-span-7">
          <div className="relative h-60 w-full md:h-72">
            <Image
              src="/animeverse.png"
              fill
              className="h-100 w-full object-cover dark:brightness-50"
              alt="AnimeVerse.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">AnimeVerse</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
              Build your own bento grid, copy the HTML or Markdown code and
              paste it on to the top of your GitHub Profile readme.
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                1K+ Unique Visitors
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Auto Image gen
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Web Scraping
              </Badge>
            </div>
            <Link
              href="https://github.com/diprajgirase/anime-verse"
              target="_blank"
              className="relative text-sm text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-blue-600 hover:after:scale-x-100"
            >
              Visit Github →
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800 md:row-span-9">
          <div className="relative h-60 w-full md:h-72">
            <Image
              src="/rejouice.png"
              fill
              className="h-100 w-full object-cover dark:brightness-50"
              alt="rejouice.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">Rejouice</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
              Library for logical components which are ready-to-use functional
              React components designed to streamline your development process
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                GSAP
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Locomotive
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Three.js
              </Badge>
            </div>
            <Link
              href="https://diprajgirase.github.io/rejouice/"
              target="_blank"
              rel="noreferrer"
              className="relative text-sm text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-blue-600 hover:after:scale-x-100"
            >
              Visit Rejouice →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
