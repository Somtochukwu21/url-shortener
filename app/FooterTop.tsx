import BoostDesktop from "@/public/svg/bg-boost-desktop.svg";
import BoostMobile from "@/public/svg/bg-boost-mobile.svg";
import Image from "next/image";
import { Button } from "./components";

export const FooterTop = () => {
	return (
		<div className="relative bg-dark-violet h-64 flex w-full justify-center items-center">
			<div className="w-full h-full absolute overflow-clip">
				<Image
					src={BoostDesktop}
					className="w-full hidden md:flex  h-full"
					alt="Boost pattern for desktop"
				/>
			</div>
			<div className="w-full h-full absolute overflow-clip">
				<Image
					src={BoostMobile}
					className="w-full h-full md:hidden"
					alt="Boost pattern for desktop"
				/>
			</div>
			<div className=" z-10 text-center">
				<h3 className="lg:text-3xl text-white font-semibold text-2xl">
					Boost your links today
				</h3>
				<Button className="w-40 py-4 rounded-full mt-4 text-sm" type="button">
					Get Started
				</Button>
			</div>
		</div>
	);
};
