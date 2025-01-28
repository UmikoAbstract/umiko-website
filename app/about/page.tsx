"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    image: "/marno.jpg",
    href: "https://x.com/marno_abs",
    label: "Founder-CCO",
    handle: "@marno_abs",
  },
  {
    image: "/shadow.jpg",
    href: "https://x.com/shad0wjer",
    label: "Founder-CMO",
    handle: "@shad0wjer",
  },
  {
    image: "/zznft.jpg",
    href: "https://x.com/Zz7_NFT",
    label: "Collab Manager",
    handle: "@Zz7_NFT",
  },
  {
    image: "/mario.jpg",
    href: "https://x.com/ItsMarioSZN",
    label: "Community Manager",
    handle: "@ItsMarioSZN",
  },
];

export default function Example() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />

      {/* Page Content */}
      <div className="container mx-auto flex  flex-col items-center px-4 py-32 lg:flex-row lg:items-start lg:gap-16">
        {/* Text Area */}
        <div className="w-full max-w-md mb-12 text-left lg:w-1/3 lg:mb-0 lg:pl-8">
          <h1 className="text-3xl font-custom text-white sm:text-4xl lg:text-5xl">
            What is the Umiko?
          </h1>
          <p className="mt-4 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
          UMIKO isn’t just a project; it’s a universe where the boundaries between fantasy and reality blur. A world where daring dreamers and those seeking the unknown will find their place. 
          </p>
          <p className="mt-4 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
            Created by a passionate team of anime and blockchain enthusiasts, UMIKO is designed to be a sanctuary for every traveler. Here, you’ll immerse yourself in a breathtaking realm, forge unbreakable bonds with new friends, and embark on a journey filled with endless discoveries. </p>
            <p className="mt-4 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
            Welcome to UMIKO — where adventure awaits at every turn.
            </p>

            <h1 className="text-3xl font-custom text-white sm:text-4xl mt-32 lg:text-5xl">
            Welcome the team!
          </h1>
          <h1 className="text-xl font-custom mt-8 text-white sm:text-xl lg:text-2xl">
            Marno & Shadow:
          </h1>
          <p className="mt-2 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
          Our story begins with a tattoo studio—humble in its inception, yet powerful in its vision. Over four years of dedication, hard work, and passion, we laid the foundation for something greater: the creation of the Umiko anime universe.            
          </p>
          <p className="mt-2 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
          Umiko is not just a product of our craft; it is a living testament to the belief that even the smallest group of like-minded individuals, united by a common dream, can achieve the highest standards of quality. Through ambition and perseverance we have brought this vision to life, showcasing the strength of collective passion
          </p>
          <h1 className="text-xl font-custom mt-8 text-white sm:text-xl lg:text-2xl">
           Zz7_NFT:
          </h1>
          <p className="mt-2 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
          The experienced Collab Manager. Well-known in the web3 space, worked with a lot of projects before.          
          </p>
          <h1 className="text-xl font-custom mt-8 text-white sm:text-xl lg:text-2xl">
           Mario:
          </h1>
          <p className="mt-2 text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
          NFT Strategist | Abstract Creator
          </p>
          <p className=" text-sm font-custom text-gray-300 sm:text-base lg:text-lg">
          Dedicated to advancing community engagement and the potential of Abstract, with a focus on innovative creation.         
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center w-full lg:w-2/3 font-custom">
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {socials.map((s) => (
              <Card key={s.handle}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-4 lg:pb-24 md:p-2 cursor-pointer"
                >
                  <div className="relative z-10 flex items-center justify-center w-64 h-64 overflow-hidden text-xl duration-1000 border rounded-full text-white group-hover:text-black group-hover:bg-primary border-white border-4 bg-black group-hover:border-black drop-shadow-orange cursor-pointer">
                    <img className="cursor-pointer" src={s.image} alt={s.handle} />
                  </div>{" "}
                  <div className="z-10 flex flex-col items-center cursor-pointer">
                    <span className="lg:text-xl font-custom duration-150 xl:text-3xl text-white group-hover:text-black font-display cursor-pointer">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-xl text-center duration-1000 text-white group-hover:text-black cursor-pointer">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
