"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/cardxl";

const socials = [
  {
    background: "/gifroadmap.gif",
    href: "/chapterone",
    label: "ABBYS",
    handle: "Chapter 1:",
  },
  {
    background: "/umikogif.gif",
    href: "/chaptertwo",
    label: "WIND",
    handle: "Chapter 2:",
  },
];

export default function Example() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />

      {/* Page Content */}
      <div className="container mx-auto flex flex-col items-center py-16 sm:py-24 md:py-32">

        {/* Cards Column */}
        <div className="flex flex-col w-full sm:w-4/5 md:w-3/5 gap-8 font-custom">
          {socials.map((s) => (
            <Card key={s.handle} background={s.background}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative h-64 sm:h-72 md:h-80 lg:h-96 flex flex-col items-center gap-4 duration-700 group cursor-pointer"
              >
                <div className="z-10 flex flex-col items-center justify-center h-full cursor-pointer">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-custom duration-150 text-white group-hover:text-primary cursor-pointer">
                    {s.handle}
                  </span>
                  <span className="mt-2 sm:mt-4 text-lg sm:text-xl text-center duration-1000 text-white group-hover:text-primary cursor-pointer">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
