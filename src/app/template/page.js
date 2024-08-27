import Navbar from "../components/navbar";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex flex-col bg-[#390D22]">
        <div className="p-10 text-5xl text-white"> Templates </div>
        <div className="text-2xl my-8 place-self-center text-white"> Ecommerce Kit </div>
        <div className="place-self-center mb-14">
          <Image
            src="/images/ui-shop-tool-kit.png"
            width={500}
            height={900}
            alt="picture of homepage of ui shop toolkit"
          />
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <div className="bg-[#FF5531] px-6 py-2 rounded-md text-white"> <Link href="https://github.com/Bay-Valley-Tech-Code-Academy/UI-Tool-Kit"> Github </Link></div>
          <div className="bg-[#FF5531] px-6 py-2 rounded-md text-white"> <Link href="../doc"> Docs </Link> </div>
        </div>
      </div>
    </div>
  );
}
