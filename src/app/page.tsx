"use client";
import Image from "next/image";
const Home = () => {
  return (
    <div className="min-h-screen bg-creme flex flex-col w-full relative items-center">
      <div className="w-full h-48 overflow-hidden">
        <Image src="/Checkerboard.svg" alt="SOS PIZZA" width={5000} height={500} />
      </div>
      <div className="flex absolute flex-col w-1/2 top-32">
        <Image src="/SOSPIZZA.png" alt="SOS PIZZA" width={818} height={199} />
      <div className="flex absolute top-1/3">
        <Image src="/SOSpizza.svg" alt="SOS PIZZA" width={2148} height={370} />
      </div>
      <div className="flex relative">
        <Image src="/localtext.png" alt="locally sourced and tailored to you" width={700} height={700} />
      </div>
      <div className="flex flex-row absolute font-ultra text-5xl space-x-40 top-1/2">
        <div>EST.</div>
        <div>2026</div>
      </div>
      </div>
    </div>
    );
};
export default Home;
