'use client'
import Image from "next/image";
import Box from "./components/Box/box";
import Navbar from "./components/navbar";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const text = "Empowering developers for rapid innovation.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="mt-16 text-center">
        <h1 className="pl-6 text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-extrabold">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="transition-colors duration-300 ease-out hover:text-[#FF5531] text-white"
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center justify-center mt-8">
        <button
          className="text-white p-2 text-base md:text-2xl bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-2 hover:translate-y-1"
          onClick={() => router.push("/template")}
        >
          Browse templates
        </button>
        <button
          className="text-white p-2 text-base md:text-2xl bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-2 hover:translate-y-1"
          onClick={() => router.push("/component")}
        >
          Browse components
        </button>
        <img
          src="/images/bvt_logo.png"
          alt="BVT Logo"
          className="w-1/4 transition duration-300 ease-out hover:scale-125"
        />
      </div>

      {/* Tailwind Box Section */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-12">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
