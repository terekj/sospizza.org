"use client";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-creme flex flex-col w-full items-center">
      {/* 1. Header/Checkerboard */}
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/Checkerboard.svg"
          alt="checkerboard"
          width={4000}
          height={500}
        />
      </div>

      <div className="flex relative flex-col w-[45%] -mt-20 items-center">
        <Image src="/SOSPIZZA.png" alt="SOS title" width={818} height={199} />

        <div className="flex flex-row font-ultra text-5xl gap-x-40 justify-center">
          <div>EST.</div>
          <div>2026</div>
        </div>

        <div className="flex -mt-25 ml-20">
          <Image
            src="/SOSpizza.svg"
            alt="SOS PIZZA"
            width={2148}
            height={370}
          />
        </div>

        <div className="flex -mt-25 pb-20">
          <Image
            src="/localtext.png"
            alt="locally sourced"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
