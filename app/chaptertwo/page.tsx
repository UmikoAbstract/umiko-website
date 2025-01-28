"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/cardxl";

const socials = [
  {
    background: "/card2one.png",
    href: "/about",
    label: "Pre-launch Campaign: Build anticipation through teaser content, lore snippets, and character introductions.",
    handle: "START OF MARKETING",
  },
  {
    background: "/card2two.png",
    href: "https://x.com/AbstractChain",
    label: "Coming soon…",
    handle: "ABSTRACT ECOSYSTEM PARTNERSHIPS",
  },
  {
    background: "/card2three.png",
    href: "https://discord.com/invite/93DVjTnb6F",
    label: "Organisation of strategic giveaways to get early users and holders involved and to increase awareness. Consistent of the project by revealing small pieces of the lore or exclusive character concepts to your growing audience.",
    handle: "Community Engagement",
  },
  {
    background: "/card2fourth.png",
    href: "https://umikonft.com",
    label: "Release of the official website with team info, project details and Umiko Path Quests",
    handle: "Website",
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
          Chapter 2: WIND
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
