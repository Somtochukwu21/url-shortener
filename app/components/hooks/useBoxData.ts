import BrandRecognition from "@/public/svg/icon-brand-recognition.svg";
import DetailedRecord from "@/public/svg/icon-detailed-records.svg";
import Customizable from "@/public/svg/icon-fully-customizable.svg";

export interface PropsDataI {
	image: any;
	header: string;
	text: string;
	id?: number;
}

export const PropsData: PropsDataI[] = [
	{
		id: 1,
		image: BrandRecognition,
		header: "Brand Recognition",
		text: "Boost your brand recognition with each click. Generic links doesn't mean a thing. Branded links help instill confidence in your content.",
	},
	{
		id: 1,

		image: DetailedRecord,
		header: "Detailed Records",
		text: "Gain insights into who is clicking your links. Knowing when and where people engage with in your content helps inform better decisions.",
	},
	{
		id: 1,
		image: Customizable,
		header: "Fully Customizable",
		text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
	},
];
