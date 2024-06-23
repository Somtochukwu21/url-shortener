import Working from "@/public/svg/illustration-working.svg";
import Image from "next/image";
import { Button, NavBar } from "../components";

export const LandingPage = () => {
	return (
		<div>
			<NavBar />
			<div className="lg:px-0 px-7 w-full max-w-custom m-auto">
				<div className="mt-12 ">
					<div className="lg:flex lg:flex-row-reverse items-center">
						<div className="">
							<div className="z">
								<Image
									className="w-full h-full"
									src={Working}
									alt="Illustration working"
								/>
							</div>
						</div>

						<div className="lg:w-1/2 w-full text-center lg:text-left mt-8 lg:mt-0">
							<div className="text-2xl lg:text-7xl font-bold">
								<h1 className="lg:mb-2">More than just</h1>
								<h1>shorter links</h1>
							</div>

							<div className="mt-3 font-bold">
								<p className="lg:w-10/12">
									Build your brand&apos;s recognition and get detailed insights
									on how your links are performing
								</p>
							</div>

							<div className="mt-8">
								<Button className="w-44 py-6 rounded-full"> Get Started</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
