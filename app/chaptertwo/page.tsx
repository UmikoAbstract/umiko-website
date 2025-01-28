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
      <div className="container mx-auto flex flex-col items-center px-4 py-16 sm:py-24 md:py-32">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl py-12 font-custom text-center text-white mb-12">
          Chapter 2: WIND
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
