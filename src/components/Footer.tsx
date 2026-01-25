import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex bg-red justify-between h-30 font-ultra p-5 text-creme items-end z-1">
      <div className="flex flex-col justify-center">
        <div className="text-2xl border-b-3 border-red-950">SOSPIZZA</div>
        <div className="text-md">EST. 2026</div>
      </div>
      <div className="text-lg mt-10 border-y-3 border-red-950">
        Click{" "}
        <span className="text-red-950">
          <Link href="/Sources">here</Link>
        </span>{" "}
        for our Locally Sourced Ingredients!
      </div>
    </div>
  );
};

export default Footer;
