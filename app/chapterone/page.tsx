"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/cardxl";

const socials = [
  {
    background: "/cardone.png",
    href: "/about",
    label: "Extended project team staffing, which allows managing all social aspects of the project for a comfortable user experience",
    handle: "Team Setup",
  },
  {
    background: "/cardtwo.png",
    href: "https://linktr.ee/umikoabs",
    label: "Twitter: Building a presence, engage with followers, and announce key milestones. \nDiscord: Creation of a server for community engagement, building excitement, and offering exclusive early access.",
    handle: "Social Created",
  },
  {
    background: "/cardthree.png",
    href: "https://x.com/umiko_abs/status/1881387006724599844",
    label: "Character Design: Develop characters, outfits, and iconic assets that tie into the anime lore. \nAnimation: Consider creating short animated teasers or GIFs. Art Style Consistency: Maintain a consistent art style across all assets to strengthen brand identity and immersion into the world.",
    handle: "Art & Animations",
  },
  {
    background: "/cardfourth.png",
    href: "https://x.com/umiko_abs/status/1879208847463928172",
    label: "Involving bluechip communities to make strong holder base which will help to move the project forward and to control project trending on secondary",
    handle: "Blue Chip Communities Wave 1",
  },
];

export default function Example() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />

      {/* Page Content */}
      <div className="container mx-auto flex flex-col items-center px-4 py-16">
        {/* Title */}
        <h1 className="text-3xl py-12 font-custom text-center text-white sm:text-4xl lg:text-5xl mb-12">
          Chapter 1: ABBYS
        </h1>

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
                className="p-4 relative h-64 flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-2 lg:pb-24 md:p-2 cursor-pointer"
              >
                <div className="z-10 flex flex-col items-center justify-center h-screen cursor-pointer">
                  <span className=" xl:text-3xl lg:text-2xl md:text-xl font-custom duration-150  text-white group-hover:text-primary cursor-pointer">
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
