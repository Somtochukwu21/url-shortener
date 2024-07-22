import Image from "next/image";
import { PropsDataI } from ".";

export const StatisticsBoxes = ({ header, image, text }: PropsDataI) => {
	return (
		<div className="lg:w-1/3 bg-white text-center relative pb-8 lg:pb-0 lg:text-left lg:h-72 rounded-md shadow-sm lg:z-10">
			<div
				className="
			absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
			bg-dark-violet lg:relative lg:left-0  lg:translate-x-8 rounded-full flex items-center justify-center w-16 h-16">
				<Image src={image} alt="statistics icon" className="h-1/2 w-1/2" />
			</div>
			<div className="px-8 pt-12 lg:pt-0">
				<h3 className="font-semibold text-xl lg:text-2xl mt-2 mb-4  ">
					{header}
				</h3>
				<p className="">{text}</p>
			</div>
		</div>
	);
};
