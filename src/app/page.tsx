"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <h1 className="mt-10 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Hi! I am kolioaris!
        </h1>
        <h2 className="scroll-m-20 text-2xl text-center tracking-tight mt-1">
          I like coding and gaming.
        </h2>

        <div className="text-center mt-5">
          <Button asChild variant="outline" className="border mr-2" size="lg">
            <Link target="_blank" href="https://github.com/kolioaris">
              GitHub
            </Link>
          </Button>

          <Button asChild variant="outline" className="border" size="lg">
            <Link href="mailto:me@kolioaris.xyz">Send me an email!</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
