import BoostDesktop from "@/public/svg/bg-boost-desktop.svg";
import BoostMobile from "@/public/svg/bg-boost-mobile.svg";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import { Button, LandingPage, StatisticsAndLinkInput } from "../components";
import { PageFooter } from "../components/page-footer";

export default function Home() {
	return (
		<NextUIProvider>
			<main className="min-h-screen">
				<LandingPage />
				<StatisticsAndLinkInput />

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
						<Button className="w-40 py-6 rounded-full mt-4 text-sm">
							Get Started
						</Button>
					</div>
				</div>

				<PageFooter />
			</main>
		</NextUIProvider>
	);
}
