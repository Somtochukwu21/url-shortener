import CustomPatternDesktop from "@/public/svg/bg-shorten-desktop.svg";
import {  NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import { Button, LandingPage } from "../components";

export default function Home() {
	return (
		<NextUIProvider>
			<main className="min-h-screen">
				<LandingPage />
				<div className=" h-72 w-full bg-grayish-violet mt-48">
					<div className="-translate-y-24 relative bg-dark-violet max-w-7xl m-auto h-44 rounded-xl flex w-full justify-center items-center">
						<div className="w-full h-full absolute overflow-clip rounded-xl">
							<Image
								src={CustomPatternDesktop}
								className="w-full h-full"
								alt="custom pattern for desktop"
							/>
						</div>
						<div className="flex space-x-6 px-20 w-full">
							<div className="bg-red-500 w-full">
								<input
									type="text"
									className="lg:w-[1000px] h-72"
									placeholder="Shorten a link here..."
								/>
							</div>
								<Button className="w-40 h-full pxy-6 rounded-md">Shorten it!</Button>
						</div>
					</div>
				</div>
				<div className="h-30 w-full bg-cyan">cyan</div>
				<div className="h-30 w-full bg-dark-violet">dark violet</div>
				<div className="h-30 w-full bg-grayish-violet">gray</div>
				<div className="h-30 w-full bg-very-dark-violet">very dark violet</div>
				<div className="h-30 w-full bg-very-dark-blue">very dark blue </div>
			</main>
		</NextUIProvider>
	);
}
