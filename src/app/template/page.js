import Navbar from "../components/Website/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <div className="p-6 text-4xl sm:text-5xl md:text-7xl xl:text-8xl mt-10 font-extrabold mb-10 text-white">
          <h1>Templates</h1>
        </div>
        <div className="text-4xl my-8 place-self-center text-white">
          <h2>Ecommerce Kit</h2>
        </div>
        <div className="place-self-center mb-10 p-2 bg-black">
          <Image
            src="/images/ui-shop-tool-kit.png"
            width={500}
            height={900}
            alt="picture of homepage of ui shop toolkit"
          />
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <button className="bg-[#FF5531]  hover:bg-[#CC4426] px-6 py-2 rounded-md text-white text-xl hover:translate-y-1">
            <Link href="https://github.com/Bay-Valley-Tech-Code-Academy/UI-Tool-Kit">
              Github
            </Link>
          </button>
          <button className="bg-[#FF5531]  hover:bg-[#CC4426] px-6 py-2 rounded-md text-white text-xl hover:translate-y-1">
            <Link href="../doc">Docs</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
