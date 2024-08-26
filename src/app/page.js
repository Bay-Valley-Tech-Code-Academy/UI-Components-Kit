'use client'

import Navbar from "./components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Navbar/>
      <div>
        <h1 className="text-white pl-6 text-4xl sm:text-5xl md:text-7xl xl:text-8xl mt-16 font-extrabold">Empowering developers for rapid innovation.</h1>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <button className="text-white p-2 text-base md:text-2xl bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-2"
          onClick={() => router.push("/template")}
          >Browse templates</button>
        </div>
        <div>
          <button className="text-white p-2 text-base md:text-2xl bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-2"
          onClick={() => router.push("/component")}
          >Browse components</button>
        </div>
        <img src="/images/bvt_logo.png" alt="" className="w-1/4"/>
      </div>
    </div>
  );
}
