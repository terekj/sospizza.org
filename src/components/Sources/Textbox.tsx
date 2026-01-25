import Image from "next/image";
import HyperLink from "./HyperLink";

const Sources = () => {
  return (
    <div className="bg-creme">
      <div className="pt-20 ml-40 z-1">
        <div className="w-100 flex flex-col gap-2">
          <div className="text-7xl leading-none text-red font-ultra tracking-widest">
            Local
          </div>
          <div className="text-7xl leading-none text-red font-ultra tracking-widest">
            Sources
          </div>
        </div>
      </div>

        <div className="mx-29 z-1">
            <div className="relative h-10 bg-red z-1">
                {/* Left Tirangle */}
                <div
                    className="absolute top-0 left-0 h-full w-6 bg-creme"
                    style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                />

                {/* Right triangle */}
                <div
                    className="absolute top-0 right-0 h-full w-6 bg-creme"
                    style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
                />

                <Image
                    src="Cow.svg"
                    alt="Logo"
                    className="absolute -top-50 left-170 z-10"
                    width={550}
                    height={550}
                />
            </div>
        </div>
      <div className="absolute -left-5 -bottom-18 opacity-20 z-0">
        <Image
          src="/mushroom.png"
          alt="mushroom pizza"
          width={550}
          height={550}
        />
      </div>

        <div className="absolute -right-60 top-15 opacity-20 z-0">
            <Image
            src="/onion.png"
            alt="onion pizza"
            width={550}
            height={550}
            />
        </div>
       


      <div className="mt-4 ml-40 text-red tracking-widest font-ultra leading-none text-4xl z-1">
        {" "}
        SAFE Family Justice Centers{" "}
      </div>
      <a
        href="https://www.safefjc.org/"
        className="mt-1 ml-44 text-light-red tracking-widest font-ultra leading-none text-2xl hover:text-[0000FF] transition-colors duration-200 z-1"
      >
        {" "}
        www.safefjc.org
      </a>
      <div className="mx-35 h-2 bg-red border-b z-1"> </div>

      <HyperLink
        title="Partners Against Violence"
        href="https://www.partnersagainstviolence.org/"
        label="partnersagainstviolence.org"
      ></HyperLink>
      <HyperLink
        title="Option House"
        href="https://www.optionhouseinc.com/"
        label="optionhouseinc.com"
      ></HyperLink>
      <HyperLink
        title="Defining Domestic Violence"
        href="https://www.un.org/en/coronavirus/what-is-domestic-abuse"
        label="un.org"
      ></HyperLink>
      <HyperLink
        title="Stopping Violence Against Women"
        href="https://now.org/issues/stopping-violence-against-women/"
        label="now.org"
      ></HyperLink>
      <HyperLink
        title="How we Defined Terms"
        href="https://www.nsvrc.org/lets-talk-campus/definitions-of-terms/"
        label="nsvrc.org"
      ></HyperLink>

        <div className="pb-20">
        <HyperLink
            title="How we got the right"
            href="https://www.ncbi.nlm.nih.gov/books/NBK499891/"
            label="ncbi.nlm.nih.gov"
        ></HyperLink>


       </div> 


    </div>
  );
};

export default Sources;
