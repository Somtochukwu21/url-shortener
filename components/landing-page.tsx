import Working from "@/public/svg/illustration-working.svg";
import Image from "next/image";
import { Button, NavBar } from "../components";

export const LandingPage = () => {
	return (
		<div>
			<NavBar />
			<div className="lg:px-0 px-7 w-full max-w-7xl m-auto">
				<div className="mt-32 ">
					<div className="flex items-center space-x-4 ">
						<div className="w-1/2">
							<div className="text-7xl font-bold">
								<h1 className="mb-2">More than just</h1>
								<h1>shorter links</h1>
							</div>

							<div className="mt-3">
								<p>
									Build your brand&apos;s recognition and get detailed <br />
									insights on how your links are performing
								</p>
							</div>

							<div className="mt-8">
								<Button className="w-44 py-6 rounded-full"> Get Started</Button>
							</div>
						</div>

						<div className="">
							<div>
								<Image
									className="w-full h-full"
									src={Working}
									alt="Illustration working"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
