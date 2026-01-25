"use client";
import Image from "next/image";
const LandingHeader = () => {
  return (
	<div className="min-h-screen bg-creme flex flex-col w-full relative items-center">
		<div className="text-sm font-ultra">
			If you are in immediate danger call 911 and if you cannot speak freely “order a pizza”
		</div>
		<div className="flex absolute right-1/4">
			<Image
				src="/mushroom.png"
				alt="mushroom pizza"
				width={300}
				height={300}
			/>
	  	</div>
	  	<div className="flex absolute left-1/4">
			<Image
				src="/hawaiian.png"
				alt="hawaiian pizza"
				width={300}
				height={300}
			/>
	  </div>
	  <div className="flex absolute right-1/4">
			<Image
				src="/everything.png"
				alt="everything pizza"
				width={300}
				height={300}
			/>
		</div>
		<div className="text-md font-ultra">
			We are here to provide discrete support those impacted by relationship abuse.		
		</div>
		<div className="text-md font-ultra">
			Domestic Violence Hotline:
			1.800.799.SAFE (7233)
		</div>
		<div className="text-md font-ultra">
			You can also text:
			“START” to 88788
		</div>
	</div>
  );
};
export default LandingHeader;