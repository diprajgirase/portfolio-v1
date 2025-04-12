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
              src="https://res.cloudinary.com/db0ffnzhf/image/upload/v1742475499/Connect_jcrojl.png"
              fill
              className="h-100 w-full object-cover dark:brightness-70"
              alt="Connect.app Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
            Turning ideas into meaningful connections — Building intuitive matchmaking experiences with React Native and smart algorithms.
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              100+ Visitors
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
               AI Integration
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Auth 
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
              src="https://res.cloudinary.com/db0ffnzhf/image/upload/v1742475167/animeverse_k5oxlt.png"
              fill
              className="h-100 w-full object-cover dark:brightness-80"
              alt="AnimeVerse.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">AnimeVerse</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
            Bringing anime worlds to life — Explore, stream, and stay updated with the latest anime trends, all in one place!
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                1K+ Unique Visitors
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Next.js
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Web Scraping
              </Badge>
            </div>
            <Link
              href="https://anime-streaming-25rq.vercel.app/"
              target="_blank"
              className="relative text-sm text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-blue-600 hover:after:scale-x-100"
            >
              Visit AnimeVerse →
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800 md:row-span-9">
          <div className="relative h-60 w-full md:h-72">
            <Image
              src="https://res.cloudinary.com/db0ffnzhf/image/upload/v1742475398/rejouice_crwucb.png"
              fill
              className="h-100 w-full object-cover dark:brightness-80"
              alt="rejouice.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">Rejouice</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
            Crafted a sleek and immersive web experience using GSAP for smooth animations and Locomotive Scroll for seamless scrolling effects, delivering a modern and engaging user journey.
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                GSAP
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Locomotive
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Swiper.js
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
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-slate-800 md:row-span-7">
          <div className="relative h-60 w-full md:h-72">
            <Image
              src="https://res.cloudinary.com/db0ffnzhf/image/upload/v1744471147/citizen-app_dpobcy.png"
              fill
              className="h-100 w-full object-cover dark:brightness-80"
              alt="Venture.site Homepage"
            />
          </div>
          <div className="flex flex-col items-start p-8 text-left">
            <h3 className="mb-4 text-lg font-semibold">Citizen</h3>
            <p className="mb-8 text-sm text-slate-600 dark:text-slate-300">
            Citizen is a political platform for surveys and voter insights, helping booth operators with detailed voter data for efficient campaigns.
            </p>
            <div className="mb-8 flex flex-wrap gap-3 text-sm md:flex-row">
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Next.js
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Framer Motion
              </Badge>
              <Badge className="dark:border dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                Tailwind CSS
              </Badge>
            </div>
            <Link
              href="https://venture-agency.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="relative text-sm text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-blue-600 hover:after:scale-x-100"
            >
              Visit Citizen →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
