import CustomPatternDesktop from "@/public/svg/bg-shorten-desktop.svg";
import CustomPatternMobile from "@/public/svg/bg-shorten-mobile.svg";
import Image from "next/image";
import { Button } from "../button";

export const LinkInput = () => {
  return (
		<div className="lg:px-0 px-7">
			<div className="-translate-y-24 relative max-w-custom overflow-clip bg-dark-violet h-44 rounded-xl flex w-full justify-center items-center  px-7 md:px-0">
				<div className="w-full h-full absolute hidden md:flex">
					<Image
						src={CustomPatternDesktop}
						className="w-full h-full"
						alt="custom pattern for desktop"
					/>
				</div>
				<div className="w-full absolute h-full ">
					<Image
						src={CustomPatternMobile}
						className=" w-3/5 h-3/4
           absolute right-0 -z-10 flex md:hidden"
						alt="custom pattern for mobile"
					/>
				</div>

				<div className="md:flex md:space-x-6 md:px-20 w-full">
					<div className="w-full md:z-10">
						<input
							type="text"
							className="w-full rounded-md p-[14px] md:p-4 outline-none font-semibold text-gray "
							placeholder="Shorten a link here..."
						/>
					</div>
					<Button className="w-full h-[50px] mt-4 md:w-40 md:h-full rounded-md md:mt-0">
						Shorten it!
					</Button>
				</div>
			</div>
		</div>
	);
};
