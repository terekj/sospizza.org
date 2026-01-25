import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-red h-24 items-center justify-between p-4">
      <Link href="/">
        <div className="flex w-full">
          <Image
            src="/SOSpizzaMini1.svg"
            alt="SmallLogo"
            width={80}
            height={80}
          />
        </div>
      </Link>

      <Link href="/Order">
        <div className="flex items-center p-2 px-4 text-xl text-white border-3 rounded-3xl border-red-950 whitespace-nowrap bg-gray-50/25 drop-shadow-lg font-ultra">
          Order Now
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
