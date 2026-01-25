"use client";
import Image from "next/image";
const LandingHeader = () => {
  	return (
		<div className="min-h-screen bg-creme flex flex-col w-full relative items-center">
			<div className="text-lg font-ultra m-28">
				If you are in immediate danger call 911 and if you cannot speak freely “order a pizza”
			</div>
			<div className="absolute right-5 top-1/2 opacity-20 z-0">
				<Image
					src="/onion.png"
					alt="onion pizza"
					width={500}
					height={500}
				/>
			</div>
			<div className="absolute left-5 top-1/4 opacity-30 z-0">
				<Image
					src="/meatball.png"
					alt="meatball pizza"
					width={500}
					height={500}
				/>
			</div>
			<div className="flex flex-row ml-60 gap-x-40 z-1">
				<div className="text-3xl font-ultra w-1/3 mt-24">
					We are here to provide discrete support those impacted by relationship abuse.		
				</div>
				<Image
					src="/mushroom.png"
					alt="mushroom pizza"
					width={400}
					height={400}
				/>
			</div>
			<div className="flex flex-row ml-60 gap-x-40 -my-12 z-1">
				<Image
					src="/hawaiian.png"
					alt="hawaiian pizza"
					width={360}
					height={360}
				/>
				<div className="text-3xl font-ultra w-1/3 mt-24">
					Domestic Violence Hotline:
					1.800.799.SAFE (7233)
				</div>
			</div>
			<div className="flex flex-row ml-60 gap-x-40 z-1">
				<div className="text-3xl font-ultra w-1/4 mt-24">
					You can also text:
					“START” to 88788		
				</div>
				<Image
					src="/everything.png"
					alt="everything pizza"
					width={450}
					height={450}
				/>
			</div>
			<div className="text-4xl font-ultra mt-28">
				KNOW YOUR RIGHTS
			</div>
			<div className="text-3xl font-podkova mt-20 w-1/2">
				National statues are put in place to protect victims of domestic violence
			</div>
			<div className="flex flex-col text-2xl font-podkova m-12 mb-28">
				<div>Federal Child Abuse Prevention and Treatment Act (CAPTA)</div>
				<div>Elder Justice Act</div>
				<div>Patient Safety and Abuse Act</div>
			</div>
			<div className="absolute -left-5 -bottom-18 opacity-20 z-0">
				<Image
					src="/mushroom.png"
					alt="mushroom pizza"
					width={550}
					height={550}
				/>
			</div>
		</div>
	);
};
export default LandingHeader;