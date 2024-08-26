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
    </main>
  );
}
