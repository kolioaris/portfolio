"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

{
  /* Icons */
}
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    /* Main Div */
    <div>
      {/* Nav Bar Div */}
      <div className="p-1.5 border-b">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Change Theme */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="inset-y-0 right-0">
                  <Button
                    variant="outline"
                    className="border p-4.5"
                    size="icon"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-101 sm:w-101 md:w-101 lg:w-101 xl:w-101 2xl:w-101 transition-all duration-300"
                >
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun/> Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon/> Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Monitor/>System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            {/* Home */}
            <NavigationMenuItem>
              <Link
                href="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 border p-4.5"
              >
                Home
              </Link>
            </NavigationMenuItem>
            {/* Documentation */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="border p-4.5">
                Documentation
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-101 sm:w-101 md:w-101 lg:w-101 xl:w-101 2xl:w-101 transition-all duration-300">
                <NavigationMenuLink>Coming Soon</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Social Media */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="border p-4.5">
                Social Media
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-101 sm:w-101 md:w-101 lg:w-101 xl:w-101 2xl:w-101 transition-all duration-300">
                <NavigationMenuLink
                  href="https://x.com/kolioaris"
                  className="flex items-center gap-1"
                >
                  <FaXTwitter /> Twitter
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="https://github.com/kolioaris"
                  className="flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="https://youtube.com/@kolioaris"
                  className="flex items-center gap-1"
                >
                  <FaYoutube /> YouTube
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="mailto:me@kolioaris.xyz"
                  className="flex items-center gap-1"
                >
                  <IoMdMail /> Mail
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <main>
        <h1 className="mt-10 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Hi! I am kolioaris!
        </h1>
        <h2 className="scroll-m-20 text-2xl text-center tracking-tight mt-1">
          I like coding and gaming.
        </h2>
        <div className="text-center mt-5">
          <Button variant="outline" className="border mr-2" size="lg">GitHub</Button>
          <Button variant="outline" className="border" size="lg">Social Media</Button>
        </div>
        <p className="text-muted-foreground text-center text-xs mt-5">By the way, the k is lowercase.</p>
      </main>
    </div>
  );
}
