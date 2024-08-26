"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = usePathname();

  const getButtonClasses = (path) =>
    currentRoute === path
      ? "text-white p-2 text-base md:text-lg bg-[#FF5531] rounded-md"
      : "text-white p-2 text-base md:text-lg";

  return (
    <nav className="flex justify-between p-4">
      <div>
        <button 
          className="text-white p-2 text-base md:text-lg"
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
