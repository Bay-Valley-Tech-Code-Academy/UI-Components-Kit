"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = usePathname();

  const getButtonClasses = (path) =>
    currentRoute === path
      ? "text-[#180728] p-1 text-base md:text-lg bg-[#FF7D61] hover:bg-[#CC4426] rounded-md m-1"
      : "text-white p-1 text-base md:text-lg hover:bg-[#CC4426] hover:rounded-md m-1";

  return (
    <nav className="flex justify-between p-4">
      <div>
        <button 
          className="text-white p-2 text-base md:text-lg font-extrabold hover:text-[#FF5531]"
          onClick={() => router.push("/")}
        >BVT UI</button>
      </div>
      <div>
        <button
          className={getButtonClasses("/component")}
          onClick={() => router.push("/component")}
        >
          Components
        </button>
        <button
          className={getButtonClasses("/template")}
          onClick={() => router.push("/template")}
        >
          Templates
        </button>
        <button
          className={getButtonClasses("/doc")}
          onClick={() => router.push("/doc")}
        >
          Docs
        </button>
      </div>
    </nav>
  );
}
