"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/cardxl";
import Head from "next/head";

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
      <Head>
        <title>Chapter 1</title> {/* Change the title here */}
        <meta name="One of the firsts anime project on Abstract Chain" content="Learn more about Umiko." />
      </Head>
      <Navigation />

      {/* Page Content */}
      <div className="container mx-auto flex flex-col items-center px-4 py-16 sm:py-24 md:py-32">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl py-12 font-custom text-center text-white mb-12">
          Chapter 1: ABBYS
        </h1>

        {/* Cards Column */}
        <div className="flex flex-col w-full sm:w-4/5 md:w-3/5 gap-8 font-custom">
          {socials.map((s) => (
            <Card key={s.handle} background={s.background}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 sm:p-6 md:p-8 relative h-64 sm:h-72 md:h-80 lg:h-96 flex flex-col items-center gap-4 duration-700 group cursor-pointer"
              >
                <div className="z-10 flex flex-col items-center justify-center h-full cursor-pointer">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-custom duration-150 text-white group-hover:text-primary cursor-pointer">
                    {s.handle}
                  </span>
                  <span className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl text-center duration-1000 text-white group-hover:text-primary cursor-pointer">
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
