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
      <div className="container mx-auto flex flex-col items-center py-32">

        {/* Cards Column */}
        <div className="flex flex-col w-3/5 gap-8 font-custom">
          {socials.map((s) => (
            <Card 
            key={s.handle}
            background={s.background}
            >
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative h-80 flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-4 lg:pb-24 md:p-2 cursor-pointer"
              >
                <div className="z-10 flex flex-col items-center justify-center h-screen cursor-pointer">
                <span className=" xl:text-3xl lg:text-2xl md:text-xl font-custom duration-150 text-white group-hover:text-primary cursor-pointer">
                    {s.handle}
                  </span>
                  <span className="mt-4 xl:text-xl lg:text-lg md:text-md text-center duration-1000 text-white group-hover:text-primary cursor-pointer">
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
