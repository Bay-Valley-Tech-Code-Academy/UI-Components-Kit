import Navbar from "../components/navbar";
import Box from "../components/Box/box";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
       {/* Grid of Boxes */}
       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Box
          description="Explore Tailwind CSS"
          title="Tailwind Box Component"
          button="Learn More"
          p="By John Doe"
          buttonColor="bg-pink-600"
          hoverColor="hover:bg-orange-500"
        />
      </div>
    </div>
  );
}
