"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BriefcaseMetal,
  ChartLine,
  House,
  LinkedinLogo,
  List,
  Package,
  ShoppingCart,
  Users,
  XLogo,
  GithubLogo, // Added GitHub logo import
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import ConnectButton from "./ConnectButton";
import { ModeToggle } from "./ModeToggle";
import { motion } from "motion/react";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, transition: { duration: 1, y: 10 } }}
      viewport={{ once: true }}
      id="header"
      className="mx-6 mb-20 flex items-center justify-between py-6 lg:mx-auto lg:mb-40 lg:max-w-4xl xl:max-w-6xl"
    >
      <div className="flex items-center gap-4">
        <Image
          width={32}
          height={32}
          src="./dipraj.png"
          alt="Dipraj Girase photo"
        />
        <p className="text-sm">Dipraj Girase</p>
      </div>
      <div className="hidden items-center gap-8 lg:flex">
        <nav>
          <ul className="flex items-center gap-8 text-sm">
            <li className="transition-colors delay-75 ease-in-out hover:text-blue-600">
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li className="transition-colors delay-75 ease-in-out hover:text-blue-600">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="transition-colors delay-75 ease-in-out hover:text-blue-600">
              <Link href="#about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/amittambulkar/"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <LinkedinLogo size={22} />
          </Link>
          <Link
            href="https://x.com/@dipraj52"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <XLogo size={22} />
          </Link>
          <Link
            href="https://github.com/diprajgirase"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <GithubLogo size={22} />
          </Link>
          <ModeToggle />
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <List className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href=""
              className="mb-3 flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                width={32}
                height={32}
                src="/dipraj.png"
                alt="Dipraj Girase photo"
              />
              <span className="sr-only">Dipraj Girase</span>
            </Link>
            <SheetTrigger asChild>
              <Link
                href="#header"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <House weight="duotone" className="h-5 w-5" />
                Home
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                href="#portfolio"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <BriefcaseMetal weight="duotone" className="h-5 w-5" />
                Portfolio
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                href="#skills"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Package weight="duotone" className="h-5 w-5" />
                Skills
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                href="#services"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Users weight="duotone" className="h-5 w-5" />
                Services
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                href="#about"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <ChartLine weight="duotone" className="h-5 w-5" />
                About Me
              </Link>
            </SheetTrigger>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Let&apos;s have a Chat
                </CardTitle>
                <CardDescription>
                  You don&apos;t have to fill any form, just hop on a quick
                  15-30 min call
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConnectButton />
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}

export default Header;