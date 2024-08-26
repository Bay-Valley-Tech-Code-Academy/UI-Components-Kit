import Navbar from "../components/navbar";
import Box from "../components/Box/box";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
       {/* Grid of Boxes */}
       <div className="-mt-2 p-2 mr-2 lg:mt-0 gap-x-6 grid lg:grid-flow-col grid-flow-row auto-cols-max justify-center gap-4">
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
